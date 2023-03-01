import request from '@/utils/request'
export interface IResponseType<P = {}> {
    code: number
    msg: string
    data: P
}
interface IUserInfo {
    id: string
    avator: string
}
interface IError {
    code: string
}
export const fetchUserInfo = () => {
    return request<IResponseType<IUserInfo>>({
        method: 'get',
        url: '/user/info'
    })
}
export const getTreatmentStatus = () => {
    // return axios.get('/eqg/governanceFacilitiesNewSj').then((res) => res.data)
    return request<any>({
        method: 'get',
        url: '/eqg/governanceFacilitiesNewSj'
    })
}


