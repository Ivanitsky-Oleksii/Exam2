export type Product = {
    id:number
    title: string
    descriptions: string
    price1: number
    price2: number
    price3: number
    currency1:string
    currency2:string
    currency3:string
    

}
const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 12',
        descriptions: 'This is iPhone 12....',
        price1: 750,
        price2: 740,
        price3: 33000,
        currency1:"EUR",
        currency2:"USD",
        currency3:"UAH",
        
        
    },
    {
        id:2,
        title: 'iPhone 8',
        descriptions: 'This is iPhone 8....',
        price1: 850,
        price2: 840,
        price3: 39000,
        currency1:"EUR",
        currency2:"USD",
        currency3:"UAH",
        

    },
    {
        id:3,
        title: 'iPhone X',
        descriptions: 'This is iPhone X....',
        price1: 1250,
        price2: 1240,
        price3: 52000,
        currency1:"EUR",
        currency2:"USD",
        currency3:"UAH",
        

    },
    
]
export const getProductsObject = (array:Product[]) =>
array.reduce((object,product) => ({...object,[product.id]:product,}),{})

export default productsArray