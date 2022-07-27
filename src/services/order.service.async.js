import { storageService } from './async-storage-service'

const KEY = 'orderDB'

// _createOrders();
// window.createOrders = _createOrders
window.query1 = query
// window.getById = getById
// window.remove = remove
// window.save = save
// window.getEmptyStay = getEmptyStay
var gOrders = [
  {
    _id: 'o1225',
    hostId: '6244a257b33357644ca3d12e',
    createdAt: 9894989,
    buyer: {
      _id: 'u100',
      fullname: 'Bobi Brown',
    },
    totalPrice: 160,
    startDate: 1648385244,
    endDate: 1649076444,
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'Approved',
  },
  {
    _id: 'o1225',
    hostId: '6244a257b33357644ca3d12e',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 120,
    startDate: 1680612444,
    endDate: 1683204444,
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h101',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'Declined',
  },
  {
    _id: 'o1225',
    hostId: '6244a257b33357644ca3d12e',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 140,
    startDate: 1585134619,
    endDate: 1585393819,
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'Pending',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 260,
    startDate: 1679742619,
    endDate: 1680001819,
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'Declined',
  },
  {
    _id: 'o1225',
    hostId: 'u102',
    createdAt: 9898989,
    buyer: {
      _id: 'u101',
      fullname: 'User 1',
    },
    totalPrice: 60,
    startDate: 1711365019,
    endDate: 1711624219,
    guests: {
      adults: 2,
      kids: 1,
    },
    stay: {
      _id: 'h102',
      name: 'House Of Uncle My',
      price: 80.0,
    },
    status: 'Approved',
  },
]
export const orderService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
}

// TODO: support paging and filtering and sorting
async function query(filterBy = {}) {
  try {
    // const orders = JSON.parse(JSON.stringify(gOrders))
    const orders = await storageService.query(KEY)
    // const orders = gOrders
    // console.log('orders=-=-==-=-=-=-=', orders)
    return _filterOrders(filterBy, orders)
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get orders')
  }
}
//Tal
function _filterOrders(filterBy, orders) {
  console.log('order filter======================')
  if (!filterBy.address) {
    return orders
  }
  console.log('orders', orders)
  console.log('filterBy', filterBy)
  let filteredOrders = []
  const regex = new RegExp(filterBy.address, 'i')
  filteredOrders = orders.filter((order) => regex.test(order.address.city))
  return filteredOrders
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(order) {
  const prm = order._id
    ? storageService.put(KEY, order)
    : storageService.post(KEY, order)
  return prm
}

function getEmptyStay() {
  return {
    _id: '',
  }
}

function _save(orders) {
  storageService._save(KEY, orders)
}

async function _createOrders() {
  console.log('create orders runnnnn')
  var orders = (await query()) || []

  console.log('result = ', orders)
  if (!orders || orders.length === 0) {
    console.log('there are no orders!!!!')
    orders = gOrders

    console.log('new  ordersss=', orders)
    storageService._save(KEY, orders)
  }
}
