import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { remove } from '../Redux/CartSlice'


const Cart = () =>{
    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    console.log(cartData)

    const handleRemove = (id) => {
        dispatch(remove(id))
    }

    return(
        <div className='container'>
           <h2>Cart</h2>
           {
            cartData && cartData.length > 0 ? (
                cartData.map((item) => (
                    <div className='row'>
                        <div className='col-md-4'>
                        <img src={item.image} className='img-fluid' style={{height:'200px'}} alt={item.title} />
                        </div>
                        <div className='col-md-4'>
                            <h4>{item.title}</h4>
                            <h4>{item.category}</h4>
                            <h4>{item.description}</h4>
                            
                        </div>
                        <div className='col-md-4'>
                            <h2 className='mb-4'>Total</h2>
                            <p>price: ${item.price}</p>
                            <button className='btn btn-danger'
                            onClick={() => {handleRemove(item.id)}}
                            >Remove</button>
                        </div>
                    </div>
                ))
            ) : <p>Please add some product</p>
           }
        </div>
    )

}
export default Cart