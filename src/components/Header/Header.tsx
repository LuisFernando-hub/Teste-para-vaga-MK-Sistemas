import { ShoppingCart } from 'lucide-react';
import { Container, NavBar, NavButton, NavTitle, NavTitleH1, NavTitleP } from './Header.elements';



type HeaderProps = {
    handleOpenCart: () => void;
    cartQtd: number;
}


export default function Header(props: HeaderProps) {
    return (
        <Container>
            <NavBar>
                <NavTitle><NavTitleH1>MKS</NavTitleH1> <NavTitleP>Sistemas</NavTitleP></NavTitle>
                <NavButton onClick={props.handleOpenCart}><ShoppingCart />{props.cartQtd}</NavButton>
            </NavBar>
        </Container>
    )
}
