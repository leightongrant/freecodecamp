import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='/'>FCC Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav variant='underline' as='ul'>
            <Nav.Item as='li'>
              <LinkContainer to={'/'}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item as='li'>
              <LinkContainer to={'/random-quote-machine'}>
                <Nav.Link eventKey='Quote Machine'>Quote Machine</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item as='li'>
              <LinkContainer to={'/js-calc'}>
                <Nav.Link eventKey='JavaScript Calculator'>JS Calc</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
