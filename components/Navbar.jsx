import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <img src="/logo-navbar.png" alt="logo-navbar" />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <Nav.Link href="#other-link">Other link </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
