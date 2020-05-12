  
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useAuthContext } from "./../../context/auth/authContext";
import { setUserActionError } from "./../../context/auth/authActions";
import { logout } from "./../../api/auth.api.js";
import { NavBar, FlexContainer,  NavLinks, BurgerWrapper } from './Navbar.styles';
import { useSpring , config } from "react-spring";
//import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

export const Navbar = React.memo(() => {
  const history = useHistory();
  const [{ logged }, dispatch] = useAuthContext();
  const [navbarState, setNavbarState] = useState(false);
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });
  
  const handleLogout = () => {
    logout()
      .then(
        swal("Done!", `Log out success!`, "success", {
          button: false,
          timer: 2900,
        })
      )
      .then(dispatch(setUserActionError()))
      .then(history.push("/"));
  };

  const handleNavbar = () => {
    setNavbarState(!navbarState);
  }



  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          {/* <Brand /> */}
          <NavLinks style={linkAnimation}>
          <Link className="link" to={"/"}>
          <span>Home</span>
        </Link>
        {!logged && (
          <>
            
            <Link className="link" to={"/login"}>
            <span>Login</span>
            </Link>
            <Link className="link" to={"/signup"}>
            <span>Signup</span>
            </Link>
          </>
        )}
        {logged && (
          <>
            <Link className="link" to={"/edit"}>
              <span>Edit</span>
            </Link>
            <span onClick={handleLogout}>Logout</span>
          </>
        )}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState} 
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      {(navbarState) && <CollapseMenu 
        navbarState={navbarState} 
        handleNavbar={handleNavbar}
      />}
   </>
  )
});