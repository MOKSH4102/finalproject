import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategrey from "./Pages/ShopCategrey";
import Shop from "./Pages/Shop";
import LoginSignUp from "./Pages/LoginSignUp";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategrey banner={men_banner} categery="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategrey banner={women_banner} categery="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategrey banner={kids_banner} categery="kid" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<productId />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
