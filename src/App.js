import { useState } from "react";
import products from "./products.json"

import "./styles/App.scss"
import "./styles/header.scss"

import Header from "./components/Header.js";

function App() {

  const [showShoppingCart, setShowShoppingCart] = useState(true)

  return (
      <div className="App">

        <Header
          setShowShoppingCart={setShowShoppingCart}
          showShoppingCart={showShoppingCart}
        ></Header>
        
      </div>
  );
}

export default App;