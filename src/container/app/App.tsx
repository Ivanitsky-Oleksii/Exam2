import Home from "pages/Home/Home";
import { useState } from "react";
import { Product } from "utils/productsArray1";


type Props = {
    productsObject?: {
        [id: number]: Product
    }
}


const App = (props: Props) => {
    const [total, setTotal] = useState<number>(0)

    const totalPrice = (price: number) => {
        setTotal(total + price)
    }
    
    const [exchangeRate, setExchangeRate] = useState<number>(1)
    const [currencyType, setCurrencyType] = useState<string>('USD')
    const сhangeCurrencyToUSD = () => {
        setCurrencyType(() => 'USD')
        setExchangeRate(0.94)
    }
    const сhangeCurrencyToUAH = () => {
        setCurrencyType(() => 'UAH')
        setExchangeRate(40)
    }
    const сhangeCurrencyToEUR = () => {
        setCurrencyType(() => 'EUR')
        setExchangeRate(1)
    }



    return (
<Home totalPrice={totalPrice} exchangeRate={exchangeRate}
currencyType={currencyType} сhangeCurrencyToUSD={сhangeCurrencyToUSD} сhangeCurrencyToUAH={сhangeCurrencyToUAH} сhangeCurrencyToEUR={сhangeCurrencyToEUR} total={total}
/>
)
}
export default App