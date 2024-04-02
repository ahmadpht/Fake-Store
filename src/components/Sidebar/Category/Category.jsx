import { useState } from "react"

const Category = () => {

    const [categories, setCategories] = useState('all');
    const handleChanges = () => {

    }
    
  return (
    <>
        <h2>Category</h2>
        <div className="flex flex-col">
            <label>
                <input type="radio" name="value" value="all" onClick={e => setCategories(e.target.value)} />
                <span>All</span>
            </label>
            <label>
                <input type="radio" name="value" value="women's clothing" onClick={e => setCategories(e.target.value)} />
                <span>Women`s Clothing</span>
            </label>
            <label>
                <input type="radio" name="value" value="Men's Clothing" onClick={e => setCategories(e.target.value)} />
                <span>Men`s Clothing</span>
            </label>
            <label>
                <input type="radio" name="value" value="jewelery" onClick={e => setCategories(e.target.value)} />
                <span>Jewelery</span>
            </label>
            <label>
                <input type="radio" name="value" value="electronic" onClick={e => setCategories(e.target.value)} />
                <span>Electronics</span>
            </label>
        </div>
    </>
  )
}

export default Category
