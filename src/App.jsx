import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import Navbar from "./pages/Layout/Navbar/Navbar"
import Footer from "./pages/Layout/Footer/Footer"
import Layout from "./pages/Layout/Layout"
import Login from "./pages/Login/Login"

const App = () =>{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path={'/product/:id'} element={<ProductInfo />} />
                        <Route path={"*"} element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App