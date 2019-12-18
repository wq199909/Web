/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-17 15:43:42
 * @LastEditors  : WangQing
 * @LastEditTime : 2019-12-18 19:19:08
 */
let express = require("express");
let conf = require("./conf");
let multer = require("multer");
let loader = require("./loader");
let cookie = require("cookie-parser");
let app = express();

let uploadSingle = multer({dest: "./file/"});
app.use(express.static(conf.page_path));
app.use(cookie());
app.get("/api/*", function(request, response, next){
    console.log(request.cookie)
    if(request.cookies&&request.cookies.id){
        next();
    }else{
        response.redirect("/login.html");
    }
})

// app.get("/api/getAllStudent", loader.get("/api/getAllStudent"));

// app.get("/api/addStudent", loader.get("/api/addStudent"));

app.post("/login", loader.get("/login"));

app.post("/upload", uploadSingle.single("file"), loader.get("/upload"));

app.get("/getPic", loader.get("/getPic"));
app.listen(conf.port);