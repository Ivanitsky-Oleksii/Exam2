import Home from "pages/Home/Home";
import { useState } from "react";


type Props = {}
type ProductsInCart = {
  [id:number]:number}

  const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})
    const totalPrice = (id:number,count:number) => {
      setProductsInCart((prevState) => ({
        ...prevState,
        [id]: (prevState[id] || 0) + count,
      }))
    }
      return (
<Home totalPrice={totalPrice} productsInCart={productsInCart}/>
)
}
export default App