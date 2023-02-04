import { useState } from 'react';
import './App.css';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  const [showProducts, setShowProducts] = useState(true);

  return (
    <div className="App">
      <Navbar />
      {!showProducts && <Highlights />}
      {showProducts && <Products />}
    </div>
  );
}

export default App;
