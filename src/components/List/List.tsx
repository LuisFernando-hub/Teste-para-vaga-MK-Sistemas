import { Container, ProductGridDiv } from "./List.elements";
import React from "react";


export const List = ({children}: {children: React.ReactNode}) => {
    return (
        <Container>
                <ProductGridDiv>
                    {children}
                </ProductGridDiv>
        </Container>
    )
}

