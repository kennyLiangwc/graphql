/**
 * Created by Liang on 2018/8/22.
 */
const express = require('express')
const app = express()
const cookiePareser = require('cookie-parser')

app.set('jwtSecret', 'hhh')
    .use(cookiePareser())
    .use((req, res, next) => {
        next()
    })
    .use(express.static(__dirname+'/static'))
    .use('/', require('./router/index'))
    .use((err, res, req, next) => {
        if(err.status != 404)
        req.status(err.status || 500).end(`服务器异常`)
    })
    .listen(3001);