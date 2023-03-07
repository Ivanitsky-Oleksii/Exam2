import productsArray1, { getProductsObject, Product } from 'utils/productsArray1'
import { Stack } from '@mui/material'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray1),
}: Props) => {
    return (
        <>
        <Stack
                justifyContent="center"
                alignItems="center"
                margin="10px"
                fontSize="30px"
            >
        
            Total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price1 *
                        productsInCart[parseInt(productId)],
                0
            )}
            </Stack>
        </>
        
        
    )
    
}
export default CartTotal
