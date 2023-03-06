import { Grid, Typography } from "@mui/material"
import ProductListItem from "components/ProductList/ProductListItem";
import productsArray from "utils/productsArray"


type Props = {}

type ProductProps = {
    title: string
    descriptions: string
    priceEUR?:string
    priceUSD?: number
    priceUAH?: number


}

    const ProductList = (props: Props) => {
return (
    <>
        <Typography variant="h2" align="center" component="h4">
            Our shop page
        </Typography>

        <Grid container spacing={3}>
        {productsArray.map(({title,descriptions,priceEUR,priceUSD,priceUAH}: ProductProps) => (
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title={title}
                        descriptions={descriptions}
                        priceEUR={priceEUR}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)
}
export default ProductList