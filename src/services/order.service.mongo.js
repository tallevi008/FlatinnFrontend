import { storageService } from './async-storage-service';

import { httpService } from './httpService';

const API_URL = 'order';

window.orderQuery = query;
window.orderGetById = getById;
window.orderSave = save;
// _createOrders()
var gOrders = [
  {
    _id: 'o1225',
    hostId: 'u101',
    createdAt: 9894989,
    buyer: {
      _id: 'u100',
      fullname: 'Bobi Brown',
    },
    totalPrice: 160,
    startDate: '2025/10/24',
    endDate: '2025/10/29',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u101',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/01/15',
    endDate: '2025/01/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h101',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/02/15',
    endDate: '2025/02/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/03/15',
    endDate: '2025/03/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 160,
    startDate: '2025/05/15',
    endDate: '2025/05/17',
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'pending',
  },
];
export const orderService = {
  query,
  getById,
  save,
  getEmptyStay,
};

async function query(filterBy = {}) {
  try {
    const orders = await httpService.get(API_URL, filterBy);
    console.log('orders from async mongo=', orders);
    return orders;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not get orders');
  }
}

async function getById(id) {
  try {
    const foundOrder = await httpService.get(`${API_URL}/${id}`);
    return foundOrder;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not get order by id');
  }
}

async function save(order) {
  const result = order._id
    ? await httpService.put(`${API_URL}/${order._id}`, order)
    : await httpService.post(API_URL, order);
  return result;
}

function getEmptyStay() {
  return {
    _id: '',
  };
}

function _save(orders) {
  storageService._save(KEY, orders);
}

async function _createOrders() {
  console.log('create orders runnnnn');
  var orders = (await query()) || [];

  console.log('result = ', orders);
  if (!orders || orders.length === 0) {
    console.log('there are no orders!!!!');
    orders = gOrders;

    console.log('new  ordersss=', orders);
    storageService._save(KEY, orders);
  }
}
