import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import "./routes.css";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
//             <div className = "container">
//             <Navbar bg="dark" variant="dark" fixed="top">
            
//     <Navbar.Brand href="/home"><img src={require('./sakha-global-squarelogo-1558350597396.png')} width="75" height="75" alt="Logo"/></Navbar.Brand>
    
//     <Nav className="ml-auto">
//     <ul>
//      <li className = "lis"><Nav.Link href="/register">Check Country</Nav.Link></li>
//       <li className = "lis"><Nav.Link href="/viewall">Countries</Nav.Link></li>
//       </ul>
//       </Nav>
    
    
    
//   </Navbar>
//   </div>

<nav className="nav-wrapper grey darken-3" fixed="top">
<div className="container">

<Link to="/">
<img src={require('./sakha-global-squarelogo-1558350597396.png')} width="75" height="75" alt="Logo" align = "left"/>
</Link>

<ul className="ulStyle" align = "right">
<Link to="/register"><li className = "lis">Check Country</li></Link>
<Link to="/viewall"><li className = "lis">Countries</li></Link>
</ul>
</div>
</nav>
            
         );
    }
}
 
export default Header;