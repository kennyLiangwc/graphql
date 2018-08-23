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
    input BookInput{
        name:String,
        publish:String
    }
    type QueryUserResult{
        name:String,
        country:String,
        birthday:String,
        sex:Int
    }
    type QueryBooksResult{
        name:String,
        publish:String,
        state:Int,
        createAt:String
    }
    type Mutation{
        addUser(input:UserInput):Ret
        delUser(id:ID):Ret
        addBook(input:BookInput):Ret
        delBook(id:ID):Ret
    }
    type Query{
        queryUser(id:ID,input:UserInput):[QueryUserResult]
        queryBooks(name:String):[QueryBooksResult]
    }
`)