import { useContext } from "react";
import { mainContext } from "../../App";
import Category from "./Category/Category";

const Sidebar = () => {

    const {price ,setPrice} = useContext(mainContext)
        
    return(
        <form className="w-96 top-2/4 left-2/4 sticky flex flex-col p-10 my-20 rounded-lg bg-blue-100">

            <label htmlFor="price">Price: {price}</label>
            <input type="range" id="price" name="price" min={1} max={200} onChange={e => setPrice(e.target.value)} value={price} />
            <Category />
        </form>
    )
}

export default Sidebar;