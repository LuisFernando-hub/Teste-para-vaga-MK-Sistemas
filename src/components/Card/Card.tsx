import { ProductData } from "../../interface/products-data";
import { ShoppingBag } from "lucide-react";
import { CardButton, CardButtonDiv, CardContainer, CardDescriptionDiv, CardDivTtile, CardPhoto, CardPrice, CardPriceDiv, CardTitle } from "./Card.elements";

type CardProps = {
    product: ProductData;
    handleBuyProduct: (product: ProductData) => void;
}

export default function Card(props: CardProps) {
    return (
        <CardContainer>
            <CardPhoto src={props.product.photo} width={111} height={138} />
            <CardDivTtile>
                <CardTitle>{props.product.brand} {props.product.name}</CardTitle>
                <CardPriceDiv><CardPrice>R${parseFloat(props.product.price.toString())}</CardPrice></CardPriceDiv>
            </CardDivTtile>
            <CardDescriptionDiv>
                <p>{props.product.description}</p>
            </CardDescriptionDiv>
            <CardButtonDiv>
                <CardButton onClick={() => props.handleBuyProduct(props.product)}><ShoppingBag />COMPRAR</CardButton>
            </CardButtonDiv>
        </CardContainer>
    )
}