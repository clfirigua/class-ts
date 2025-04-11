/*
📈 Tenga métodos para calcular:
🔢 Total de la suma de precios.
📊 Promedio de precios.
🔄 Desviación estándar
💰 Producto más económico.
💸 Producto más caro.
💡 Además:
🧾 Aplique IVA (por defecto 19%) a todos los productos y devuelva un nuevo arreglo con ambos precios (original y con IVA).
🔍 Exponga el valor del IVA mediante un getter.
🌟 Extra: crea un método que filtre productos con rating >= 4.5 (productos con estrella ⭐️)
*/

import Product from "../interfaces/product.interface";
import { utilProductsInterface } from "./interface/products-class.interface";


class UtilsProducts implements utilProductsInterface {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: number;

    constructor(name: string, description: string, price: number, category: string, image: string, rating: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }

    totalSumaProductos(productos: Product[]): number {
        return productos.reduce((total, producto) => total + producto.price, 0);
    }

}
