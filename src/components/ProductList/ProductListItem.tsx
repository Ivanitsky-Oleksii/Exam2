import { Card, CardContent, CardActions,Button,Stack} from "@mui/material"
import { useState } from 'react'

type Props = {
    id:number
    title: string
    descriptions: string
    price1: number
    price2: number
    price3: number
    currency1:string
    currency2:string
    currency3:string

    totalPrice:(count:number,price:number) => void
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price1,
        price2,
        price3,
        totalPrice,
        currency1,
        currency2,
        currency3
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
        <CardContent>
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h5 >{currency3}</h5>
            <h3 >{price3}</h3>
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