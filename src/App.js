import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./user/pages/Auth";
import Home from "./home/pages/Home";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import Products from "./products/pages/Products";
import Product from "./products/pages/Product";
import Cart from "./cart/pages/Cart";
import { AuthContext } from "./shared/context/auth-context";
import { CartContext } from "./shared/context/cart-context";
import { useAuth } from "./shared/hooks/auth-hook";
import { useCart } from "./shared/hooks/cart-hook";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const { products, addProduct, removeProduct } = useCart();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/:categoryId/products" element={<Products />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/:categoryId/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <CartContext.Provider
        value={{
          products: products,
          addProduct: addProduct,
          removeProduct: removeProduct,
        }}
      >
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
