import React from 'react'
import './Product.css'
import { AiOutlinePlus } from 'react-icons/ai';

const Product = (props) => {
    const {picture, company, name, balance, date} = props.product

    return (
        <>
            <div className='product-container'>
            
            <div>
                <img src={picture} alt='' className='product-image'/>
            </div>
 
 
            <div>
            <h4 className='product-name'>{company}</h4>
            <br/>
 
            <p><small>Instructor: {name}</small></p>
            <p><small>Upload Time: {date}</small></p>
            <p>Price: ${balance}</p>
            
            
            <button className='main-button'
            onClick={() => props.handleAddProduct(props.product)}
            ><AiOutlinePlus className='enroll-icon'/> Enroll Now</button>
            </div>
        </div>

        </>
    )
}

export default Product
