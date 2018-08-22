/**
 * Created by Liang on 2018/8/22.
 */
const UserModel = require('../../model/mis/user')
const tool = require('../../../util/tool')

exports.addUser = {
    filters: [],
    method: async function({input},req) {
        console.log("input",input);
        const { name, sex, country } = input;
        const uid = tool.uuid()
        return UserModel.addUser(uid, name, sex, country)
    }
}