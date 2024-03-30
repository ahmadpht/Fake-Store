import { useState } from "react";

const Sidebar = () => {
    const [inputValues, setInputValues] = useState({
        price: '100',
        category: '',
    })

    const handleChanges = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
    }
        
    return(
        <form className="w-96 bg-blue-500 top-2/4 left-2/4 sticky flex flex-col p-10">
            <label htmlFor="price">Price: {inputValues.price}$</label>
            <input type="range" id="price" name="price" min={1} max={500} onChange={handleChanges} value={inputValues.price} />

            <label htmlFor="category">Category:</label>
            <select name="category" id="category" onChange={handleChanges} value={inputValues.category}>
                <option value="women's clothing">women's clothing</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>
            <button>Confirm</button>
        </form>
    )
}

export default Sidebar;