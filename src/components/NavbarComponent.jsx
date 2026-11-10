import { Link, NavLink } from "react-router-dom";


function NavbarComponent() {
  let navItems= ['Home', 'About', 'Products'];

  return (
<nav className="container mx-auto flex justify-between items-center h-[100px] bg-mainBlue px-[50px]">
  <h1 className="text-[24px] text-mainOrange font-extrabold">Electon</h1>
  <ul className="flex justify-center items-center gap-[15px] text-mainOrange">
    {navItems.map((item, index) => {
      return (
      <NavLink to={`/${item}`} key={index}>{item}</NavLink>
    
    )})}
  </ul>
</nav>
  )
}

export default NavbarComponent