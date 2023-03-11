import { Stack } from '@mui/material'

type Props = {
    exchangeRate:number
    currencyType:string
    total: number
}

const CartTotal = ({
    total,
    exchangeRate,
    currencyType
}: Props) => {
    return (
        <>
        <Stack
                justifyContent="center"
                alignItems="center"
                margin="10px"
                fontSize="30px"
            >
        
        Total: {total * exchangeRate} {currencyType}
            </Stack>
        </>
        
        
    )
    
}
export default CartTotal
