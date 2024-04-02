import React  from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products";
import Product from "../Components/Product";
import Cart from "../Components/Cart";

const Routing = () => {
    return(
        <div>
             <Routes>
                <Route path="/" element={<Products />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/products/:id" element={<Product />}/>
             </Routes>
        </div>
    )
}
 export default Routing;