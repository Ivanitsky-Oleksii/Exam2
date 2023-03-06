import { Card, CardContent, CardActions,Button} from "@mui/material"
import { useState } from 'react'

type Props = {
    id:number
    title: string
    descriptions: string
    price1: number
    currency:string

    totalPrice:(count:number,price:number) => void
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price1,
        totalPrice,
        currency
    }: Props) => 
        {

    const [count] = useState<number>(1)
            

return (
    <>
        <Card variant="outlined">
        <CardContent>
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h3 >{price1}</h3>
            <h5 >{currency}</h5>
        </CardContent>
        <CardActions>
        <Button variant="outlined" onClick={() => totalPrice(id,count)}>BUY</Button>
        </CardActions>
    </Card>
    </>
)
}
export default ProdactListItem