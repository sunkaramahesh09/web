const express = require("express");

const app = express();

const port = 3000;

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`get response ${user}!`);
})

app.post("/register",(req,res)=>{
    res.send("post response");
})

app.listen(port,()=>{
    console.log("listening to the port");
});