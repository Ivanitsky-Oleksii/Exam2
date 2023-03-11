import CartTotal from "components/Cart/CartTotal"
import ProductList from "components/ProductList/ProductList"


type Props = {
    totalPrice:(price:number) => any
    exchangeRate:number
    currencyType:string
    сhangeCurrencyToUSD:()=>void
    сhangeCurrencyToUAH:()=>void
    сhangeCurrencyToEUR:()=>void
    total: number
}

const Home = ({сhangeCurrencyToUSD,сhangeCurrencyToUAH,сhangeCurrencyToEUR,exchangeRate,currencyType,total,totalPrice}: Props) => {
return (
    <>
<ProductList  exchangeRate={exchangeRate} totalPrice={totalPrice}
currencyType={currencyType} сhangeCurrencyToUSD={сhangeCurrencyToUSD} сhangeCurrencyToUAH={сhangeCurrencyToUAH} сhangeCurrencyToEUR={сhangeCurrencyToEUR}/>
<CartTotal exchangeRate={exchangeRate} currencyType={currencyType} total={total}/>

    </>

)
}
export default Home