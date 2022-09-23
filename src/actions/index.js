export const add = (data)=>{
    return {
        type : 'add',
        payload : data
    }
}

export const del = (data)=>{
    return {
        type : 'delete',
        payload : data
    }
}