import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductInfoImage from "./ProductInfoImage"
import ProductInfoDesc from "./ProductInfoDesc"
import ProductInfoPrice from "./ProductInfoPrice"
import Suggestion from "../Suggestion/Suggestion"

const ProductInfo = () => {

    const params = useParams()
    const [productInfo , setProductInfo] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => setProductInfo(res.data))
        .catch(err => console.error(err))
    },[])
        
    return (
        <div className="flex justify-center items-center w-3/5 p-8 my-6 m-auto rounded-xl">
            
            <ProductInfoImage img={productInfo?.image} alt={productInfo.title} />

            <div className="px-8 flex flex-col justify-between mb-12 border-2 border-blue-900">
                <ProductInfoDesc info={productInfo} />
                <ProductInfoPrice info={productInfo} />
                <div className="flex items-center justify-center">
                    <Link to={'/'}>
                        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-yellow-400 px-16 py-4 rounded-xl text-2xl text-white active:scale-95">Back</button>
                    </Link>
                </div>
            </div>
                <div className="suggestion">
                    <Suggestion product={productInfo.category} />
                </div>
        </div>
    )
}

export default ProductInfo
