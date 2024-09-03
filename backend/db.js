
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    "mongodb+srv://" + process.env.mongoDB_ID + ":" + process.env.mongoDB_PASSWORD + "@cluster0.z6szs38.mongodb.net/"
)
    .then((x) => {
        console.log("Connected to Mongo!!");
    })
    .catch((err) => {
        console.log("Connection Failed!!" + err);
    });


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: false,

    },
    password: {
        type: String,
        required: true,
        private: true
    }
})

/*

ref: 'User': This creates a reference to the User model. It tells Mongoose that the userId field will store ObjectIds that refer to documents in the User collection.

*/
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,//reference to the User
        ref: 'User',
        requires: true
    },
    balance: {
        type: Number,
        required: true
    }
})

export const Account = mongoose.model('Account', accountSchema);
export const User = mongoose.model("User", userSchema);

