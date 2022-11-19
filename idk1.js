var express = require('express')
var app=express();

app.get('/',function(req,res){
    res.send("hello");
});

app.get("/:id/:msg",function(req,res){
    res.send(req.params.id+" "+req.params.msg);})
app.listen(3000,function(){
    console.log("server started");
})
