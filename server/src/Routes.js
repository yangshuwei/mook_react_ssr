import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './continers/Home';
import Translation from './continers/Translation';
import NotFound from './continers/NotFound';
export default [{
    path: '/',
    component: App,
    loadData:App.loadData,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home'
        }, {
            path: '/translation',
            component: Translation,
            loadData: Translation.loadData,
            exact: true,
            key: 'translation'
        },
        {
            component:NotFound
        }
    ]
}];




