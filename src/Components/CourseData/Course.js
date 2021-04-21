import React, {useState} from 'react'
import Product from './Product'
import Fake from '../../Fake.json'

import './Course.css'
import Order from '../Header/Order'



const Course = () => {

    const first20 = Fake.slice(0, 100)
    const [products, setProducts] = useState(first20)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
        console.log('Product Added', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }



    return (
        <>
<div class="row">
  <div class="column column-1">
    <div class="card-2">
    <div className='product-container'>
            
            {
                products.map(product => <Product 
                    handleAddProduct = {handleAddProduct}
                    product={product}></Product>)
            }

            </div>
    </div>
  </div>

  <div class="column column-2">
    <div class="card-1">
    <div className='cart-container'>
                <Order cart={cart}/>
            </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Course
