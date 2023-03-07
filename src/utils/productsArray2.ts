export type Product = {
    id:number
    title: string
    descriptions: string
    price1: number
    currency1:string

}
const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 12',
        descriptions: 'This is iPhone 12....',
        price1: 740,
        currency1:"USD",

        
    },
    {
        id:2,
        title: 'iPhone 8',
        descriptions: 'This is iPhone 8....',
        price1: 840,
        currency1:"USD",

    },
    {
        id:3,
        title: 'iPhone X',
        descriptions: 'This is iPhone X....',
        price1: 1240,
        currency1:"USD",

    },
]
export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default productsArray