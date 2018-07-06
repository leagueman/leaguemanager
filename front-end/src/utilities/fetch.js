let Authorization = ''

const standard = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
}

const getHeaders = ()=>(
    {
        'content-type': 'application/json',
        'Authorization': Authorization
    }
)

export const getStandard = ()=>(
    Object.assign(
        standard, 
        {
            headers: getHeaders(),
        }
    )
)

export const getRequest = body=>(
    Object.assign(
        standard, 
        {
            headers: getHeaders(),
            body: body,
        }
    )
)

export const post = content=>(
    Object.assign(
        standard, 
        {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(content),
        }
    )
)

export const put = content=>(
    Object.assign(
        standard, 
        {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify(content),
        }
    )
)
    


// export const getRequest = body=>({
//         method: 'GET',
//         headers: {
//         'content-type': 'application/json',
//         'Authorization': Authorization
//         },
//         body: body,
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'include',
// })

export const setAuthorization = (token)=>{
    Authorization = 'Bearer ' + token;
}
 