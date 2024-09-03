import express from "express"
import { signupSchema, signinSchema, updateSchema } from "../Zod.js"
import jwt from "jsonwebtoken";
import { Account, User } from "../db.js"

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {

    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);//zod validation
    console.log(success);
    if (!success) {
        return res.json({
            message: "Email is already taken/incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: body.username
    })

    if (user._id) {
        res.json({
            message: "Email already taken"
        })
    }

    const newUser = await User.create(body);

    //({payload,secret_key})
    const token = jwt.sign({
        userId: newUser._id
    }, process.env.JWT_SECRET)

    await Account.create({
        balance: Math.floor(Math.random() * 10000 + 1)

    })
    res.json({
        message: "User created succesfully",
        token: token
    })
})

userRouter.post("/signin", (req, res) => {
    const body = req.body;

    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        res.json({

            message: "Email/password in incorrect format"
        })
    }
    const user = User.findOne({
        email: body.email
    })
    if (!user) {
        res.json({
            message: "Email not found"
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET)

    res.json({
        message: "User found successfully",
        token: token
    })

})

userRouter.put("/update", async (req, res) => {

    const { success } = updateSchema.safeParse(req.body)
    if (!success) {
        req.json({
            message: "Error while uopdating Information"
        })
    }
    console.log(req.header)
    const result = await User.updateOne({ _id: req.userId }, req.body);
    console.log(result);

    res.json({
        message: "Updated Successfully"
    })
})
//for searching user 
userRouter.get("/bulk", async (req, res) => {
    const pattern = req.query.filter || "";
    console.log(pattern);
    // % equivalent to .*
    const users = await User.find({
        $or: [
            {
                firstName:
                {
                    "$regex": pattern
                }
            },
            {
                lastName:
                {
                    "$regex": pattern
                }
            }
        ]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstName,
            lastname: user.lastName,
            _id: user._id,
        }))
    })

})

//signup
//signint
//update
//bulk finds user in db also gives user names with partial details such as %priy%



export default userRouter;

//STEP 2 SEARCH 2. Route to get users from the backend, filterable via firstName/lastName