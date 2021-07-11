import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

export default function ProductDitail() {
    const product = useSelector(state => state.product)
    const { image, title, price, category, description } = product
    const { productID } = useParams();
    const dispatch = useDispatch()

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch(er => {
            console.log("Error: ", er)
        })
        dispatch(selectedProduct(response.data))
    };
    useEffect(() => {
        if (productID && productID !== "") fetchProductDetail()
    }, [productID])
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{title}</h1>
                        <div className="flex mb-4">
                            <p className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</p>
                        </div>
                        <p className="leading-relaxed mb-4">{description}</p>
                        {/* <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Color</span>
                            <span className="ml-auto text-gray-900">Blue</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Size</span>
                            <span className="ml-auto text-gray-900">Medium</span>
                        </div> */}
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Category</span>
                            <span className="ml-auto text-gray-900">{category}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2  lg:h-auto h-64 object-cover object-center rounded" src={image} />
                </div>
            </div>
        </section>
    )
}
