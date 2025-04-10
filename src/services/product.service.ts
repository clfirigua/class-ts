import { Products } from "../interfaces/product.interface";

const urlBase = "https://fakestoreapi.com"



export const obtenerProductos = async ():Promise<Products[]> =>{
    const response = await fetch(`${urlBase}/products`);
    const data = await response.json();

    const productos:Products[] =  data.map((producto:any) => ({
        category:producto.category,
        description:producto.description,
        id:producto.id,
        image:producto.image,
        price:producto.price,
        rating:producto.rating,
        title:producto.title,
    }));

    return productos
}




