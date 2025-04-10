import { Products } from "../interfaces/product.interface";
import { UtilsProductosInterface } from "./interfaces/products-class.interface";

export class UtilsProductos implements UtilsProductosInterface {
    private _productos: Products[] = [];

    constructor(productos: Products[]) {
        this._productos = productos;
        // Constructor v acio
    }

    totalSumaProductos(productos: Products[]): number {
       return productos.reduce((acc, producto) => acc + producto.price, 0);
    }

    promedioProductos(productos: Products[]): number {
        throw new Error("Method not implemented.");
    }

    desviacionProductos(productos: Products[]): number {
        throw new Error("Method not implemented.");
    }

    productoPorMinimoyMaximo(productos: Products[], minimo: Boolean): string {
        throw new Error("Method not implemented.");
    }

    totalProductos(productos: Products[]): number {
        throw new Error("Method not implemented.");
    }


}




