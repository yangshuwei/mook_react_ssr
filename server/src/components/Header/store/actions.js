import { CHANGE_LOGIN } from "./contants";
const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

/**
 * 获取登录状态
 */
export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=M5s2sPneDE').then((res) => {
      dispatch(changeLogin(res.data.data.login))
    })
  }
}

/**
 * login
 */
export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json?secret=M5s2sPneDE').then((res) => {
      dispatch(changeLogin(true))
    })

  }
}
export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json?secret=M5s2sPneDE').then((res) => {
      dispatch(changeLogin(false))
    })

  }
}