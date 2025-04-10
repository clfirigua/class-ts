import { UtilsProductos } from "./class/products.class";
import { obtenerProductos } from "./services/product.service"
import { filtrarProductoPorPrecio } from "./utils/filter.products"

const main = async () => {

    const productos = await obtenerProductos()
    const data = filtrarProductoPorPrecio(productos, 300);

    // Implementar-clase
    const utilsPrioductos = new UtilsProductos(productos);


}

main()

