import styled, { keyframes } from "styled-components";

const tilt = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

export const DivPesquisa = styled.div`
display: flex;
align-items: center;
justify-content: center;
label{
  margin-left: 30px;
}
`;

export const Celula = styled.div`
  height: 116px;
  background-color: #58a558ca;
  //box-shadow: 0px 3px 6px #fff;
  border: 2px solid #fff;
  border-radius: 22px;
  color: #ffffffa1;
  margin: 30px;
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  &:hover {
    animation: ${tilt} 0.5s forwards;
  }
`;
