import { useContext } from "react"
import { mainContext } from "../../../App"

const Category = () => {

    const {categories, setCategories} = useContext(mainContext) 
    
  return (

    <form className="flex flex-col" name="category" id="category" onChange={e => setCategories(e.target.value)} value={categories}>
    <label>All
        <input name="value" type="radio" value=''/>
    </label>
    <label>Women`s Clothing
        <input name="value" type="radio"value="women's clothing"/>
    </label>
    <label>Men`s Clothing
        <input name="value" type="radio" value="men's clothing"/>
    </label>
    <label>Jewelery
        <input name="value" type="radio" value="jewelery"/>
    </label>
    <label>Electronics
        <input name="value" type="radio" value="electronics"/>
    </label>
</form>
  )
}

export default Category
