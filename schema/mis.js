/**
 * Created by Liang on 2018/8/22.
 */
const { buildSchema } = require('graphql')
module.exports = buildSchema(`
    type Ret{
        ret:Int,
        msg:String
    }
    input UserInput{
        name:String,
        sex:Int,
        country:String
    }
    type QueryUserResult{
        name:String,
        country:String,
        birthday:String,
        sex:Int
    }
    type Mutation{
        addUser(input:UserInput):Ret
    }
    type Query{
        queryUser(id:ID,input:UserInput):QueryUserResult
    }
`)