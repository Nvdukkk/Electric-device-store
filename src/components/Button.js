import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 18px;
  background: transparent;
  border: 0.05rem solid var(--mainBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
  color: ${(prop) => (prop.cart ? "var(--mainYellow)" : "var(--mainBlue)")};
  border-radius: 30px;
  padding: 10px 15px;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease;
  &:hover {
    background: ${(prop) =>
      prop.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
  .span {
    font-size: 20px;
  }
`;
