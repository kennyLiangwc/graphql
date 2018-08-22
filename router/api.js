/**
 * Created by Liang on 2018/8/22.
 */
const express = require('express')
const Router = express.Router();
const ActionDispatch = require('./action/index')
const graphqlHttp = require('express-graphql')
const MisSchame = require('../schema/mis')

const middle = async function(req, res, next) {
    next()
}

Router.use('/mis',middle,graphqlHttp({
    schema: MisSchame,
    rootValue: ActionDispatch.mis,
    graphiql: true
}))

module.exports = Router