import { useState } from "react";
import products from "./products.json"

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/games.scss"

import Header from "./components/Header.js";
import Games from './components/Games.js';

function App() {

  const [product, setProduct] = useState(products)
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(true)

  return (
      <div className="App">

        <Header
          setShowShoppingCart={setShowShoppingCart}
          showShoppingCart={showShoppingCart}
        ></Header>

        {showShoppingCart
        ?
          <Games 
            setProduct={setProduct}
            product={product}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            setShowShoppingCart={setShowShoppingCart}
          ></Games>
        :
         <div></div>
        }
        
      </div>
  );
}

export default App;