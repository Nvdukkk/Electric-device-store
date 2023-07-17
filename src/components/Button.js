import styled from "styled-components";
import React from "react";

function Button({ cart, children, className, onClick }) {
  return (
    <ButtonContainer cart={cart} className={className} onClick={onClick}>
      <div style={{ zIndex: "3", position: "relative" }}>{children}</div>
    </ButtonContainer>
  );
}

export default Button;

export const ButtonContainer = styled.button`
  position: relative;
  transition: all 0.35s;
  font-size: 18px;
  background: transparent;
  border: 0.05rem solid #000;
  border-color: ${(props) => (props.cart ? "var(--mainGold)" : "#000")};
  color: ${(prop) => (prop.cart ? "var(--mainGold)" : "#000")};
  padding: 10px 15px;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${(prop) => (prop.cart ? "var(--mainGold)" : "#000")};
    transition: all 0.35s;
    z-index: 1;
  }
  &:hover {
    color: var(--mainWhite);
  }
  &:hover:after {
    width: 100%;
  }
  &:focus {
    outline: none;
  }
  .span {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    padding: 3px 5px;
  }
`;
