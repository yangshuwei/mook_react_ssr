
import express from 'express';
import proxy from 'express-http-proxy'
import React from 'react';
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import routes from '../Routes';
import { getStore } from '../store'
const app = express();
app.use(express.static('public'));
app.use('/revision', proxy('https://m.ehaier.com', {
    proxyReqPathResolver: function (req) {
        console.log(req.url)
        return '/sg/cms/revision' + req.url;

    }
}));
app.get('*', function (req, res) {
    const store = getStore();
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(() => {
        res.send(render(store, routes, req))
    })
})
app.listen(3000)