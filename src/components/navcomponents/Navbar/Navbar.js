import React, { useState, useEffect } from 'react';
import { useAuth } from "../../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("")
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out :(")
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            {error && [error]}
            <NavLogo to="/">
              <NavIcon src={require("../../../images/robo-logo-circle.png").default} alt="ROBO CS" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Updates</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/events">Events</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              {currentUser ? 
              (
                <>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/dashboard">
                        <Button primary>ACCOUNT</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/dashboard">
                        <Button onClick={closeMobileMenu} primary>
                          ACCOUNT
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink onClick={handleLogout}>
                        <Button primary>LOGOUT</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink onClick={handleLogout}>
                        <Button onClick={closeMobileMenu} primary>
                          LOGOUT
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                </>
              ) : (
                <>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/login">
                        <Button primary>LOG IN</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/login">
                        <Button onClick={closeMobileMenu} primary>
                          JOIN
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                                    <NavItemBtn>
                    {button ? (
                      <NavBtnLink to="/signup">
                        <Button primary>SIGN UP</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to="/signup">
                        <Button onClick={closeMobileMenu} primary>
                          SIGN UP
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                </>
              )}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;