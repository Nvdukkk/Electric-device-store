import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 18px;
  background: transparent;
  border: 0.05rem solid #000;
  border-color: ${(props) => (props.cart ? "var(--mainYellow)" : "#000")};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "#000")};
  padding: 10px 15px;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease;
  &:hover {
    background: ${(prop) => (prop.cart ? "var(--mainYellow)" : "#000")};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
  .span {
    font-size: 20px;
  }
`;
