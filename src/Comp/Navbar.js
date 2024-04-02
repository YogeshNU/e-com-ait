import React from 'react'
import '../Styles/navbar.css'
import "react-feather"
import { ShoppingCart } from 'react-feather'

const Navbar = ({size, setShow}) => {
    return(
        <nav>
            <div className='nav_box'>
                <span className='my_shop' onClick={() => setShow(true)}>
                     My Shopping
                </span>
                <div className='cart' onClick={() => setShow(false)}>
                    <span>
                   <ShoppingCart />
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar