import Cart from "components/Cart/Cart"
import ProductList from "components/ProductList/ProductList"


type Props = {
    totalPrice:(count:number,price:number) => void
    productsInCart:{[id:number]:number}
    changeCurrency:(id:number)=>void
}

const Home = ({totalPrice,productsInCart,changeCurrency}: Props) => {
return (
    <>
<ProductList totalPrice={totalPrice} changeCurrency={changeCurrency}/>
<Cart productsInCart={productsInCart}/>

    </>

)
}
export default Home