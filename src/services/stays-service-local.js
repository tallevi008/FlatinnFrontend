import { storageService } from './async-storage-service.js'

const KEY = 'stayDB'
import gStays from '../../data/stay.json'

_createStays()
window.createStays = _createStays
window.query = query
window.getById = getById
window.remove = remove
window.save = save
window.getEmptyStay = getEmptyStay

export const stayService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
}

// TODO: support paging and filtering and sorting
async function query(filterBy = {}) {
  try {
    const stays = JSON.parse(JSON.stringify(gStays))
    // const stays = await storageService.query(KEY);
    // console.log('stays', stays)
    return _filterStays(filterBy, stays)
  } catch (err) {
    console.log('err', err)
    throw new Error('could not get toys')
  }
}
//Tal
function _filterStays(filterBy, stays) {
  if (!filterBy.address) {
    console.log('no address')
    return stays
  }
  console.log('stays', stays)
  console.log('filterBy', filterBy)
  let filteredStays = []
  const regex = new RegExp(filterBy.address, 'i')
  filteredStays = stays.filter((stay) => regex.test(stay.address.city))
  return filteredStays
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(stay) {
  const prm = stay._id
    ? storageService.put(KEY, stay)
    : storageService.post(KEY, stay)
  return prm
}

function getEmptyStay() {
  return {
    _id: '',
  }
}

function _save(stays) {}

async function _createStays() {
  console.log('create stays runnnnn')
  var stays = (await query()) || []

  // console.log('result = ', stays)
  if (!stays || stays.length === 0) {
    console.log('there are no stays!!!!')
    stays = gStays

    // console.log('new  staysss=', stays)
    storageService._save(KEY, stays)
  }
  storageService._save(KEY, stays)
}
