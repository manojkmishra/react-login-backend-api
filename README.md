This is and ExpressJS  Backend server for react-login-app repo

You need to install mongodb and start mongodb server (mongodb://127.0.0.1:27017)
then insert table using below commands

>node
node> var bcrypt = require('bcrypt')
undefined
> bcrypt.hashSync('12345',10)
'$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq'
>

> mongo
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10

> use bookwormswitched to db bookworm> db.users.insert({email: "aa@bb.com", passwordHash: "$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq" })WriteResult({ "nInserted" : 1 })>


> db.users.find({})
{ "_id" : ObjectId("5ac998baeb24d2c3919ab8cd"), "email" : "aa@bb.com", "passwordHash" : "$2a$10$U.S06.6hpTxyfjmnhT9vU.Z2c/u79dZMRbP6U60EpyLXRtuZFpXNq" }
