import { ShoppingCart } from 'lucide-react';
import { Container, NavBar, NavButton, NavTitle, NavTitleH1, NavTitleP } from './Header.elements';



export default function Header() {
    return (
        <Container>
            <NavBar>
                <NavTitle><NavTitleH1>MKS</NavTitleH1> <NavTitleP>Sistemas</NavTitleP></NavTitle>
                <NavButton><ShoppingCart />0</NavButton>
            </NavBar>
        </Container>
    )
}
