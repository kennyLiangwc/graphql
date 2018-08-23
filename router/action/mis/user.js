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
        return await UserModel.addUser(uid, name, sex, country)
    }
}

exports.queryUser = {
	filters: [],
	method: async function({input}) {
	    const { name } = input
		return await UserModel.queryUser(null,name,null,null)
	}
}

exports.delUser = {
    filters: [],
    method: async function({id}) {
        return await UserModel.delUser(id)
    }
}