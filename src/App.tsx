import Header from "./components/Header/Header";
import { List } from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import { ProductData } from "./interface/products-data";
import { useProductsData } from "./hooks/useProductsData";
import SideBar from "./components/Sidebar/Sidebar";
import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";




function App() {
  const { data, isLoading } = useProductsData();

  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [cart, setCart] = React.useState<ProductData[]>([]);
  const [cartQtd, setCartQtd] = React.useState<number>(0);
  const [totalCart, setTotalCart] = React.useState<number>(0);
  const [product, setProduct] = React.useState<ProductData>();
  const Swal = require('sweetalert2')

  const handleOpenCart = () => {
    if (openSidebar) return setOpenSidebar(false);

    setOpenSidebar(true);
    handleTotalCart();
  }

  const handleBuyProduct = (product: ProductData) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      console.log(cart);
    }
    setCartQtd((prevCartQtd) => prevCartQtd + 1);
    handleTotalCart();
  }

  const handleRemoveProductCart = (id: number) => {
    const updatedCart = cart.filter((item) =>
      item.id !== id
    );
    setCart(updatedCart);
    setCartQtd(cartQtd - 1);
    handleTotalCart();
  }

  const handleCartQtd = (id: number, sum: boolean) => {
    if (sum) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + (sum ? 1 : -1), 0) } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity < 1) {
            return item;
          } else {
            return { ...item, quantity: newQuantity };
          }
        }
        return item;
      });
      setCart(updatedCart);

      setCart(updatedCart);
    }
    handleTotalCart();
  }

  React.useEffect(() => {
    handleTotalCart();
  }, [cart, cartQtd, totalCart])

  const handleTotalCart = () => {
    const totalCart = cart.map((item) => {
      return parseFloat(item.price.toString()) * item.quantity;
    }).reduce((acc, curr) => acc + curr, 0);

    setTotalCart(totalCart);
  }

  const handleBuyFinish = () => {
    setOpenSidebar(false);
    setCart([]);
    setCartQtd(0);
    setTotalCart(0);

    Swal.fire("Compra Finalizada com sucesso!", "", "success");
  }

  return (
    <>
      <Header handleOpenCart={handleOpenCart} cartQtd={cartQtd} />
      <List>
        {
          !isLoading && <>
            {data.map((data: ProductData) => (
              <Card
                key={data.id}
                product={data}
                handleBuyProduct={handleBuyProduct}
              />
            ))}
          </>
        }

        {isLoading && <p>Carregando...</p>}
      </List>
      <SideBar open={openSidebar} handleOpenCart={handleOpenCart}  >
        {cart.map((data: ProductData) => (
          <Cart
            key={data.id}
            product={data}
            totalCart={totalCart}
            handleCartQtd={handleCartQtd}
            handleRemoveProductCart={handleRemoveProductCart}
            handleBuyFinish={handleBuyFinish}
          />
        ))}
      </SideBar>
      <Footer />
    </>
  );
}

export default App;
