export const typeOfUser = (user)=>{
    let keys = Object.keys(user)
                    .filter(key=>key.match(/is[A-Z]/))
                    .filter(key=>user[key])
    return keys[0]
}