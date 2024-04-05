import { useContext } from "react";
import { mainContext } from "../../App";


const Sidebar = () => {

    const {categories, setCategories, price, setPrice} = useContext(mainContext)
        
    return(
        <form className="w-2/12 bg-blue-500 top-2/4 left-2/4 sticky flex flex-col p-10 my-20 rounded-lg">

            <label htmlFor="price">Price: {price}$</label>
            <input type="range" id="price" name="price" min={1} max={500} onChange={e => setPrice(e.target.value)} value={price} />

            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
            <select name="category" id="category" onChange={e => setCategories(e.target.value)} value={categories} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">All</option>
                <option value="women's clothing">Women`s Clothing</option>
                <option value="men's clothing">Men`s Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
        </form>
    )
}

export default Sidebar;