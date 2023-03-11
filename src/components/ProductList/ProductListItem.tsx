import { Card, CardContent, CardActions,Button,Stack} from "@mui/material"
import { useState } from 'react'


type Props = {
    id:number
    title: string
    descriptions: string
    price: number
    totalPrice:(price:number) => any
    exchangeRate: number
    currencyType: string
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price,
        totalPrice,
        exchangeRate,
        currencyType


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
        <CardContent >
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h5 >{price}</h5>
            <h3 >{currencyType}</h3>
        </CardContent>

        </Stack>
        <CardActions>
        <Stack paddingLeft="30%" >
        <Button variant="outlined" onClick={() => totalPrice(price)}>BUY</Button>
        </Stack>
        </CardActions>
    </Card>
    </Stack>
    </>
)
}
export default ProdactListItem