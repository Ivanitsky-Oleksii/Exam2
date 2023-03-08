import Home from "pages/Home/Home";
import { useState } from "react";


type Props = {}
type ProductsInCart = {
  [id:number]:number}

  const App = (props: Props) => {
    
  const changeCurrency = (id:number)=>{{}}


    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})
    const totalPrice = (id:number,count:number) => {
      setProductsInCart((prevState) => ({
        ...prevState,
        [id]: (prevState[id] || 0) + count,
      }))
    }
      return (
<Home totalPrice={totalPrice} productsInCart={productsInCart} changeCurrency={changeCurrency}/>
)
}
export default App