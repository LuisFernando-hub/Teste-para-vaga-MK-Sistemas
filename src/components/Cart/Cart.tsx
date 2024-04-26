import { CircleX } from "lucide-react";
import { ProductData } from "../../interface/products-data";
import { CartContainer, CartDiv, CartContainerQtd, CartContainerInputs, Button, Input, CartPrice, CartRemove, CartFooter, ButtonCart, CartFooterTotal, CartFooterTotalContainer } from "./Cart.elements";


type CartProps = {
    product: ProductData;
    totalCart: number;
    handleCartQtd: (id: number, sum: boolean) => void;
    handleRemoveProductCart: (id: number) => void;
    handleBuyFinish: () => void;
}

export default function Cart(props: CartProps) {

    return (
        <CartDiv>
            <CartRemove onClick={() => { props.handleRemoveProductCart(props.product.id) }}><CircleX size={32} /></CartRemove>
            <CartContainer>
                <img src={props.product.photo} width={50} height={50} />
                <span>{props.product.brand} {props.product.name}</span>
                <CartContainerQtd>
                    <label>Qtd:</label>
                    <CartContainerInputs>
                        <Button type="button" id="minus" onClick={() => { props.handleCartQtd(props.product.id, false) }} defaultValue='-' />
                        <Input id="quant" name="quant" type="text" defaultValue={props.product.quantity} value={props.product.quantity} />
                        <Button type="button" id="plus" onClick={() => { props.handleCartQtd(props.product.id, true) }} defaultValue='+' />
                    </CartContainerInputs>
                </CartContainerQtd>
                <CartPrice>R${parseFloat(props.product.price.toString())}</CartPrice>
            </CartContainer>
            <CartFooterTotalContainer>
                <CartFooterTotal>Total:</CartFooterTotal>
                <CartFooterTotal>R$ {props.totalCart}</CartFooterTotal>
            </CartFooterTotalContainer>
            <CartFooter>
                <ButtonCart  onClick={() => { props.handleBuyFinish() }}>Finalizar Compra</ButtonCart>
            </CartFooter>
        </CartDiv>
    )
}