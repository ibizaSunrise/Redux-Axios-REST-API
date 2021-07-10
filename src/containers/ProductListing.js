import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

export default function ProductListing() {
    const products = useSelector(state => state)
    console.log(products)
    return (
        <div className = "flex flex-wrap m-4">
            <ProductComponent/>
        </div>
    )
}
