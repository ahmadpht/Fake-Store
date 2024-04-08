import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Suggestion = ({product}) => {

    let a = '<'
    let b = '>'
    const [data, setData] = useState(null);
    
    useEffect(() =>{    
        axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[product])

    let slide = document.querySelector('#slider');

    const scrollToLeft = () =>{
        slide.scrollLeft = slide.scrollLeft - 200;
    }

    const scrollToRight = () =>{
        slide.scrollLeft = slide.scrollLeft + 200;
    }

    return (
        <div className=" flex items-center justify-center flex-col">

                <p className="w-1/4 pb-6 mb-10 text-center text-xl font-semibold border-b-2 border-grey-200">Similar Products:</p>

            <div className="w-[440px] relative bg-primary mb-20 flex justify-center items-center">

                <button onClick={scrollToLeft} className="h-full">{b}</button>

                <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {
                        data && data.map(item => {
                        return (
                            item.id !== product.id
                            ? <Link to={`product/${item.id}`} className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' key={item.id}>
                                <img src={item?.image}/>
                            </Link>
                            : ''
                        )
                    })}
                </div>
                <button onClick={scrollToRight} className="h-full">{b}</button>
            </div>
        </div>
    )
}

export default Suggestion;