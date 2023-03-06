import { Card, CardContent, CardActions,Grid,Button} from "@mui/material"

type Props = {
    title: string
    descriptions: string
    priceEUR?: string
    priceUSD?: number
    priceUAH?: number
}


const ProdactListItem = (
    {
        title,
        descriptions,
        priceEUR,
        priceUSD,
        priceUAH
    }: Props
) => {
return (
    <>
    <Button variant="outlined">USD</Button>
    <Button variant="outlined">EUR</Button>
    <Button variant="outlined">UAH</Button>
    <Card variant="outlined">
        <CardContent>
            <h1 >{title}</h1>
            <h3 >{descriptions}</h3>
            <h3 >{priceEUR}</h3>
        </CardContent>
        <CardActions className="product-btn-wrap">
            <Button variant="outlined">BUY</Button>
        </CardActions>
    </Card>
    </>
)
}
export default ProdactListItem