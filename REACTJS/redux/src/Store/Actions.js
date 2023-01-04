
export const getdataAction=()=>{
    return (dispatch)=>{
        fetch("http://localhost:5050/products").then((res)=>res.json()).then((response)=>{
              
        dispatch({
                type:"GET_PRODUCTS",
                payload:response
            })
        }) 
    }
   
}

export const addproductAction=(id)=>{
    return (dispatch)=>{
        fetch("http://localhost:5050/products/"+id).then((res)=>res.json()).then((response)=>{
              console.log(response)
        dispatch({
            type:"ADD_PRODUCT",
            payload:response
        })
    })
  }
}

export const removeproductAction=(id)=>{
    return{
        type:"REMOVE_PRODUCT",
        payload:id
       } 
}