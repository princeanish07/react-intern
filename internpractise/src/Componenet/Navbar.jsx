import {React,useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Css/Navbar.css';
import logo from '.././assets/images/coverlogo.jpg';
function Navbar() {
  const [count, setCount] = useState(false);
  const handleClick=()=>{
    setCount(!count);
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
    
      <li style={{color:count?'red':'inherit', cursor:'pointer'}} > <Link to='home' smooth={true} duration={1000} >  Home </Link> </li>
      <li style={{color:count?'red':'inherit', cursor:'pointer'}} > <Link to='aboutus' smooth={true} duration={1000} >  About Us </Link> </li>
        
        <li style={{color:count?'red':'inherit', cursor:'pointer'}} > <Link to='Servicess' smooth={true} duration={1000} onClick={handleClick}>  Services </Link> </li>
        <li style={{color:count?'red':'inherit', cursor:'pointer'}} > <Link to='work' smooth={true} duration={1000} > My Work </Link> </li>

        <li style={{color:count?'red':'inherit', cursor:'pointer'}} > <Link to='contactus' smooth={true} duration={1000} onClick={handleClick}>  Contact </Link> </li>

      </ul>
      <div className="nav-connect">Connect With Me</div>

    </div>
  )
}

export default Navbar