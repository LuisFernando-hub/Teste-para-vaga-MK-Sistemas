export interface ProductData {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    quantity: number;
}


export interface ProductsResponse {
    data: ProductData[];
}