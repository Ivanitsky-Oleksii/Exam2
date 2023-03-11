import { Card, CardContent, CardActions,Button,Stack} from "@mui/material"
import { useState } from 'react'
import "../ProductList/ProductListItem.scss"

type Props = {
    id:number
    title: string
    descriptions: string
    price: number

    currency:string


    totalPrice:(count:number,price:number) => void
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price,

        totalPrice,
        currency,

    }: Props) => 
        {

    const [count] = useState<number>(1)
            

return (
    <>
    <Stack
    direction="row-reverse"
    justifyContent="center"
    alignItems="center"
    spacing={6}
    margin="10px"
>
        <Card variant="outlined">
        <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    margin="10px">
        <CardContent className="card1">
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h5 >{currency}</h5>
            <h3 >{price}</h3>
        </CardContent>

        </Stack>
        <CardActions>
        <Stack paddingLeft="30%" >
        <Button variant="outlined" onClick={() => totalPrice(id,count)}>BUY</Button>
        </Stack>
        </CardActions>
    </Card>
    </Stack>
    </>
)
}
export default ProdactListItem