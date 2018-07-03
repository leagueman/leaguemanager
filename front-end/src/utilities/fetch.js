// import axios from 'axios';

module.exports = {
    getStandard: {
        method: 'GET',
        headers: {
        'content-type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
    },
    getRequest: (body)=>({
        method: 'GET',
        headers: {
        'content-type': 'application/json'
        },
        body: body,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
    }),
    // axios: ()=>(axios.create({
    //     baseURL: 'https://localhost:9000',
    //     timeout: 1000,
    // })),
}