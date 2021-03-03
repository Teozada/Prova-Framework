import React from 'react';
import {Menu, Options} from './styled';

const Header = ({menu,albuns,postagens,todos}) => {
    return (
        <Menu>
            <Options style={{color: menu ? '#116530' : '#ffffffa1'}} to="/"> Menu</Options>
            <Options style={{color: albuns ? '#116530' : '#ffffffa1'}} to="/albuns"> Albúns</Options>
            <Options style={{color: postagens ? '#116530' : '#ffffffa1'}} to="/postagens"> Postagens</Options>
            <Options style={{color: todos ? '#116530' : '#ffffffa1'}} to="/todos"> To'Dos</Options>
        </Menu>
    )
}

export default Header;