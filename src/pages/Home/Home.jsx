import { useEffect ,useState} from "react"
import  Product  from "../Product/Product"

const Home = () => {

    const [products , setProducts] = useState('')

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=> setProducts(res))
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

export default Home