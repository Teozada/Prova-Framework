import styled from "styled-components";

export const Ul = styled.ul`
  li {
    list-style: none;
    margin: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  outline: none;
  border: 1px solid #116530;
  border-radius: 15px;
  margin-bottom: ${({ selecionado }) => (selecionado ? "10px" : "0px")};
  transition: margin-bottom 0.3s ease-out;
`;
