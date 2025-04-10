import { Products } from "../../interfaces/product.interface";

export interface UtilsProductosInterface {
    totalSumaProductos(productos:Products[]): number;
    promedioProductos(productos:Products[]): number;
    desviacionProductos(productos:Products[]): number;
    productoPorMinimoyMaximo(productos:Products[],minimo:Boolean): string;
}