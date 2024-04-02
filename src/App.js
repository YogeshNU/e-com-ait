//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// import Header from './Header';
// import Routing from './Routing/Routing';

import Navbar from './Comp/Navbar'
import Cart from './Comp/Cart';
import Amazon from './Comp/Amazon';
import './Styles/amazon.css';




const App = () => {
 const [show, setShow] = useState(true)
 const [cart, setCart] = useState([])
 const [warning, setWarning] = useState(false)


  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if(isPresent){ 
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
      return;
    }
  setCart([...cart, item]);

  }

  const handleChange =(item, d) =>{
      let ind = -1;
      cart.forEach((data, index) => {
        if(data.id === item.id)
        ind = index;
      });

      const tempArr = cart;
      tempArr[ind].amount += d;

      if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }

  return (
    <div>

      <React.Fragment >

        <Navbar size={cart.length} setShow={setShow}/>
        {
          show ? <Amazon handleClick={handleClick}/> :  <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        }
        
        
        {
          warning && <div className='warning'>Item is already added to your cart</div>
        }

      </React.Fragment>

      {/* <Header />
      <Routing/> */}
    </div>
  );
}

export default App;
