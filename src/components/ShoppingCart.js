import { useEffect, useState } from "react"

export default function ShoppingCart({shoppingCart, setShoppingCart}){

    const [freight, setFreight] = useState(0)

    useEffect(() => {

        var totalFreight = 0
        var totalPrice = 0

        shoppingCart.map((item) => {
            totalFreight = totalFreight + item.price + 10
            totalPrice += item.price
        })

        if(totalPrice >= 250){
            setFreight("R$" + totalPrice)
        }else{
            setFreight("R$"+ totalFreight)
        }

    },[shoppingCart])

    const remove = (element) => {
        var aux = shoppingCart
        aux.splice(element, 1)
        setShoppingCart([...aux])
    }

    return(
        <div>
            <div className="freight">
                <div>VALOR TOTAL: {freight}</div>
            </div>
            <div className="shopping-cart">
                {shoppingCart.length
                    ?
                    <div className="games-cart">
                        {shoppingCart.map((element, index) => (
                            <div onClick={() => {remove(index)}}>
                                <div><img src={"/images/"+ element.image}/></div>
                                <div className="name-and-price">
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p>Click para remover do carrinho</p>
                                    </div>
                                    <p>R${element.price}</p>
                                </div>
                            </div>   
                        ))}
                    </div>
                    :
                    <div className="empty-shopping-cart">SEU CARRINHO ESTÁ VAZIO</div>
                }
            </div>           
        </div>
    )
}