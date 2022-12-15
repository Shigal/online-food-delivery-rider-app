import axios from "axios";

const getToken = () => {
    return localStorage.getItem('USER_KEY');
}

export const userRegister = (authRequest) => {
    return axios({
        method: 'POST',
        url: `${process.env.hostUrl || 'http://localhost:8181'}/api/auth/signup`,
        data: authRequest
    })
}

export const userLogin = (authRequest) => {
    return axios({
        method: 'POST',
        url: `${process.env.hostUrl || 'http://localhost:8181'}/api/auth/signin`,
        data: authRequest
    })
}

export const fetchUserData=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8181'}/api/auth/profile`,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const updateProfile = (profile,id) => {
    return axios({
        method:'PUT',
        url: `${process.env.hostUrl||'http://localhost:8181'}/api/auth/profile/${id}`,
        headers:{
            'Authorization':getToken()
        },
        data: profile
    })
}

export const changeOrderStatus = (data) => {
    return axios({
        method:'PUT',
        url: `${process.env.hostUrl||'http://localhost:8181'}/thekafka/orderStatusChange`,
        headers:{
            'Authorization':getToken()
        },
        data: data
    })
}

export const publish=()=>{
    return axios({
        method:'GET',
        url: `${process.env.hostUrl||'http://localhost:8181'}/thekafka/publish/rider`,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const getOrderDetails=()=>{
    return axios({
        method:'GET',
        url: `${process.env.hostUrl||'http://localhost:8181'}/thekafka/getorder`,
        headers:{
            'Authorization':getToken()
        }
    })
}

export const getRiderById=(id)=>{
    return axios({
        method: 'GET',
        url: `${process.env.hostUrl||'http://localhost:8181'}/api/auth/profile/${id}`,
        headers:{
            'Authorization':getToken()
        }
    })
}