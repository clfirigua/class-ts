import Product from "../interfaces/product.interface";

const urlBase = 'https://fakestoreapi.com';

export const obtenerProductos = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${urlBase}/products`);
        const data = await response.json();

        if (data.length === 0) {
            console.log('No hay productos disponibles');
            return [];
        }

        const productos: Product[] = data.map((productos: any) => {
            return {
                id: productos.id,
                title: productos.title,
                price: productos.price,
                description: productos.description,
                category: productos.category,
                image: productos.image,
                rating: productos.rating
            }
        })

        return productos;
    } catch (error) {
        console.error('El error es:', error);
        return [];
    }
}

//Metodos para calcular
export const sumaPrecios = (productos: Product[]) => {
    return  productos.reduce((total, producto) => total + producto.price, 0);
}

export const promedioPrecios = (productos: Product[]) => {
    const suma = sumaPrecios(productos);
    return suma / productos.length;
}

export const desviacionEstandar = (productos: Product[]) => {
    //pendiente
}

export const productoEconomico = (productos: Product[]) => {
    return productos.reduce((prev, curr) => (prev.price < curr.price ? prev : curr)).price;
}

export const productoMasCaro = (productos: Product[]) => {
    return productos.reduce((prev, curr) => (prev.price > curr.price ? prev : curr)).price;
}

export const productosConIVa = (productos: Product[]) => {
    //pendiente
}

// Pentiente exporner mediante getter

// Pendiente crear un metodo que filtre productos con rating mayor a 4.5