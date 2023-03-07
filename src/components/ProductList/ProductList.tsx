import { Grid, Typography, Button } from '@mui/material'
import ProductListItem from 'components/ProductList/ProductListItem'
import productsArray3 from 'utils/productsArray3'



type Props = {
    totalPrice: (count: number, price: number) => void
}

const ProductList = ({ totalPrice }: Props) => {
    return (
        <>
            <Typography variant="h2" align="center" component="h4">
                Our shop page
            </Typography>
            <Grid container spacing={3}>
                {productsArray3.map(
                    ({ id, title, descriptions, price1, currency1 }) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductListItem
                                id={id}
                                totalPrice={totalPrice}
                                title={title}
                                descriptions={descriptions}
                                currency1={currency1}
                                price1={price1}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
