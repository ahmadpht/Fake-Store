import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import ProductInfo from "./components/ProductInfo/ProductInfo"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Layout from "./components/Layout/Layout"
import { useEffect, useState } from "react"

const App = () =>{

    const path = location.pathname;
    console.log(path)
    
    return(
        <div>
            {
                // path && path === '/login'
                // ? (<Router>
                //     <Routes>
                //         <Route path="/login" element={<Login />} />
                //     </Routes>
                // </Router>)

                // : (<Router>
                //     <Navbar />
                //         <Routes>
                //         <Route index element={<Home />} />
                //         <Route path={'/product/:id'} element={<ProductInfo />} />
                //         <Route path={"*"} element={<NotFound />} />
                //         </Routes>
                //     <Footer />                        
                // </Router>)
            }
                <Router>
                    <Layout />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path={'/product/:id'} element={<ProductInfo />} />
                            <Route path={"*"} element={<NotFound />} />
                        </Routes>
                    <Layout />                        
                </Router>
        </div>

)
}

export default App