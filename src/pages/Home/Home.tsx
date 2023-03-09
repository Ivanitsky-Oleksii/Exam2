import Cart from "components/Cart/Cart"
import ProductList from "components/ProductList/ProductList"


type Props = {
    totalPrice:(count:number,price:number) => void
    productsInCart:{[id:number]:number}
}

const Home = ({totalPrice,productsInCart}: Props) => {
return (
    <>
<ProductList totalPrice={totalPrice} />
<Cart productsInCart={productsInCart}/>

    </>

)
}
export default Home