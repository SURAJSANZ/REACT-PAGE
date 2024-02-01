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
        <Carousel.Caption id = 'caption'>
          <h3>FOOD IS GOOD FOR A HEALTHY HOOD</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src= {c2} alt="First slide" />
        <Carousel.Caption id = 'caption'>
          <h3>EAT HEALTHY STAY WHEALTHY</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src= {c3} alt="First slide" />
        <Carousel.Caption id = 'caption'>
          <h3>LOVE FOR FOOD SHOULD BE INFINITE</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default UncontrolledExample;