import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./styles/Navbar.css";
import { useUser } from '@/lib/context/user';
// import { useRouter } from 'next/router';


function NavbarComponent() {
  // const router = useRouter();
  const user = useUser();

  const handleClick = () => {
    // router.push('/auth/login');
    window.location.href = '/auth/login'
  }

  return (
    <div className='navbar-div'>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">DeInci</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Features</Nav.Link>
                  <Nav.Link href="#action1">Pricing</Nav.Link>
                  <Nav.Link href="#action2">Testimonials</Nav.Link>
                </Nav>
                <Button className='login-btn' onClick={handleClick}>Login</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarComponent;