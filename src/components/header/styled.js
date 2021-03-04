import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Menu = styled.header`
    height: 122px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: '#005000';
    border-bottom: 2px solid #1F1E1D;
`;

export const Options = styled(Link)`
    height: 44px;
    color: ${({active}) => !!active ? '#116530' : '#000'};
    text-decoration: none;
    font-size: 2rem;
`;