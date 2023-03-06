export type Product = {
    id:number
    title: string
    descriptions: string
    price1: number
    price2: number
    price3: number
    currency:string
}
const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 12',
        descriptions: 'This is iPhone 12....',
        price1: 750,
        price2: 740,
        price3: 30000,
        currency:"EUR",
        
    },
    {
        id:2,
        title: 'iPhone 8',
        descriptions: 'This is iPhone 8....',
        price1: 850,
        price2: 840,
        price3: 35000,
        currency:"EUR",

    },
    {
        id:3,
        title: 'iPhone X',
        descriptions: 'This is iPhone X....',
        price1: 1250,
        price2: 1230,
        price3: 51000,
        currency:"EUR",

    },
]
export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default productsArray