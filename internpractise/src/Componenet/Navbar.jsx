import {React,useState} from 'react'
import { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Css/Navbar.css';
import logo from '.././assets/images/coverlogo.jpg';
import menu_open from '../assets/images/menu_open.svg'
import menu_close from '../assets/images/menu_close.svg'

function Navbar() {
  // const [count, setCount] = useState(false);
  // const handleClick=()=>{
  //   setCount(!count);
  // }
  // const [menu, setmenu] = useState("navbar");
  const menuRef =useRef();
  const openMenu =()=>{
    console.log('hello');
    menuRef.current.style.right="0";
  }
  const closeMenu =()=>{
    menuRef.current.style.right='-350px';
  }


  return (
    <div className='navbar'>

      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
    <img src={menu_close}onClick={closeMenu} alt="" className='nav-mob-close' />
      <li style={{ cursor:'pointer'}} > <Link to='home' smooth={true} duration={1000} >  Home </Link> </li>
      <li style={{cursor:'pointer'}} > <Link to='aboutus' smooth={true} duration={1000} >  About Us </Link> </li>
        
        <li style={{ cursor:'pointer'}} > <Link to='Servicess' smooth={true} duration={1000} >  Services </Link> </li>
        <li style={{ cursor:'pointer'}} > <Link to='work' smooth={true} duration={1000} > My Work </Link> </li>

        <li style={{ cursor:'pointer'}} > <Link to='contactus' smooth={true} duration={1000} >  Contact </Link> </li>

      </ul>
      <div className="nav-connect">Connect With Me</div>

    </div>
  )
}

export default Navbar