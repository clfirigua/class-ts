import { obtenerProductos } from "./services/product.service"
import { filtrarProductoPorPrecio } from "./utils/filter.ptoducts"

const main = async () => {

    const productos = await obtenerProductos()
    const data = filtrarProductoPorPrecio(productos, 300)

}

main()

