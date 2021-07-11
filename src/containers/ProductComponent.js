import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductComponent() {
    const products = useSelector(state => state.allProducts.products)

    const renderList = products.map(product => {
        const { id, image, price, title, category } = product;
        return (
            <div key={id} className=" grid-rows-2 max-w-72 m-2 border border-indigo-900 overflow-hidden">
                <Link to={`/product/${id}`}>
                    <div className="">
                        <img alt="ecommerce" className="object-contain h-48 w-full p-10" src={image}></img>
                    </div>
                    <hr />
                    <div className="p-2 h-">
                        <div>
                            <h3 className="block">{category}</h3>
                            <h2 className="block">{title}</h2>
                        </div>
                        <div className="">
                            <p className="">${price}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}
