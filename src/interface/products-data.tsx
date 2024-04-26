export interface ProductData {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}


export interface ProductsResponse {
    data: ProductData[];
}