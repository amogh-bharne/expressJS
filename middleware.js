var express= require('express');
var app=express();

// app.use(function(req,res,next){
//     console.log("middleware");
//     next();
// });

// app.get('/',function(req,res){
//     res.send("hello");
// });

// app.listen(1010);

app.use(function(req,res,next){
    console.log("%s %s",req.method,req.url)
    next();

});

app.get('/',function(req,res){
    res.send("hello");
});

app.get("/about",function(req,res){
    res.send("about");

});

app.get("/contact",function(req,res){
    res.send("contact");
});

    app.listen(1010);