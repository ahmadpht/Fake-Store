import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Navbar from "./pages/Layout/Navbar/Navbar"
import Footer from "./pages/Layout/Footer/Footer"
import { useEffect, useState } from "react"

const App = () =>{

    const path = location.pathname;
    console.log(path)
    
    return(
        <div>
            {
                path && path === '/login'
                ? (<Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>)

                : (<Router>
                    <Navbar />
                        <Routes>
                        <Route index element={<Home />} />
                        <Route path={'/product/:id'} element={<ProductInfo />} />
                        <Route path={"*"} element={<NotFound />} />
                        </Routes>
                    <Footer />                        
                </Router>)
            }
        </div>
    )
}

export default App