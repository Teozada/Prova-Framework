import React from 'react';
import Header from '../../components/header';
import {Body,Options} from './styled';
import Seta from '../../assets/seta-direita.svg';


const Menu = () => {
    return (
        <>
        <Header menu={true}/>
        <Body>
            <Options to="/albuns">Albúns <img src={Seta} alt="seta"/></Options>
            <Options to="/postagens">Postagens <img src={Seta} alt="seta"/></Options>
            <Options to="/todos">To'Dos <img src={Seta} alt="seta"/></Options>
        </Body>
        </>
    )
    };

    export default Menu;
