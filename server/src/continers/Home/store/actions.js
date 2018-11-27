// import axios from 'axios';
import { CHANGE_LIST } from './contants';
// import clientAxios from '../../../client/request';
// import serverAxios from '../../../server/request';
const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})
//https://m.ehaier.com/sg/cms/revision/getCategory.json?type=6
export const getHomeList = () => {
    // const request = server ? serverAxios : clientAxios;
    return (dispatch,getState,axiosInstance) => { //axiosInstance 由store 创建时传入（axios实例）
        return axiosInstance.get('/revision/getCategory.json?type=6')
            .then((res) => {
                const list = res.data.data;
                dispatch(changeList(list))
            })
    }
}