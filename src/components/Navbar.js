import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Img/logo.png'
import { Link } from 'react-router-dom';


function NavbarApp() {
  return (
    <Navbar  bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Video Juegos
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/games" className='nav-link'>Games</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
}
export default NavbarApp;