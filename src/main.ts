import { obtenerProductos } from "./services/product.service"
import { filtrarProductoPorPrecio } from "./utils/filter.products"

const main = async () => {

    const productos = await obtenerProductos()
    console.log("🚀 ~ main ~ productos:", productos)
    const data = filtrarProductoPorPrecio(productos, 300)
    console.log("🚀 ~ main ~ data:", data)

}

main()

