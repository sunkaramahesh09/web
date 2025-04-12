const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connected to db");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
  await mongoose.connect(MONGO_URL);
};

// setting up views path

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// root page
app.get("/",(req,res)=>{
    res.send("hi, hi root");
});

//listings
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

// new route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//show route

app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

// create route

app.post("/listings",async (req,res)=>{
   // let {title,description,image,price,location,country} = req.body;
    // let listing = req.body.listing;
    // console.log(listing);
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});


// edit route

app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

// update route

app.put("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete Route

app.delete("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// test listing page
// app.get("/testlisting", async (req,res)=>{
//     let sampleTesting = new Listing({
//         title : "my villa",
//         description : "by the beach",
//         price : 1200,
//         location : "hyderabad",
//         country : "India",
//     });

//     await sampleTesting.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080,()=>{
    console.log("server listening to the port 8080");
});