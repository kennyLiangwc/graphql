/**
 * Created by Liang on 2018/8/22.
 */

const tool = require('../../../util/tool')
const BookModel = require('../../model/mis/book')

exports.addBook = {
    filters: [],
    method: async function({input}) {
        const { name, publish } = input
        const uid = tool.uuid()
        return await BookModel.addBook(uid,name,publish)
    }
}

exports.queryBooks = {
    filters: [],
    method: async function({name}) {
        return await BookModel.queryBooks(name)
    }
}

exports.delBook = {
    filters: [],
    method: async function({id}) {
        // console.log("id",id);
        return await BookModel.delBook(id)
    }
}