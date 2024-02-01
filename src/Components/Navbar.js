
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme ="dark" className="bg-body-tertiary" style={{height : "100px"}}>
      <Container>
        <Navbar.Brand href="#" className='text-danger' id = "brand">SANSTAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style= {{ Height: '190px' }}
            navbarScroll
          >
            <Nav.Link href="Carousel.js" active>Home</Nav.Link>
            <Nav.Link href="About.js">About</Nav.Link>
            <Nav.Link href="Testimonial.js">Reviews</Nav.Link>
            <NavDropdown title="Order" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Home.js">Menu</NavDropdown.Item>
              <NavDropdown.Item href="Work.js">
                Works
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Footer.js">
                Follow Us
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Contact.js" active>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-white"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;