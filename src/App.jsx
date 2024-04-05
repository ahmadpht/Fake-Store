// react 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
// pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from './pages/LoginPage/Login/Login'
import Register from './pages/LoginPage/Register/Register'
import About from "./pages/About/About"; 
import Card from "./pages/Card/Card";
//components
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import Menu from './components/Layout/Menu/Menu'
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ShowNavbar from "./components/ShowLayout/ShowNavbar/ShowNavbar"
import ShowFooter from "./components/ShowLayout/ShowFooter/ShowFooter"

export const mainContext = createContext();

const App = () => {

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');
  
  return (
    <>
    <mainContext.Provider value={{search, setSearch, categories, setCategories, price, setPrice}}>

      <Router>
        <ShowNavbar>
          <Navbar/>
          <Menu />
        </ShowNavbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/product/:id"} element={<ProductInfo />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/card"} element={<Card/>} />
        </Routes>
        <ShowFooter>
          <Footer/>
        </ShowFooter>
      </Router>
    </mainContext.Provider>
    </>
  );
};
export default App;
