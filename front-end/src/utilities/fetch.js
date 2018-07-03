let Authorization = ''

export const getStandard = ()=>({
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Authorization': Authorization
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
})

export const getRequest = body=>(
    {
        method: 'GET',
        headers: {
        'content-type': 'application/json',
        'Authorization': Authorization
        },
        body: body,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
    }
)

export const setAuthorization = (token)=>{
    Authorization = 'Bearer ' + token;
}
 