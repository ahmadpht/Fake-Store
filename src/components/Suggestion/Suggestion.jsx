import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SuggestImg from "../SuggestImg/SuggestImg";

const Suggestion = ({product}) => {
    const [data, setData] = useState('');
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            {
                data && data?.map(item => {
                return (
                    item.id !== product.id
                    ? <SuggestImg img={item?.image} />
                    : ''
                )

            })}
        </div>
        
    )
}

export default Suggestion;