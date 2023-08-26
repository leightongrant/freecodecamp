import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='/'>FCC Projects</Navbar.Brand>
                <Nav variant='underline' as='ul'>
                    <Nav.Item as='li'>
                        <LinkContainer to={'/'}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <LinkContainer to={'/random-quote-machine'}>
                            <Nav.Link eventKey='Quote Machine'>
                                Quote Machine
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item as='li'>
                        <Nav.Link eventKey='link-2'>Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
