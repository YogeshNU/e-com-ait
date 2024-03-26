import React,{useEffect,  useState} from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
      getProducts();
    }, [])

    const getProducts = async() =>{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()
        console.log(data)
        setProducts(data)

    }
    return (
        <div>
            <h2>Products</h2>
            <div className="container">
             <div className="row">
                {   
                    products && products.length >0 ? (
                        products.map((item, index) => (
                            <div className="col-md-3  mt-4" >
                                <div className="card p-3 overflow-hidden h-100 shadow bg-pink text-white" >
                                    <Link to={`/product/${item.id}`}>
                                    <img class="card-img-top card-image" src={item.image} alt={item.title}
                                    style={{height:"200px", width:"160px",}}
                                    />
                                    <h6 className="text-dark dec" >{item.title}</h6>
                                    <h6 className="text-dark">{item.price}</h6>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : <p>Loading ...</p>
                }

                
             </div>
            </div>
            </div>
    )
}
export default Products