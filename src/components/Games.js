import { useEffect, useState } from "react";

export default function Games({product, setProduct, shoppingCart, setShoppingCart, setShowShoppingCart}){

  const [search, setSearch] = useState("")
  const [newProduct, setNewProdct] = useState(product)
  const [cloneNewProduct, setCloneNewProduct] = useState(product)

  useEffect(() => {
    if(search == ""){
      setProduct(newProduct)
    }else{
      var arrayFilter = cloneNewProduct.filter(item => (item.name.toLowerCase().indexOf(search) > -1 || item.name.toUpperCase().indexOf(search) > -1))
      setProduct(arrayFilter)
    }

  },[search])

  const order = (typeOrder) => {
      let newBuy = [...product]
      let filter = typeOrder.substring(4)
      if(typeOrder.substring(3, 0) == "cre"){
        newBuy.sort((a, b) => (a[filter] > b[filter] ? 1 : b[filter] > a[filter] ? -1 : 0));
      }else{
        newBuy.sort((a, b) => (a[filter] > b[filter] ? -1 : b[typeOrder] > a[filter] ? 1 : 0));
      }
      setProduct(newBuy)
  }

  const addArray = (element) => {
    setShoppingCart([...shoppingCart, element])
    setShowShoppingCart(false)
  }

    return(
        <div>
          <div className="filter">
              <input onChange={e => setSearch(e.target.value)}/>

              <select onChange={(e) => order(e.target.value)} className="select">
                <option>ORDERNAR POR</option>
                <option value="cre price">PREÇO CRESCENTE</option>
                <option value="dec price">PREÇO DECRESCENTE</option>
                <option value="cre score">POPULARIDADE CRESCENTE</option>
                <option value="dec score">POPULARIDADE DECRESCENTE</option>
                <option value="cre name">ALFABÉTICA CRESCENTE</option>
                <option value="dec name">ALFABÉTICA DECRESCENTE</option>
              </select>
              
          </div>

          <div className="games">
              {product.map(element => (
                  <div onClick={() => {addArray(element)}}>
                    <div><img src={"/images/"+ element.image}/></div>
                    <div className="name-and-price">
                      <div>
                        <h3>{element.name}</h3>
                        <p>Click para adicionar ao carrinho</p>
                      </div>
                      <p>R${element.price}</p>
                    </div>
                  </div>   
              ))}
          </div>
          
        </div>
    )
}