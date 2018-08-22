/**
 * Created by Liang on 2018/8/22.
 */
const mdb = require('../../../util/mdb')

exports.addUser = async function(id,name,sex,country) {
    const addSql = `insert into t_base_user (id,name,sex,country,birthday,createAt,updateAt) values(?,?,?,?,now(),now(),now())`;
    await mdb.exeSql(addSql,[id,name,country])
    return {
        ret: 0,
        msg: 'OK'
    }
}