const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("connection successful !!");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

User.findByIdAndUpdate("67ee9fcd9d5ac6ed7f3b5ccc",{age:40},{new:true})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

// User.find({})
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> {
//         console.log(err);
//     });

// const user1 = new User({name:"mahesh",email:"sunkaramahesh555@gmail.com",age:20});

// user1.save();