import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: "space-evenly";
    align-items: center;
    background: #333;
    color:white;
    height: 10vh;
    overflow: hidden;
    

    a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    }

    a:hover {
    background-color: #ddd;
    color: black;
    }

    a.active {
    background-color: #4CAF50;
    color: white;
    }

    .icon {
    display: none;
    }

`;