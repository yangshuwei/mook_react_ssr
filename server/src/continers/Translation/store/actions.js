import { CHANGE_LIST } from './constants';
const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})
export const getTranslationList = () => {
  // const request = server ? serverAxios : clientAxios;
  return (dispatch, getState, axiosInstance) => { //axiosInstance 由store 创建时传入（axios实例）
    return axiosInstance.get('/api/translations.json?secret=M5s2sPneDE')
      .then((res) => {
        if (res.data.success) {
          const list = res.data.data;
          dispatch(changeList(list))
        } else {
          const list = [];
          dispatch(changeList(list))
        }
      })
  }
}
