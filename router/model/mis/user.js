/**
 * Created by Liang on 2018/8/22.
 */
const mdb = require('../../../util/mdb')

exports.addUser = async function(id,name,sex,country) {
    const addSql = `insert into t_base_user (id,name,sex,country,birthday,createAt,updateAt) values(?,?,?,?,now(),now(),now())`;
    await mdb.exeSql(addSql,[id,name,sex,country])
    return {
        ret: 0,
        msg: 'OK'
    }
}

exports.queryUser = async function(id,name,sex,country) {
	let values = [], whereSql = `where state!=-1`;
	if(id) {
		whereSql+=` and id=?`;
		values.push(id)
	}
	if(name) {
		whereSql+=` and name=?`
		values.push(name)
	}
	if(sex) {
		whereSql+=` and sex=?`
		values.push(sex)
	}
	if(country) {
		whereSql+=` and country=?`
		values.push(country)
	}
	const querySql = `select * from t_base_user ${whereSql}`;
	const result = await mdb.exeSql(querySql,values);
	return result.results
}

exports.delUser = async function(id) {
	const delSql = `update t_base_user set state=-1 where id=?`
	await mdb.exeSql(delSql,[id])
    return {
        ret: 0,
        msg: 'OK'
    }
}