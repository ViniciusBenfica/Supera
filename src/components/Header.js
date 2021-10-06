export default function Header({showShoppingCart, setShowShoppingCart}){
    return(
        <div className="header">
            {showShoppingCart
                ? <div onClick={() => setShowShoppingCart((!showShoppingCart))} >VER CARRINHO</div>
                : <div onClick={() => setShowShoppingCart((!showShoppingCart))} >VER JOGOS</div>
            }
        </div>
    )
}