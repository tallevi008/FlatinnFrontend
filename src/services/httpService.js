import Axios from 'axios'

//connect to the mongoDB
//work with session
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

// const BASE_URL = '//localhost:3030/api/'
var axios = Axios.create({ withCredentials: true })

export const httpService = {
  get(path, data) {
    return workAxios(path, 'GET', data)
  },
  post(path, data) {
    return workAxios(path, 'POST', data)
  },
  put(path, data) {
    return workAxios(path, 'PUT', data)
  },
  delete(path, data) {
    return workAxios(path, 'DELETE', data)
  },
}

async function workAxios(path, type = 'GET', data = null) {
  try {
    const checkObj = {
      url: `${BASE_URL}${path}`,
      method: type,
      data,
      params: type === 'GET' ? data : null,
    }

    const res = await axios({
      url: `${BASE_URL}${path}`,
      method: type,
      data,
      params: type === 'GET' ? data : null,
    })
    return res.data
  } catch (err) {
    console.log('error in axios=', err)
    throw err
  }
}
