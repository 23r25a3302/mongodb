const mongoose = require('mongoose');

main()
    .then( () => {
        console.log("connection success");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// delete
User.findOneAndDelete( {age: {$gt : 20}}, {new: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// update
// User.findOneAndUpdate( {name: "ramu"}, {age: 25}, {new: true})
//     .then((res) => console.log(res))
//     .catch(err => console.log(err)); 

// // find -> display all data within condition
// User.findOne({age: {$eq : 21}})
//     .then((res) => {
//         // console.log(res);
//         console.log(res);
//     })
//     .catch((err) => console.log(err));

// multiple inserts at once with promises
// User.insertMany([
//     {
//         name: "ravikanth",
//         email: "ravikanth@gmail.com",
//         age: 21,
//     },
//     {
//         name: "srikanth",
//         email: "srikanth@gmail.com",
//         age: 30,
//     }
// ]).then((res) => {
//     console.log(res);
// }).catch((err)=> {
//     console.log(err);
// });

// const user1 = new User({
//     name: "sree",
//     email: "sree@gmail.com",
//     age: 30,
// });

// user1.save()
//     .then( (res) => {
//         console.log(res)
//     })
//     .catch(err => console.log(err));