import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addproductAction, getdataAction } from "../Store/Actions";
export default function Products() {
  const dispatch=useDispatch()
    const product=useSelector((state) => state.products)    
    useEffect(() => {
      dispatch(getdataAction())
  },[]);
  return (
    <div className="container row ms-5">

    {product.products.map((ele,i)=>{
        return <div key={i} className="card col-3 me-3 mb-3" style={{width:250}}>
        <img src={ele.thumbnail}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ele.title}</h5>
          <p className="card-text">
           {ele.description}
          </p>
          <button  className="btn btn-primary btn-sm" onClick={()=>{dispatch(addproductAction(ele.id))}}>
            ADD CART
          </button>
        </div>
      </div>
    })}
    </div>
  );
}
