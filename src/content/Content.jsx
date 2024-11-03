import { useState, useEffect } from "react";
import "./content.css"
import AddItem from "../additem/AddItem"
import SearchItem from "../searchitem/SearchItem";
import List from "../list/List";

const Content = () => {
  //  let toDo = localStorage.setItem("toDoList", JSON.stringify(list))
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("toDoList")) || [])
  // console.log(items);

  const [searchItem, setSearchItem] = useState("")

  const [newItems, setNewItems] = useState("")
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {
      id,
      checked: false,
      item,
    }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return
    addItem(newItems)
    setNewItems("")
  }

  // console.log("before UseEffect");
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(items))
  }, [items])

  // console.log("After UseEffect");


  const handleCheck = (id) => {
    console.log(`key - ${id}`);
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem("toDoList", JSON.stringify(listItems))
  }

  const handleDelite = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem("toDoList", JSON.stringify(listItems))
  }
  return (
    <>
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <AddItem
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />

      <List
        handleDelite={handleDelite}
        handleCheck={handleCheck}
        items={items.filter(item => (item.item).toLowerCase().includes(searchItem.toLowerCase()))}

      />
    </>
  )
}

export default Content