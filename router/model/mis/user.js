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
	let values = [], whereSql = ``;
	if(id) {
		whereSql+=`where`
	}
	const querySql = `select * from t_base_user`;
	const result = await mdb.exeSql(querySql,[]);
	console.log("result",result.results)
	return result.results
}