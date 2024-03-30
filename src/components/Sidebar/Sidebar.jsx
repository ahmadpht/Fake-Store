import { useState } from "react";

const Sidebar = () => {
    const [inputValues, setInputValues] = useState({
        searchInput: '',
        price: '100',
        category: '',
    })

    const handleChanges = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
    }
    const [displayFilter, setDisplayFilter] = useState(false);
    
    return(
        <>
        hi
        </>
    )
}

export default Sidebar;