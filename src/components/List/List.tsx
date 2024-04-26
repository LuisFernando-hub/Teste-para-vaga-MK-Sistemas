import Card from "../Card/Card";
import { useProductsData } from "../../hooks/useProductsData";
import { ProductData } from "../../interface/products-data";
import { Container, ProductGridDiv } from "./List.elements";
import AnchorTemporaryDrawer from "../Sidebar/Sidebar";
import { Button, Drawer } from "@mui/material";
import React from "react";
import TemporaryDrawer from "../Sidebar/Sidebar";

export default function List() {
    const { data, isLoading } = useProductsData();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    return (
        <Container>
            <ProductGridDiv>
                {
                    !isLoading && <>
                        {data.map((data: ProductData) => (
                            <Card
                                id={data.id}
                                brand={data.brand}
                                name={data.name}
                                photo={data.photo}
                                description={data.description}
                                price={data.price}
                            />
                        ))}
                    </>
                }

                {isLoading && <p>Carregando...</p>}
            </ProductGridDiv>

            <TemporaryDrawer/>
        </Container>
    )
}