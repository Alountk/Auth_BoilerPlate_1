import React from 'react';
import { CollapseWrapper,  NavLinks } from './CollapseMenu.styles';
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "./../../context/auth/authContext";
import { logout } from "./../../api/auth.api.js";
import swal from "sweetalert";
import { setUserActionError } from "./../../context/auth/authActions";

import { useSpring } from 'react-spring';

const CollapseMenu = React.memo(({navbarState}) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });
  const [{ logged }, dispatch] = useAuthContext();
  const history = useHistory();

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
  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
            <Link className="link" to={"/"}>
            <p >Home</p>
            </Link>
            {!logged && (
            <>
                
                <Link className="link" to={"/login"}>
                <p >Login</p>
                </Link>
                <Link className="link" to={"/signup"}>
                <p href="#" >Signup</p>
                </Link>
            </>
            )}
            {logged && (
            <>
                <Link className="link" to={"/edit"}>
                <p>Edit</p>
                </Link>
                <p onClick={handleLogout}>Logout</p>
            </>
            )}
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
});

export default CollapseMenu;
