import { useEffect, useState} from "react"
import Product from "../../components/Product/Product"
import axios from "axios"

const Home = () => {

    const [products , setProducts] = useState('')

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
            .then( res => {
                setProducts(res.data)
            })
    },[])

    return (
        <div className="grid grid-cols-4 gap-8 p-12">
        {
            products && products.map((data)=>{
                return <Product data={data} key={data.id}/>
            })
        }
        </div>
    )
}

export default Home;