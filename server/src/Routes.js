import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './continers/Home';
import Login from './continers/Login';
export default [{
    path: '/',
    component: App,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home'
        }, {
            path: '/login',
            component: Login,
            exact: true,
            key: 'login'
        }
    ]
}];




