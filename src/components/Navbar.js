import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
//i just search for icon name i like and then add "fa" in front and see if it works.
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const showButton = ()=>{
    if (window.innerWidth <=960){
      setButton(false);
    }else{
      setButton(true);
    }
  }

  const handleClick =()=>{
    console.log('clicked')
    setClick(!click);
    
  }
  const closeMobileMenu = () => setClick(false);
  return (<>
    <nav className='navbar'>
        <div className='navbar-countainer'>
            <Link to="/" className='nabar-logo'>
                TRVL 
                <i>
                  <FontAwesomeIcon icon={faBurger} />
                </i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click 
                ?<i><FontAwesomeIcon icon={faTimes}/> </i>
                :<i><FontAwesomeIcon icon={faBars}/> </i>
              }  
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>   
              <li className='nav-item'>
                <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign up
                </Link>
              </li>                                        
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
  </>)
}

export default Navbar