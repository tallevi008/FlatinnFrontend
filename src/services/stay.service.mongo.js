import { storageService } from './async-storage-service'

import { httpService } from './httpService'

const API_URL = 'stay'

window.stayQuery = query
window.stayGetById = getById
window.staySave = save
// _createStays()
var gStays = [
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
]
export const stayService = {
  query,
  getById,
  save,
  getEmptyStay,
}

async function query(filterBy = {}) {
  try {
    const stays = await httpService.get(API_URL, filterBy)
    // console.log('stays from async mongo=', stays)
    return stays
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get stays')
  }
}

async function getById(id) {
  try {
    const foundStay = await httpService.get(`${API_URL}/${id}`)
    return foundStay
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get stay by id')
  }
}

async function save(stay) {
  const result = stay._id
    ? await httpService.put(`${API_URL}/${stay._id}`, stay)
    : await httpService.post(API_URL, stay)
  return result
}

function getEmptyStay() {
  return {
    _id: '',
  }
}

function _save(stays) {
  storageService._save(KEY, stays)
}

async function _createStays() {
  // console.log('create stays runnnnn')
  var stays = (await query()) || []

  console.log('result = ', stays)
  if (!stays || stays.length === 0) {
    console.log('there are no stays!!!!')
    stays = gStays

    console.log('new  staysss=', stays)
    storageService._save(KEY, stays)
  }
}
