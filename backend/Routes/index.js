import express from "express"
import userRouter from "./User.js"
import accountRouter from "./Account.js"

const mainRouter = express.Router();

console.log("reached userRouter");

mainRouter.use("/user", userRouter)
mainRouter.use("/account", accountRouter)

export default mainRouter;