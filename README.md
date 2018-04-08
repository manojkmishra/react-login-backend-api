S C:\REACTJS\bookworm\bookworm-api> node> var bcrypt = require('bcrypt')
undefined
> bcrypt.hashSync('12345',10)
'$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq'
>


PS C:\REACTJS\bookworm\bookworm-api> mongo
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
Server has startup warnings:
2018-04-07T18:54:24.004-0800 I CONTROL  [initandlisten]
2018-04-07T18:54:24.004-0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2018-04-07T18:54:24.005-0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2018-04-07T18:54:24.005-0800 I CONTROL  [initandlisten]
> use bookwormswitched to db bookworm> db.user.insert({email: "aa@bb.com", passwordHash: "$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq" })WriteResult({ "nInserted" : 1 })>


> db.user.find({})
{ "_id" : ObjectId("5ac998baeb24d2c3919ab8cd"), "email" : "aa@bb.com", "passwordHash" : "$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq" }
