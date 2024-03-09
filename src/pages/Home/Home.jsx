import { useEffect, useState } from "react"
import { Product } from "../Product/Product";

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    return(

        <div className="bg-blue">
            {
                products && products.map(data => {
                    return(
                        <Product data={data}/>
                    )
                })
            }
        </div>
    )
}