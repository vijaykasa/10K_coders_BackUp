import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeproductAction } from "../Store/Actions";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  console.log(cart);
  return (
    <div className="container m-5">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
            {cart.cart.map((ele,i)=> <tr key={i}><td>{i+1}</td>
            <td><img src={ele.thumbnail} style={{width:100,height:100}} alt=".."/></td>
            <td>{ele.title}</td><td>{ele.price}</td>
            <td><button onClick={()=>{dispatch(removeproductAction(ele.id))}} className="btn btn-danger btn-sm">X</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}
