import router from '../router';
import { storageService } from './async-storage-service';

import { httpService } from './httpService';

const API_URL = 'user';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser';

window.userQuery = query;
window.userGetById = getById;
window.userSave = save;
window.userLogin = login;
window.userSignup = signup;
login;
// _createUsers()
var gUsers = [
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
export const userService = {
  query,
  getById,
  save,
  getEmptyStay,
  login,
  signup,
  logout,
  getLoggedInUser,
};

async function query(filterBy = {}) {
  try {
    const users = await httpService.get(API_URL, filterBy);
    // console.log('users from async mongo=', users)
    return users;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not get users');
  }
}

async function getById(id) {
  try {
    const foundUser = await httpService.get(`${API_URL}/${id}`);
    return foundUser;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not get user by id');
  }
}

async function save(user) {
  const result = user._id
    ? await httpService.put(`${API_URL}/${user._id}`, user)
    : await httpService.post(API_URL, user);
  return result;
}

function getEmptyStay() {
  return {
    _id: '',
  };
}

function _save(users) {
  storageService._save(KEY, users);
}

async function _createUsers() {
  console.log('create users runnnnn');
  var users = (await query()) || [];

  console.log('result = ', users);
  if (!users || users.length === 0) {
    console.log('there are no users!!!!');
    users = gUsers;

    console.log('new  usersss=', users);
    storageService._save(KEY, users);
  }
}

async function login(userCred) {
  try {
    const result = await httpService.post('auth/login', userCred);
    console.log('loggedInUser=', result);
    _saveLocalUser(result);
    router.push('/');
    return result;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not login');
  }
}
async function signup(userCred) {
  try {
    const result = await httpService.post('auth/signup', userCred);
    console.log('signup user=', result);
    router.push('/');
    return result;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not signup');
  }
}

async function logout() {
  try {
    const result = await httpService.post('auth/logout');
    console.log('logout user=', result);
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
    return result;
  } catch (err) {
    console.log('err', err);
    throw new Error('could not logout');
  }
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedInUser() {
  console.log('user-service getLoggedinUser 2');
  const user = JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null
  );
  return user;
}
