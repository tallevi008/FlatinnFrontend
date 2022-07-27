import { storageService } from './async-storage-service.js';
import gUsers from '../../data/user.json';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
const STORAGE_KEY_USER = 'user';
// var gWatchedUser = null;

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getById,
  update,
};

// Debug technique
// window.userService = userService

_createUsers();

async function getById(userId) {
  const user = await storageService.get(STORAGE_KEY_USER, userId);
  // const user = await httpService.get(`user/${userId}`)
  // gWatchedUser = user;
  // const user = gUsers.find(user => user._id === userId);

  return user;
}
function remove(userId) {
  return storageService.remove(STORAGE_KEY_USER, userId);
  // return httpService.delete(`user/${userId}`)
}

async function update(user) {
  await storageService.put(STORAGE_KEY_USER, user);
  // user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
  return user;
}

async function login(userCred) {
  const users = await storageService.query(STORAGE_KEY_USER);
  const user = users.find(
    (user) =>
      user.username === userCred.username && user.password === userCred.password
  );
  if (!user) return console.error('No such user');
  return _saveLocalUser(user);

  // const user = await httpService.post('auth/login', userCred)
  // socketService.emit('set-user-socket', user._id);
  // if (user) return _saveLocalUser(user)
}
async function signup(userInfo) {
  if (!userInfo.fullname || !userInfo.username || !userInfo.password) {
    return console.error('some details are missing', userInfo);
  }
  const newUser = {
    fullname: userInfo.fullname,
    imgUrl: 'https://robohash.org/59985?set=set1',
    username: userInfo.username,
    password: userInfo.password,
  };
  // gUsers.push(JSON.parse(JSON.stringify(newUser)));
  // console.log('gUsers', gUsers);
  const user = await storageService.post(STORAGE_KEY_USER, newUser);
  delete user.password;
  // const user = await httpService.post('auth/signup', userCred)
  // socketService.emit('set-user-socket', user._id);
  return _saveLocalUser(user);
}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
  // socketService.emit('unset-user-socket');
  // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
  delete user.password;
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null'
  );
}

async function _createUsers() {
  var users = (await storageService.query(STORAGE_KEY_USER)) || [];
  if (!users || !users.length) {
    users = gUsers;
    storageService._save(STORAGE_KEY_USER, users);
  }
  storageService._save(STORAGE_KEY_USER, users);
}

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();
