import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/css/header.css";
function Header() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-inherit py-2 px-lg-3 px-0" fixed='top'>
          <div className='container mx-lg-auto p-0 py-2'>
            <Navbar.Brand as={Link} to="/" className='ms-3 ms-lg-0'>
            <h4>E-Commerce</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end pe-3 align-items-center flex-grow-1 gap-1 position-relative">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="/cart">Cart</Nav.Link>
                  <Nav.Link className='mx-2' as={Link} to="/contactus">Contact Us</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
