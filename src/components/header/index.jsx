import React from 'react';
import {Menu, Options} from './styled';

const Header = ({menu,albuns,postagens,todos}) => {
    return (
        <Menu>
            <Options style={{color: menu ? '#58a558ca' : '#fff'}} to="/"> Menu</Options>
            <Options style={{color: albuns ? '#58a558ca' : '#fff'}} to="/albuns"> Albums</Options>
            <Options style={{color: postagens ? '#58a558ca' : '#fff'}} to="/postagens"> Posts</Options>
            <Options style={{color: todos ? '#58a558ca' : '#fff'}} to="/todos"> To'Dos</Options>
        </Menu>
    )
}

export default Header;