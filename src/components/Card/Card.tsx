import { ProductData } from "../../interface/products-data";
import { ShoppingBag } from "lucide-react";
import { CardButton, CardButtonDiv, CardContainer, CardDescriptionDiv, CardDivTtile, CardPhoto, CardPrice, CardPriceDiv, CardTitle } from "./Card.elements";

export default function Card(props: ProductData) {
    return (
        <CardContainer>
            <CardPhoto src={props.photo} width={111} height={138} />
            <CardDivTtile>
                <CardTitle>{props.brand} {props.name}</CardTitle>
                <CardPriceDiv><CardPrice>R${parseFloat(props.price.toString())}</CardPrice></CardPriceDiv>
            </CardDivTtile>
            <CardDescriptionDiv>
                <p>{props.description}</p>
            </CardDescriptionDiv>
            <CardButtonDiv>
                <CardButton><ShoppingBag />COMPRAR</CardButton>
            </CardButtonDiv>
        </CardContainer>
    )
}