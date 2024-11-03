import React, {useRef} from 'react'
import { FaPlus } from "react-icons/fa";

const AddItem = ({setNewItems, newItems, handleSubmit}) => {
    const inputRef = useRef()
    // console.log(inputRef);
    
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <input 
            type="text" 
            id='addInput'
            placeholder='Add Item'
            required
            value={newItems}
            onChange={e => setNewItems(e.target.value)}
            autoFocus
            ref={inputRef}
        />
        <button 
            className="btn"
            type="submit"
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem