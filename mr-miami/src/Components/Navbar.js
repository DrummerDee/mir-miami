import {Link } from 'react-router-dom'; //put this on every single routing page


// This isn't a homepage, just functionality for Navbar in the homepage
const Navbar = () => {
  return (
      <nav className="nav">
        <Link className="Home" to="/"> Express Services </Link>
        <ul>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/BookMe">Book Me</Link></li>
          <li><Link to="/Services">Services</Link></li>
        </ul>
      </nav> 
  );
}
export default Navbar;