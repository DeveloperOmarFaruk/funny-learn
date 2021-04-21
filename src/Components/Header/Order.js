import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'
import { TiShoppingCart } from 'react-icons/ti';
import './Order.css'

const order = (props) => {

    const cart = props.cart
    const total = cart.reduce((total, paid) => total + paid.balance, 0)

    // let parcel = 0
    // if(total > 35){
    //     parcel= 0;
    // }
 
    // else if(total > 25){
    //     parcel = 5;
    // }
 
    // else if(total > 0){
    //     parcel = 15.00;
    // }
 
    // const vat = total/20
    // const finalTotal = total  + Number(vat)
 
    // const formatNumber = num =>{
    //     const precision = num.toFixed(2)
    //     return Number(precision)
    // }


    return (
        <>
        <h3>Order Summary <GiShoppingBag/> {cart.length}</h3>
        <br/>
         
        {/* <p>Product Price: {formatNumber(total)}</p> */}
            {/* <p>Parcel Cost: {parcel}</p> */}
            {/* <p>Vat : {formatNumber(vat)}</p>
            <h5>Total Price: {formatNumber(finalTotal)}</h5> */}
        <h4>Total Price: {total}</h4>
        <button className='main-button'
            ><TiShoppingCart className='enroll-icon'/> Click Order</button>
            
        </>

    )
}

export default order