import { Grid, Typography,Button } from "@mui/material"
import ProductListItem from "components/ProductList/ProductListItem";
import productsArray from "utils/productsArray"


type Props = {
    totalPrice:(count:number,price:number) => void
}


    const ProductList = ({totalPrice}: Props) => {
return (
    <>
        <Typography variant="h2" align="center" component="h4">
            Our shop page
        </Typography>
        <div>
    <Button variant="outlined" >USD</Button>
    <Button variant="outlined">EUR</Button>
    <Button variant="outlined">UAH</Button>
    </div>
        <Grid container spacing={3}>
        {productsArray.map(({id,title,descriptions,price}) => (
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        id={id}
                        totalPrice={totalPrice}
                        title={title}
                        descriptions={descriptions}
                        price={price}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)
}
export default ProductList