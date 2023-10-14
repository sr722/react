import "./Navbar.css";
import logo from "./assets/logo.jpg";
import {Link} from "react-scroll";
export function Navbar()
{
    return(
        <nav className="navbar">
           <img className="logo" src={logo} alt="logo" width="100px" height="100px"/>
           <div className="nav">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">About</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Education</Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Portfolio</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Contact</Link>
           </div>
        </nav>
    )
}
