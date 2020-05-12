import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      display:none;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg) translate(5px, 5px);
    top: -11px;
  }
  /* .open span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -5px);
    top: -11px;
  } */

  .open span:nth-child(1) {
    /* transform: rotate(-45deg) translate(-5px, 5px); */
    transform: rotate(-45deg) translate(-8px, 5px);
    top: 11px;
  }

`;