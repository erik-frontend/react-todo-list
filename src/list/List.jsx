import { FaRegTrashAlt } from "react-icons/fa";

const List = ({ items,handleCheck,handleDelite }) => {
    return (
        <>
            {items.length ? (<ul className="toDoList">
                {items.map(item => (
                    <li className="item" key={item.id}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label
                            className="text"
                            onClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaRegTrashAlt
                            className="icon"
                            onClick={() => handleDelite(item.id)}
                        />
                    </li>
                ))}
            </ul>) : (
                <p style={{
                    marginTop: "40px",
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "40px"
                }}>
                    your list is empty
                </p>
            )}
        </>
    )
}

export default List