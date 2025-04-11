import Category from "./category.interface";
import Rating from "./rating.interface";

export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string | Category;
    image: string;
    rating: number | Rating;
}