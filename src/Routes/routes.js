import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import menu from '../Pages/menu';
import albuns from '../Pages/albuns';
import postagens from '../Pages/postagens';
import todos from '../Pages/todos';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route exact path="/" component={menu} />
        <Route exact path="/albuns" component={albuns} />
        <Route exact path="/postagens" component={postagens} />
        <Route exact path="/todos" component={todos} />
        </BrowserRouter>
    )
};

export default Routes;