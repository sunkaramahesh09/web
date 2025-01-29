const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
});



app.get("/",(req,res)=>{
    res.send("you have entered root path");
});

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("no results");
});