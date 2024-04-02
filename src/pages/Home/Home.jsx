import { useContext, useEffect, useState} from "react"
import Product from "../../components/Product/Product"
import axios from "axios"
import Sidebar from "../../components/Sidebar/Sidebar"
import { createApp } from "../../App"

const Home = () => {
    const {search} = useContext(createApp)

    const [products , setProducts] = useState('')

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
            .then( res => {
                setProducts(res.data)
            })
    },[])

    return (
        <div className="max-w[100vw] flex flex-row-reverse justify-center">
                <Sidebar />
            <div className="w-8/12 grid grid-cols-3 gap-8 p-20">
            {
                products && products.filter((data) => {
                    return search.toLowerCase() === ""
                    ? data
                    : data.title.toLowerCase().includes(search)
                })
                .map((data)=>{
                        return <Product data={data} key={data.id}/>
                })
            }
            </div>
        </div>
    )
}

export default Home;