# graphql
  GraphQL 是一款由 Facebook 主导开发的数据查询和操作语言.这里查询语言所指的并不是常规意义上的类似 sql 语句的查询语言，而是一种用于前后端数据查询方式的规范。
  
### graphql 能解决什么问题？
##### 当前开发遇到的问题：
1. 传统开发就是后台写好接口，前端直接调用，那为了方便后台可能会返回很多对前端毫无作用的字段，会造成数据冗余；
2. 前端一个页面可能要调接个接口获取数据才能渲染完成页面，发送一个http请求比较消耗资源的，特别在弱网络情况下，这种体验更不好；
3. 对于 Android 或 iOS 客户端，发版升级了一个很爆炸的功能，同一个API上可能为了支持这个功能而多吐一些数据，要做部分屏蔽，造成风险；
4. 当需求或者数据改变时，它们都要新增一个接口适应变化，久而久之会造成代码越来也长。
<center> 渲染一个页面需要多个请求</center >  

![image](http://pdwlanqdy.bkt.clouddn.com/view.png)
<center> 返回部分毫无意义的字段</center >

![image](http://pdwlanqdy.bkt.clouddn.com/traditional.png)
-----------------
#### graphql 就是为解决以上问题而来的，向服务端发送一次描述信息，告知客户端所需的所有数据，数据的控制甚至可以精细到字段，达到一次请求获取所有所需数据的目的。
#### 简单总结，前端根据需要自行组合一个接口，后台返回的数据也是不多不少！！！  

graphql还提供一个界面调试接口，大大提高了开发效率，如下图，左边为前端发送请求，右边为服务器返回的数据。

<center> 举个例子，查询书籍时，前端根据需要可以任意组合从服务器里取state,publish,name等字段（你要啥就取啥）</center >  

![image](http://pdwlanqdy.bkt.clouddn.com/query.gif)
<center> 一个页面需要查询用户为test1并返回他的country,书籍列表返回state等字段，组合接口，一个请求就ok，有木有很爽的感觉！！！</center >  

![image](http://pdwlanqdy.bkt.clouddn.com/query_com.png)
<center> 同时添加一本书本信息和删除一个用户，组合接口，一个请求就OK了~~~~~~~~~ </center >  

![image](http://pdwlanqdy.bkt.clouddn.com/mutation_com.png)
#### 总之，前端需要什么接口自行组合就好了！！！
---------------------

### 教程
#### GraphQL 请求体,一般长这样的
```
query {
  queryUser($name:String){
    country
    name
    sex
  }
}
```
上面这个请求体定义了你向服务器取什么(name,sex),最后返回一个json字段的数据。
1. query 定义了操作类型,query 表示查询，mutation 表示对数据进行操作，例如增删改操作，subscription 订阅操作。
2. queryUser操作名称,操作名称是个可选的参数，操作名称对整个请求并不产生影响，只是赋予请求体一个名字，可以作为调试的依据
3. name 定义变量（传参）,声明一个变量使用$符号开头，冒号后面紧跟着变量的传入类型。
请求结果
```
"data": {
    "queryUser": [
      {
        "country": "中国",
        "name": "test1",
        sex: 0
      }
    ]
}
```
#### Schema Schema 本身并不代表你数据库中真实的数据结构，它的定义决定了这整个端点能干些什么事情，确定了我们能向端点要什么，操作什么。
```
type QueryBooksResult{
      name:String,  #定义String
      publish:String,
      state:Int,
      createAt:String
  }
  type Mutation{
      addUser(input:UserInput):Ret #定义返回结果
      delUser(id:ID):Ret
      addBook(input:BookInput):Ret
      delBook(id:ID):Ret
  }
```

##### 对于前端，一般借助 graphql-request 库,用 GraphQLClient API ,也有结合react,vue专属的库，这里不重点介绍了
```
import { GraphQLClient } from "graphql-request"
const client = new GraphQLClient('/api/mis');
client.request(api,param).then()
```
##### 后台，graphql提供了多种语言，有c++,java,node...本文介绍node
node不同框架用不同的库，有koa，express的。本项目用express。
```
const graphqlHttp = require('express-graphql')
Router.use('/mis',middle,graphqlHttp({
    schema: xx,
    rootValue: xx,
    graphiql: true
}))
```
1. schema 前面提到的schema
2. rootValue 传值
3. graphiql 为true可以在调试窗口调试
4. 其他api请自行到网上查看.
