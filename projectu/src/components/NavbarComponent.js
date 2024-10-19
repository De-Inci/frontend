import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./styles/Navbar.css";
import { useUser } from '@/lib/context/user'; // assuming the user context provides user information
// import { useRouter } from 'next/router';

function NavbarComponent() {
  // const router = useRouter();
  const { user, logout } = useUser();  // Assuming 'logout' function is available in user context

  const handleLoginLogoutClick = () => {
    if (user) {
      logout();  // Call logout function when user is logged in
    } else {
      window.location.href = '/auth/login'; // Redirect to login page when user is not logged in
    }
  };

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
                <Button className='login-btn' onClick={handleLoginLogoutClick}>
                  {user ? 'Logout' : 'Login'}
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarComponent;
