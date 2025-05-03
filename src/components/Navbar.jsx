import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userSlice'

function NavbarComponent() {
  const { username } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand 
          as={NavLink}
          to='/'
        >
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          SocialConnect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to='/feed'
              style={({ isActive }) => ({ 
                fontWeight: isActive ? 500 : 400
              })}
            >Feed</Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/'
            >Followers</Nav.Link>
            <Nav.Link
              as={NavLink}
              to='/'
            >Following</Nav.Link>
          </Nav>
          <Nav>
            {!username ? (
              <>
              <Nav.Link
                as={NavLink}
                to='/signup'
                style={({ isActive }) => ({ 
                  fontWeight: isActive ? 500 : 400
                })}
              >Sign up</Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/signin'    
                style={({ isActive }) => ({ 
                  fontWeight: isActive ? 500 : 400
                })}      
              >Sign in</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  href='#'
                >Welcome, @{username}</Nav.Link>
                <Nav.Link
                  href='#'
                  onClick={() => dispatch(logout())}
                >Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;