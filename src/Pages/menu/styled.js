import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const tilt = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

export const Body = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const Options = styled(Link)`
    text-decoration: none;
    font-size: 4rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        width: 50px;
        margin-left: 5px;
        align-items: center;
        justify-content: center;
        fill: #fff;
        
    }
    &:hover {
    animation: ${tilt} 0.5s forwards;
  }
`;