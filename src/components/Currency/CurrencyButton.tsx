import { Button } from '@mui/material'

type Props = {
    changeCurrencyToUSD: any
    changeCurrencyToEUR: any
    changeCurrencyToUAH: any
}

const CurrencyButton = ({
    changeCurrencyToUSD,
    changeCurrencyToEUR,
    changeCurrencyToUAH,
}: Props) => {
    return (
        <>
            <Button variant="outlined" onClick={changeCurrencyToUSD}>
                {' '}
                USD{' '}
            </Button>
            <Button variant="outlined" onClick={changeCurrencyToEUR}>
                {' '}
                EUR{' '}
            </Button>
            <Button variant="outlined" onClick={changeCurrencyToUAH}>
                {' '}
                UAH{' '}
            </Button>
        </>
    )
}
export default CurrencyButton