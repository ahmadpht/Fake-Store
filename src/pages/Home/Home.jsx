import { useEffect, useState} from "react"
import axios from "axios"
import Product from "../../components/Product/Product"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {

    const [products , setProducts] = useState('')

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
            .then( res => {
                setProducts(res.data)
            })
    },[])

    return (
        <div className="">
            <Sidebar />
            <div  className="grid gap-4 p-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                {
                    products && products.map((data)=>{
                        return <Product data={data} key={data.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;