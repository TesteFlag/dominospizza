import { useEffect, useState } from 'react';
import './App.css';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  const [showProducts, setShowProducts] = useState(false);

  const [cart, setCart] = useState([]);

  function addToCart(product) {

    setCart( currentCart => {
      const cartCopy = [...currentCart];
      cartCopy.push(product);
      localStorage.setItem("cart", JSON.stringify(cartCopy));
      return cartCopy;
    } );

  }

  useEffect(() => {
    if(localStorage.getItem("cart")) {
      setCart( JSON.parse(localStorage.getItem("cart")) );
    }
  }, []);

  return (
    <div className="App">
      <Navbar toggleProducts={ setShowProducts } cart={ cart } />
      {!showProducts && <Highlights toggleProducts={ setShowProducts } />}
      {showProducts && <Products addToCart={ addToCart } />}
    </div>
  );
}

export default App;
