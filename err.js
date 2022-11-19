var express= require('express');
var app=express();

app.get("/:id",function(req,res,next){
    if(req.params.id==100){
        res.send("hello");
    }
    else{
        var err=new Error("not found");
        next(err);
    }
});

// app.use(function(err,req,res,next){
//     res.status(500)//.send("error");
//     res.send("<H1>BIG</H1>error");
// });

app.listen(1000);
