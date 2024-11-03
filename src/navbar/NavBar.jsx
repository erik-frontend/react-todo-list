import './navbar.css'

const NavBar = ({btnClick}) => {
    // console.log(btnClick);
    
    
    const items = [
        "Home",
        "About",
        "Contact",
        "Gallery"
    ]
    // console.log(items);
    
  return (
    <ul className={btnClick ? 'items active' : 'items'}>
        {items.map(item => {
            return(
                <li key={item} className="item">
                    <a href="" className="link">{item}</a>
                </li>
            )
        })}
    </ul>
  )
}

export default NavBar