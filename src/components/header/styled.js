import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Menu = styled.header`
    height: 122px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #58A558ca;
    border-bottom: 2px solid #1F1E1D;
`;

export const Options = styled(Link)`
    height: 44px;
    color: ${({active}) => !!active ? '#116530' : '#ffffffa1'};
    text-decoration: none;
    font-size: 2rem;
`;