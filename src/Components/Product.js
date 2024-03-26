import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { add } from '../Redux/CartSlice';
import "./Product.css";


const Product = () => {
    const [product, setProduct] = useState({})
    const [addToCart, setAddToCart] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    console.log(id)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(data)
        setProduct(data)
    }

    const handleAdd = (product) => {
        dispatch(add(product))
        setAddToCart(true)

    }

    return (
        <div className='container mt-4'>
            {Object.keys(product).length>0 ? (
                <>
                 <div className='row'>
                    
                    <div className='col-md-6 border back-g'>
                        <img  src={product.image} className='img-fluid ' alt={product.title}/>

                    </div>
                    <div className='col-md-6 '>
                        <h4 className='mt-4'>{product.title}</h4>
                        <div>
                            <span className='bg-primary text-white px-3 text-left'>price: ${product.price}</span>
                        </div>
                        <div className='text-left'>
                            <h4>{product.category}</h4>
                        </div>
                        <div>
                            <p>{product.description}</p>
                        </div>
                        <div>
                            <button className='btn btn-warning'
                            onClick={() =>{ handleAdd (product)}}
                            >{addToCart ? "Added": 'Add to Cart'}</button>
                        </div>
                    </div>
                    
                 </div>
                </>
            ):<p></p>}
        </div>
    )
}
export default Product;