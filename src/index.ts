import { obtenerProductos, sumaPrecios, productoEconomico, productoMasCaro } from "./services/product.service"
import { Documents } from "./utils"

Documents()

const productos = async () => {
    const productos = await obtenerProductos()
    const suma = sumaPrecios(productos)
    const economico = productoEconomico(productos)
    const caro = productoMasCaro(productos)
    console.log("productos", productos)
    console.log("suma", suma)
    console.log("producto economico", economico)
    console.log("producto mas caro", caro)
}

productos()