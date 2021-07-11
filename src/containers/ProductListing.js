import React, {useEffect} from 'react'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'

export default function ProductListing() {
    const products = useSelector(state => state)
    const dispatch = useDispatch();
   const  fetchProducts = async() => {
       const response = await axios.get('https://fakestoreapi.com/products').catch(err=> {
        console.log('Err', err)
       });
      dispatch(setProducts(response.data));
   }
   useEffect(() => {
    fetchProducts()
   }, [])

   console.log("Products: ", products)
    return (
        <div className = "grid md:grid-cols-4 m-8 gap-4 grid-cols-3">
            <ProductComponent/>
        </div>
    )
}
