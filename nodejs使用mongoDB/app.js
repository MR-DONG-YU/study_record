const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb://localhost:27017';

// Database Name

const dbName = 'username';

// Connect using MongoClient
const Client = new MongoClient(url);

Client.connect(function(err) {

    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");

    let odb = Client.db(dbName);


    Client.close();
});