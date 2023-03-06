import { Card, CardContent, CardActions,Button} from "@mui/material"
import { useState } from 'react'

type Props = {
    id:number
    title: string
    descriptions: string
    price: number

    totalPrice:(count:number,price:number) => void
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price,
        totalPrice
    }: Props) => 
        {

    const [count,setCount] = useState<number>(1)
            
    const onIncrement = () => {
                setCount ((prevState) => prevState + 1)
            }
return (
    <>
        <Card variant="outlined">
        <CardContent>
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h3 >{price}</h3>
        </CardContent>
        <CardActions>
        <Button variant="outlined" onClick={() => totalPrice(id,count)}>BUY</Button>
        </CardActions>
    </Card>
    </>
)
}
export default ProdactListItem