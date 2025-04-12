const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },
    image : {
        type: String,
        default : "https://images.unsplash.com/photo-1738996674608-3d2d9d8450a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nir-himi-LzAzsrV_-mc-unsplash.jpg",
        set : (v) => v === ""?"https://images.unsplash.com/photo-1738996674608-3d2d9d8450a0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nir-himi-LzAzsrV_-mc-unsplash.jpg":v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;
