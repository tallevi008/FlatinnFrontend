export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
  _save,
}

async function query(entityType, delay = 300) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(entities)
    }, delay)
  })

  // return Promise.resolve(entities);
}

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId),
  )
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function postMany(entityType, newEntities) {
  return query(entityType).then((entities) => {
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    if (idx === -1)
      return Promise.reject(`Unknown Entity ${entityType} with Id: ${entityId}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  // console.log('entityType=', entityType, 'entitie=', entities)
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
