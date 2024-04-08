import { useContext } from "react";
import { mainContext } from "../../App";
import Category from "./Category/Category";

const Sidebar = () => {

    const {price ,setPrice} = useContext(mainContext)
        
    return(
        <div className="w-96 top-2/4 left-2/4 sticky flex flex-col p-10 my-20 rounded-lg bg-third">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" min={1} max={1000} onChange={e => setPrice(e.target.value)} value={price} />
            <Category />
        </div>
    )
}

export default Sidebar;