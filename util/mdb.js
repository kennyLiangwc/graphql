/**
 * Created by Liang on 2018/8/22.
 */
const mysql = require('mysql')
const mysqlConfig = {
    "connectionLimit ": 5,
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "root",
    "database": "kenny_dev"
}

const pool = mysql.createPool(mysqlConfig); //创建数据池

const proxy = {
    /**
     * 立即执行，没有事务
     * @param sql
     * @param values
     * @return {Promise}
     */
    exeSql(sql, values =[]) {
        return new Promise((resolve, reject) => {
            const tb = +new Date();
            pool.getConnection((err, connection) => {
                if(err) {
                    console.error(err)
                    connection.release()
                    reject(`数据库异常`)
                }else {
                    connection.query({
                        sql,
                        values
                    },(err, results, fields) => {
                        connection.release()
                        if(err) {
                            console.error(err,results,sql)
                            reject('数据库异常')
                        }else {
                            const te = +new Date()
                            console.info(`sql耗时${te-tb},${sql},${values}`)
                            resolve({
                                results, fields
                            })
                        }
                    })
                }
            })
        })
    }
}

module.exports = proxy

