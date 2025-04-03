import { Products } from "../interfaces/product.interface"

export const filtrarProductoPorPrecio = (productos:Products[],minimo:number):Pick<Products, "title" | "price">[] => {
    return productos
    .filter(producto => producto.price > minimo)
    .map(({title,price})=>({title,price}))
}

