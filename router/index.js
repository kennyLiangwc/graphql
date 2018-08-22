/**
 * Created by Liang on 2018/8/22.
 */
const express = require('express')
const Router = express.Router()



Router.use('/api',require('./api'));

module.exports = Router