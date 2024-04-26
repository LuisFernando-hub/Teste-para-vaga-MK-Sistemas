import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { ProductsResponse } from "../interface/products-data";



const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC';

const fetchData = async () => {
    const response = await axios.get(API_URL);
    return response?.data;
}

export function useProductsData() {
    const query = useQuery({
        queryKey: ['products-data'],
        queryFn: fetchData
      })
    
    return {
        ...query,
        data: query.data?.products
    };
}