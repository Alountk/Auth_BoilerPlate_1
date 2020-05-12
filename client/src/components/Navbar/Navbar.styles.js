import styled from "styled-components";
import { animated } from "react-spring";

// export const NavBar = styled.nav`
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: "space-evenly";
//     align-items: center;
//     background: #333;
//     color:white;
//     height: 10vh;
//     overflow: hidden;
    

//     a {
//     float: left;
//     display: block;
//     color: #f2f2f2;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
//     font-size: 17px;
//     }

//     a:hover {
//     background-color: #ddd;
//     color: black;
//     }

//     a.active {
//     background-color: #4CAF50;
//     color: white;
//     }

//     .icon {
//     display: none;
//     }

// `;

export const NavBar = styled(animated.nav)`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
  .link{
    text-decoration:none;
  }

`;

export const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

export const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & span {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;