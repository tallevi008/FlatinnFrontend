export const utilService = {
  loadFromSessionStorage,
  saveToSessionStorage,
}

function loadFromSessionStorage(key) {
  var val = sessionStorage.getItem(key)
  return val ? JSON.parse(val) : null
}

function saveToSessionStorage(key, val) {
  sessionStorage[key] = JSON.stringify(val)
}
