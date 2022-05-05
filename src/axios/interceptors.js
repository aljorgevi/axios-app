import axios from 'axios'

export const authFetch = axios.create({
  baseURL: 'https://course-api.com'
})

authFetch.interceptors.request.use(
  request => {
    request.headers.common['Accept'] = 'application/json'
    console.log('request sent', { request })

    return request
  },
  error => {
    return Promise.reject(error)
  }
)
authFetch.interceptors.response.use(
  response => {
    console.log('response received', { response })
    return response
  },
  error => {
    console.log('response error', { error })
    if (error.response.status === 404) {
      // do something
      console.error('404 error, NOT FOUND')
    }
    return Promise.reject(error)
  }
)
