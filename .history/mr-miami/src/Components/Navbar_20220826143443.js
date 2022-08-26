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
          {/* <li><Link to="/Account">Account</Link></li>
          <li><Link to="/Register"> Register </Link></li>
          <li><Link to="/Login"> Login </Link></li>
          <li><Link to ="/Test"> Test </Link></li> */}
        </ul>
      </nav> 
  );
}
export default Navbar;