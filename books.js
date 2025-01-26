const mongoose = require('mongoose');

main()
    .then( () => {
        console.log("connection success");
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/store');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        default: 10,
    },
    genre: {
        enum: ["friction", "non-friction", "acton"],
    }
})