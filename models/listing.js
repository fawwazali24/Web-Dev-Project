const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
        },
        url: {
            type:String,
        },
        //set: (v) => v === "" ? "https://images.unsplash.com/photo-1544473244-f6895e69ad8b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBob2xpZGF5fGVufDB8fDB8fHww" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing  = mongoose.model("Listing", listingSchema);
module.exports = Listing;