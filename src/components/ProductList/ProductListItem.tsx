import { Card, CardContent, CardActions,Button,Stack} from "@mui/material"

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
        currencyType,
        exchangeRate


    }: Props) => 
        {
    const changePrice = price * exchangeRate
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
            <h3 >{changePrice}</h3>
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