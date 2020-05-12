  
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useAuthContext } from "./../../context/auth/authContext";
import { setUserActionError } from "./../../context/auth/authActions";
import { logout } from "./../../api/auth.api.js";
import { NavBar } from './styles';

export const Navbar = () => {
  const history = useHistory();
  const [{ logged }, dispatch] = useAuthContext();
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
  return (
    <>
      <NavBar className="topnav">
        <Link to={"/"}>
          <a href="#" >Home</a>
        </Link>
        {!logged && (
          <>
            
            <Link to={"/login"}>
            <a href="#" >Login</a>
            </Link>
            <Link to={"/signup"}>
            <a href="#" >Signup</a>
            </Link>
          </>
        )}
        {logged && (
          <>
            <Link to={"/edit"}>
              <a href="#" >Edit</a>
            </Link>
            <a href="#" onClick={handleLogout}>Logout</a>
          </>
        )}
      </NavBar>
    </>
  );
};