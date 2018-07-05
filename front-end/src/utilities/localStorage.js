   
export const get = (key)=>{        
        return JSON.parse(localStorage.getItem(key) || null);
    }    

export const set = (obj)=>{
        Object.keys(obj)
            .filter(key=>obj.hasOwnProperty(key))
            .forEach(key=>{
                localStorage.setItem(key, JSON.stringify(obj[key]));
            })
        }
        
export const clear = ()=>{
    localStorage.clear()
}

export default {get, set, clear}