import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Suggestion = ({product}) => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() =>{    
        axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        console.log(location)
    },[product])

    const handleClick = e => {
        navigate(`/product/${e}`)
    };

    return (
        <div>
            {
                data && data.map(item => {
                return (
                    item.id !== product.id
                    ? <Link to={`product/${item.id}`} onClick={() => handleClick(item.id)} >
                        <img src={item?.image} key={item.id} />
                    </Link>
                    : ''
                )
            })}
        </div>
    )
}

export default Suggestion;