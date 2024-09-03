
import { Account } from "../db.js"
import mongoose from "mongoose";
import express from "express"
import { authMiddleware } from "../middleware.js"


const transferFunds = async (accountId1, accountId2, amount) => {
    await Account.updateOne(accountId1, { $inc: { balance: -amount } });

    await Account.updateOne(accountId2, { $inc: { balance: amount } })

}

const accountRouter = express.Router();

//api/v1/account/
accountRouter.get("/balance", authMiddleware, async (req, res) => {
    console.log(req);
    const account = await Account.findOne(
        {
            userId: req.userId
        });

    return res.status(200).json({ balance: account.balance });
})

accountRouter.post("/transfer", authMiddleware, async (req, res) => {

    const session = await mongoose.startSession();

    session.startTransaction();

    const { to, amount } = req.body;
    const fromAccount = await Account.findOne(
        {
            userId: req.userId
        }).session(session);

    if (fromAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        })
    }

    console.log(toAccount.userId === to)

    await Account.updateOne({ userId: fromAccount.userId }, { $inc: { balance: -amount } }).session(session);

    await Account.updateOne({ userId: toAccount.userId }, { $inc: { balance: amount } }).session(session);

    //Commit
    await session.commitTransaction();

    return res.status(200).json({
        message: "Transfer Successful"
    })

})

export default accountRouter; 