import { Category } from "./category.interface";
import { Rating } from "./rating.interface";


export interface Products {
    category:    Category;
    description: string;
    id:          number;
    image:       string;
    price:       number;
    rating:      Rating[];
    title:       string;
   }
   

   

   