const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'username';
// Connect using MongoClient
const Client = new MongoClient(url, { useUnifiedTopology: true });
Client.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
    let db = Client.db(dbName);
    /*  //1、查找数据
     //db.collection("user").find({ "age": { $gte: 980 } }) 查找
     //db.collection("user").find({ "age": { $gte: 980 } }).toArray() 把内容转化为数组
     // Array() 里传入回调函数，将数组里的数据输出
     db.collection("user").find({ "age": { $gte: 998 } }).toArray((err, data) => {
         if (err) {
             console.log(err);
             return;
         }
         console.log(data);
         //由于异步问题只能在此处进行关闭
         Client.close();
     }); */

    /*  //2、增加数据
     function insert(callback) {
         db.collection("user").insertOne({ "log": `执行insertMany操作${i}次` }, (err, data) => {
             if (err) {
                 console.log(err);
                 return;
             }
             callback();
         });
     }
     for (var i = 0; i < 10; i++) {
         insert(() => {
             if (i == 9) {
                 console.log("数据库已经关闭");
                 Client.close();
             }
         });
         console.log(`增加第${i}次成功`);
     } */
    //3、修改数据
    db.collection("user").updateMany({ "log": /执行/ }, { $set: { "if_be_change?": "yes" } }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("修改成功");

    });
    //4、删除数据
    db.collection("user").deleteMany({ "log": /执行/ }, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(删除成功);
    });
});