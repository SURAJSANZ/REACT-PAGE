import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import c1 from '../Assets/c1.png'
import c2 from '../Assets/c2.png'
import c3 from '../Assets/c3.png'


function UncontrolledExample() {
  return (
    <Carousel className='custom-carousel' id='carousel'>
      <Carousel.Item>
        <img className='d-block w-100' src= {c1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src= {c2} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src= {c3} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default UncontrolledExample;



<Navbar expand="lg" bg='dark' data-bs-theme ="dark" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#" className='text-danger'>SANSTER</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style= {{ Height: '190px' }}
      navbarScroll
    >
      <Nav.Link href="#action1" active>Home</Nav.Link>
      <Nav.Link href="#action2">About</Nav.Link>
      <NavDropdown title="Order" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Works</NavDropdown.Item>
        <NavDropdown.Item href="#action4">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5" active>
          Something else here
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" active>
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
      <Button variant="outline-warning">Search</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>