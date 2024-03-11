import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import  ProductInfo  from "./pages/ProductInfo/ProductInfo"
import  NotFond  from "./pages/NotFond/NotFond"
import  Home  from "./pages/Home/Home"
import  Navbar  from "./pages/Layout/Navbar/Navbar"
import  Footer  from "./pages/Layout/Footer/Footer"

const App = () =>{
    return(
        <>
            <Router>
                <Navbar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path={'/product/:id'} element={<ProductInfo />} />
                        <Route path={"*"} element={<NotFond />} />
                    </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App