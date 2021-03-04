import styled from 'styled-components';
import { Link } from "react-router-dom";

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
`;