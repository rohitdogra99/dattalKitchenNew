import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'
import axios from 'axios'

const orderNow= async(orderedItems)=>{
   const order= orderedItems.map(item=>{return {item:item.title,itemQty:item.count,itemTotal:item.total}})
   console.log(order)
    alert("Call us Now on 7559622860")
    // Add route to backend
  await   axios.post('/api/ordernow',{order:orderedItems})

}

export default function CartTotals({value, history}) {
    console.log(value)
    const {cartSubTotal, cartTax,cart, cartTotal, clearCart} = value;
    console.log(cart)
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal: 
                        </span>
                        <strong>Rs{cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax: 
                        </span>
                        <strong>Rs{0}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total: 
                        </span>
                        <strong>Rs{cartTotal}</strong>
                    </h5>
                   {/*<PayPalButton total={cartTotal} clearCart={clearCart} history={history}/> */} 

                   <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>orderNow(cart)}>
                            Order Now!!
                        </button>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
