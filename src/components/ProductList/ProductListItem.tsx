import { Card, CardContent, CardActions,Button,Stack} from "@mui/material"
import { useState } from 'react'

type Props = {
    id:number
    title: string
    descriptions: string
    price1: number
    currency1:string

    totalPrice:(count:number,price:number) => void
}


const ProdactListItem = (
    {
        id,
        title,
        descriptions,
        price1,
        totalPrice,
        currency1
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
        <CardContent>
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h3 >{price1}</h3>
            <h5 >{currency1}</h5>
        </CardContent>
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