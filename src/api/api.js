import * as axios from 'axios';

const 
    BASEURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: BASEURL,
    withCredentials: true,
    headers: {
        'API-KEY': '9f76f104-e9d8-4d12-bb48-6ce541988381'
    }
})

export const usersAPI = {

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
                withCredentials: true
            }).then(({data}) => data)
    } 
    
}
