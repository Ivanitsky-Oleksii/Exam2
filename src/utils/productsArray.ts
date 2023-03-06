type ProductProps = {
    title: string
    descriptions: string
    priceEUR?: string
    priceUSD?: number
    priceUAH?: number
}
const productsArray: ProductProps[] = [
    {
        title: 'iPhone 12',
        descriptions: 'This is iPhone 12....',
        priceEUR: "EUR 750",
        priceUSD: 740,
        priceUAH:30045,
    },
    {
        title: 'iPhone 8',
        descriptions: 'This is iPhone 8....',
        priceEUR: "EUR 850",
        priceUSD: 840,
        priceUAH:34105,
    },
    {
        title: 'iPhone X',
        descriptions: 'This is iPhone X....',
        priceEUR: "EUR 1250",
        priceUSD: 1240,
        priceUAH:50345,
    },
]
export default productsArray