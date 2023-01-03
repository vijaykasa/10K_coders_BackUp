
export const addlistAction =(data)=>{
    return {
        type:"ADD_LIST",
        payload:data
    }
}
export const deletelistAction=(data)=>{
   
    return{
        type:"DELETE_LIST",
        payload:data
    }
}