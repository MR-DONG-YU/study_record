const http = require("http");
const fs = require("fs");
const path = require('path');
http.createServer(function(req, res) {


    function showpage(pagename, sendpage) {
        fs.readFile(path.join(__dirname, "static", pagename + '.html'), function(err, date) {
            if (err) {
                throw err
            } else {
                res.setHeader('Content-Type', "text/html");
                sendpage(pagename);
            }
        });

        /* -------------------css文件夹------------------------------*/
    }

    function showcss(cssname) {
        if (req.url === "/css" + cssname) {
            fs.readFile(path.join(__dirname, "static", "css", cssname + ".css"), function(err, date) {
                if (err) {
                    throw err
                }
                res.setHeader('Content-Type', "text/css");

                res.end(date);
                console.log(path.join(__dirname, "static", "css", cssname + ".css") + "等待展示");
            });
        }


    }

    if (req.url === "index") {
        showpage("index", function(pagename) {
            res.end(date);
            console.log(path.join(__dirname, "static", pagename + '.html') + "等待展示");
        });
        console.log("hahah");

    } else if (req.url === "login") {
        showpage("login");
    } else if (req.url === "test") {
        showpage("test");

    } else if (req.url.startsWith('/css')) {
        showcss("centerRight");
        showcss("comQ");
        showcss("dmb.bottom");
        showcss("dmb.header");
        showcss("Ngrade_login");
        showcss("public");
        showcss("reset");
        showcss("reset");
        showcss("reset");
        showcss("reset");


        /* -------------------img文件夹------------------------------*/
    } else if (req.url.startsWith('/img')) {
        var pathname = url.parse(req.url).pathname;
        if (pathname.substr(pathname.length - 4) === '.png') {
            /* ---------------------------处理img 文件夹中的的png文件 */
            fs.readFile(path.join(__dirname, "static", req.url), function(err, date) {
                if (err) {
                    throw err
                }

                res.setHeader('Content-Type', mime.getType(req.url));
                res.end(date);
            });
        }
        if (pathname.substr(pathname.length - 4) === '.svg') {

            fs.readFile(path.join(__dirname, "static", req.url), function(err, date) {
                if (err) {
                    throw err
                }

                res.setHeader('Content-Type', mime.getType(req.url));
                res.end(date);
            });
        }
    }

}).listen(10000);