type ProductProps = {
    title: string
    descriptions: string
    priceEUR?: string
    priceUSD?: string
    priceUAH?: string
}
const productsArray: ProductProps[] = [
    {
        title: 'iPhone 12',
        descriptions: 'This is iPhone 12....',
        priceEUR: "EUR 750",
        priceUSD: "USD 740",
        priceUAH:"UAH 30045",
    },
    {
        title: 'iPhone 8',
        descriptions: 'This is iPhone 8....',
        priceEUR: "EUR 850",
        priceUSD: "USD 840",
        priceUAH:"UAH 34105",
    },
    {
        title: 'iPhone X',
        descriptions: 'This is iPhone X....',
        priceEUR: "EUR 1250",
        priceUSD: "USD 1240",
        priceUAH:"UAH 50345",
    },
]
export default productsArray