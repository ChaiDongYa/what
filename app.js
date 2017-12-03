var express=require("express");
var server=express();
server.listen(12345)
server.use(express.static("./"))