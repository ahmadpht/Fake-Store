import { useContext, useEffect, useState} from "react"
import Product from "../../components/Product/Product"
import axios from "axios"
import Sidebar from "../../components/Sidebar/Sidebar"
import { mainContext } from "../../App"

const Home = () => {
    const {search , categories, price} = useContext(mainContext);
    const [products , setProducts] = useState('');

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
            .then( res => {
                setProducts(res.data)
            })
    },[])

    return (
        <div className="max-w[100vw] flex flex-row-reverse">
                <Sidebar />
            <div className="w-4/5 grid grid-cols-3 gap-8 p-20">
            {
                products && products.filter((data) => {
                    return categories === '' 
                    ? data
                    : data.category.includes(categories)
                }).filter(data => {
                    return price === ''
                    ? data
                    : data.price <= parseInt(price)
                }).filter((data) => {
                    return search.toLowerCase() === ""
                    ? data
                    : data.title.toLowerCase().includes(search)
                })
                .map((data)=>{
                    return(
                        data.length === 0
                        ? console.log(1)
                        : <Product data={data} key={data.id}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home;