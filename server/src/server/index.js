
import express from 'express';
import proxy from 'express-http-proxy'
import React from 'react';
import { matchRoutes } from 'react-router-config'
import { render } from './utils'
import routes from '../Routes';
import { getStore } from '../store'
const app = express();
app.use(express.static('public'));
app.use('/api', proxy('http://localhost:3500', {
    proxyReqPathResolver: function (req) {
        return '/ssr/api' + req.url;

    }
}));
app.get('*', function (req, res) {
    const store = getStore(req);
    const matchedRoutes = matchRoutes(routes, req.path);
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve,reject)=>{
                item.route.loadData(store).then(resolve).catch(resolve)
            });
            promises.push(promise)
        }
    })
    Promise.all(promises).then(() => {
        const context = {css:[]};
        const html = render(store, routes, req, context);
        if (context.action === "REPLACE") {
            res.redirect(301, context.url)
        } else if (context.NOT_FOUND) {
            res.status(404);
            res.send(html)
        } else {
            res.send(html)
        }
    })
})
app.listen(3000)