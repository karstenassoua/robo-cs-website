import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
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
  const { currentUser, logout, isAdmin } = useAuth();
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
    try {
      await logout()
      history.push("/login")
      toast.success("Logged out.")
    } catch {
      toast.error("Failed to log out :(")
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
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
                isAdmin ?
                ( 
                    <>
                      <NavItemBtn>
                        {button ? (
                          <NavBtnLink to="/profile">
                            <Button>{currentUser.email}</Button>
                          </NavBtnLink>
                        ) : (
                          <NavBtnLink to="/profile">
                            <Button onClick={closeMobileMenu} >
                              {currentUser.email}
                            </Button>
                          </NavBtnLink>
                        )}
                      </NavItemBtn>
                      <NavItemBtn>
                        {button ? (
                          <NavBtnLink to="/admin">
                            <Button>DASHBOARD</Button>
                          </NavBtnLink>
                        ) : (
                          <NavBtnLink to="/admin">
                            <Button onClick={closeMobileMenu} primary>
                              DASHBOARD
                            </Button>
                          </NavBtnLink>
                        )}
                      </NavItemBtn>
                      <NavItemBtn>
                        {button ? (
                          <NavBtnLink onClick={handleLogout}>
                            <Button primary>LOG OUT</Button>
                          </NavBtnLink>
                        ) : (
                          <NavBtnLink onClick={handleLogout}>
                            <Button onClick={closeMobileMenu} primary>
                              LOG OUT
                            </Button>
                          </NavBtnLink>
                        )}
                      </NavItemBtn>
                    </>
                ) : (
                  <>
                    <NavItemBtn>
                      {button ? (
                        <NavBtnLink to="/profile">
                          <Button>{currentUser.email}</Button>
                        </NavBtnLink>
                      ) : (
                        <NavBtnLink to="/profile">
                          <Button onClick={closeMobileMenu} >
                            {currentUser.email}
                          </Button>
                        </NavBtnLink>
                      )}
                    </NavItemBtn>
                    <NavItemBtn>
                      {button ? (
                        <NavBtnLink onClick={handleLogout}>
                          <Button primary>LOG OUT</Button>
                        </NavBtnLink>
                      ) : (
                        <NavBtnLink onClick={handleLogout}>
                          <Button onClick={closeMobileMenu} primary>
                            LOG OUT
                          </Button>
                        </NavBtnLink>
                      )}
                    </NavItemBtn>
                  </>
                )
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