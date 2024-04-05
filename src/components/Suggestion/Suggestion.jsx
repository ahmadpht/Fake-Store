import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Suggestion = (product) => {
    const [data, setData] = useState('');
    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
},[])
    return (
        data && data.filter(item => {
            return item.id === product.id
            ? item
            : item
        })

        .map(item => {
            return (
                <Link to={`${item.id}`} key={item.id}>
                    <img src={item.image} />
                </Link>
            )
        })
    )
}

export default Suggestion;