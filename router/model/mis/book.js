/**
 * Created by Liang on 2018/8/23.
 */
const mdb = require('../../../util/mdb')

exports.addBook = async function(id,name,publish) {
    const addSql = `insert into t_kenny_book (id,name,publish,createAt,updateAt) values (?,?,?,now(),now())`;
    await mdb.exeSql(addSql, [id,name,publish]);
    return {
        ret: 0,
        msg: 'OK'
    }
}

exports.queryBooks = async function(name) {
    let values = [], whereSql = ``;
    if(name) {
        values.push(name);
        whereSql+=`and name=?`
    }
    const querySql = `select * from t_kenny_book where state=0 ${whereSql}`
    const result = await mdb.exeSql(querySql,values)
    return result.results
}

exports.delBook = async function(id) {
    const delSql = `update t_kenny_book set state=-1 where id=?`
    await mdb.exeSql(delSql,[id])
    return {
        ret: 0,
        msg: 'OK'
    }
}