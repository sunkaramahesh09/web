const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username : "mahesh",
        content : "i love u"
    },
    {
        id : uuidv4(),
        username : "divya",
        content : "i hate u"
    },
    {
        id : uuidv4(),
        username : "sravani",
        content : "i love u"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username, content }= req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    res.send("patch request working");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
    res.redirect("/posts");
    console.log(post);
    
});

app.listen(port,()=>{
    console.log("listening to the port 8080");
});
