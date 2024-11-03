import { useState } from 'react'
import NavBar from '../navbar/NavBar'
import './header.css'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [btnClick, setBtnClick] = useState(false)
    // console.log(btnClick);

    const handleClick = () => {
        return setBtnClick(!btnClick)
    }
  return (
    <div className='header-top'>
      <div className="container">
        <span className="logo">Logo</span>
        <NavBar btnClick={btnClick}/>
        <div className={btnClick ? "burger active" : "burger"} onClick={handleClick}> 
          {btnClick ? (
            <IoMdClose/> 
          ):(
            <CiMenuBurger/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header