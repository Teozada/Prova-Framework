import React from 'react';
import {Menu, Options} from './styled';

const Header = ({menu,albuns,postagens,todos}) => {
    return (
        <Menu>
            <Options active={menu} to="/"> Menu</Options>
            <Options active={albuns} to="/albuns"> Albúns</Options>
            <Options active={postagens} to="/postagens"> Postagens</Options>
            <Options active={todos} to="/todos"> To'Dos</Options>
        </Menu>
    )
}

export default Header;