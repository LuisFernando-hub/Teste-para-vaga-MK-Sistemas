import { ReactElement } from "react";
import { SidebarContainer, SidebarHeader, SidebarIcon, SidebarTitle } from "./Sidebar.elements";
import { CircleX } from "lucide-react";

type SidebarProps = {
  open: boolean;
  handleOpenCart: () => void;
  children: React.ReactNode;
}


export default function SideBar(props: SidebarProps) {

  return (
    <>
      {props.open && <>
        <SidebarContainer>
          <SidebarHeader>
            <SidebarTitle>Carrinho de compras</SidebarTitle>
            <SidebarIcon onClick={props.handleOpenCart}><CircleX size={32} /></SidebarIcon>
          </SidebarHeader>

          {props.children}
        </SidebarContainer>
      </>}
    </>
  )
}