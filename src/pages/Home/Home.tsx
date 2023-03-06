import Cart from "components/Cart/Cart"
import ProductList from "components/ProductList/ProductList"


type Props = {
    totalPrice:(count:number,price:number) => void
}
const Home = ({totalPrice}: Props) => {
return (
    <>
<ProductList totalPrice={totalPrice}/>
<Cart/>
    </>

)
}
export default Home