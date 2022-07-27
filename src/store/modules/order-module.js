// import { orderService } from '../../services/order.service.async';
import { orderService } from '../../services/order.service.mongo';
export default {
  state: {
    orders: [],
    isOrderModalShown: false,
    currOrder: null,
  },
  getters: {
    //Barak
    getOrders(state) {
      let sortedOrders = JSON.parse(JSON.stringify(state.orders));
      sortedOrders.map(order => console.log('order=', order));

      sortedOrders.sort((a, b) => {
        let date1 = Date.parse(new Date(a.createdAt));
        let date2 = Date.parse(new Date(b.createdAt));
        if (date1 > date2) return -1;
        if (date1 < date2) return 1;
      });

      return sortedOrders;
    },
    getModalState(state) {
      if (state.isOrderModalShown) return state.isOrderModalShown;
    },
    getCurrOrder(state) {
      if (state.currOrder) return state.currOrder;
    },
  },
  mutations: {
    submitOrder(state, { order }) {
      state.orders.unshift(order);
    },
    //Barak
    setOrders(state, { orders, user }) {
      console.log(user);
      console.log(orders);
      // Barak original
      state.orders = orders.filter(order => user._id === order.hostId);
      console.log(state.orders);
    },
    setCurrOrder(state, { order }) {
      state.currOrder = order;
    },
    orderModalShow(state) {
      state.isOrderModalShown = true;
    },
    orderModalClose(state) {
      state.isOrderModalShown = false;
    }, //Barak+Tal
    updateOrder(state, { order }) {
      console.log(order);
      const idx = state.orders.findIndex(
        currOrder => currOrder._id === order._id
      );
      state.orders.splice(idx, 1, order);
      console.log(state.orders[idx]);
    },
  },
  actions: {
    // Tal converted to async
    async submitOrder(context, { order }) {
      console.log('action ---- submitOrder=', order);
      try {
        let orderId = await orderService.save(order);
        console.log('orderId=', orderId);
        // context.showMsg('Your order is pending...thank you')
        context.commit({ type: 'submitOrder', order });
        context.commit({ type: 'setCurrOrder', order });
        // alert('your order accepted!')
        context.commit({ type: 'orderModalShow', order });
        return order;
      } catch (err) {
        console.log('error=', err);
        return null;
      }
    },
    // Tal
    async updateOrder(context, { order, user }) {
      try {
        console.log(order);
        let updatedOrder = await orderService.save(order);
        console.log('orderId=', updatedOrder);
        context.commit({ type: 'updateOrder', order });
        // context.dispatch({ type: 'loadOrders', user });
        return updatedOrder;
      } catch (err) {
        console.log('error=', err);
      }
    },

    showMsg(msg) {
      console.log(msg);
    },
    //Barak
    async loadOrders(context, { user }) {
      try {
        const orders = await orderService.query();
        console.log(orders);
        context.commit('setOrders', { orders, user });
      } catch (err) {
        console.log('err in order-module in loadOrders:', err);
      }
    },
  },
};

// Golan original
// submitOrder(context, { order }) {
//   console.log('action ---- submitOrder=', order)

//   let orderId = await orderService.save(order)
//   if (!orderId) {
//     context.showMsg(
//       'We had an error while submitting your order, try again later',
//     )
//     return
//   }
//   context.showMsg('Your order is pending...thank you')
//   context.commit({ type: 'submitOrder', order })
// },
// showMsg(msg) {
//   console.log(msg)
// },
