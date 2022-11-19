var express=require("express");
var app=express();
var fileup=require("express-fileupload");

app.use(fileup());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/fileup.html");
});

app.post("/",function(req,res){
    if(req.files)
        console.log(req.files);

    var file=req.files.filename;
    
    file.mv("./file1/"+file.name,function(err){
        if(err)
            res.send(err)
        else
            res.send("File uploaded");

    })
})

app.listen(1000);