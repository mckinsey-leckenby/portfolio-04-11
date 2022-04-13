import React from 'react'
import './productlist.css'
import Product from '../product/Product'

export const ProductList = () => {
  return (
    <div className='pl'>
    <div className='pl-texts'>
        <h1 className='pl-title'> Create & Inspire</h1>
        <p className='pl-desc'>
            A creative portolio that your work has bee waiting for
        </p>
    </div>
    <div className='pl-list'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        
    </div>
  </div>
  )
}

export default ProductList