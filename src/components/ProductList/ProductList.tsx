import { Grid, Typography, Button, Stack } from '@mui/material'
import ProductListItem from 'components/ProductList/ProductListItem'
import productsArray1 from 'utils/productsArray1'
import CurrencyButton from "../Currency/CurrencyButton"


type Props = {
    totalPrice:(price:number) => any
    exchangeRate:number
    currencyType:string
    сhangeCurrencyToUSD:()=>void
    сhangeCurrencyToUAH:()=>void
    сhangeCurrencyToEUR:()=>void


}

const ProductList = ({ exchangeRate,currencyType,сhangeCurrencyToUSD,сhangeCurrencyToUAH,сhangeCurrencyToEUR,totalPrice }: Props) => {
    return (
        <>
            <Typography variant="h2" align="center" component="h4">
                Our shop page
            </Typography>
            <Stack
    direction="row-reverse"
    justifyContent="center"
    alignItems="center"
    spacing={1}
    margin="10px"
>
<CurrencyButton
                    changeCurrencyToUAH={сhangeCurrencyToUAH}
                    changeCurrencyToUSD={сhangeCurrencyToUSD}
                    changeCurrencyToEUR={сhangeCurrencyToEUR}
                />
            </Stack>
            <Grid container spacing={3}>
                {productsArray1.map(
                    ({ id, title, descriptions, price}) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductListItem
                            totalPrice={totalPrice}
                                id={id}
                                title={title}
                                descriptions={descriptions}
                                exchangeRate={exchangeRate}
                                currencyType={currencyType}
                                price={price}

                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
