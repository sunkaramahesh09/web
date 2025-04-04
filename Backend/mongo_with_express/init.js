const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
    .then(()=>{
    console.log("connection successful");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from : "mahesh",
        to : "divya",
        msg : "how are you",
        created_At : new Date()
    },
    {
        from : "mahesh",
        to : "sravani",
        msg : "hi, sravs!!",
        created_At : new Date()
    },
    {
        from : "satya",
        to : "sirisha",
        msg : "how are you",
        created_At : new Date()
    },
    {
        from : "likith",
        to : "ml",
        msg : "i love u",
        created_At : new Date()
    },
];

Chat.insertMany(allChats);