import './Nav.css';
import { Link } from 'react-router-dom';
import logo2 from './logo2.jpg'

function Navbar()
{
    return(
      <header className='header'>
        <a href="#"><img className='logoimg' src={logo2}></img></a>
        <nav className='navbar'>
            <a href="#">HOME</a>
            <a href="#">CONTACT</a>
     <Link className='ram'>RAM</Link>
        </nav>
      </header>
    )
}
export default Navbar;