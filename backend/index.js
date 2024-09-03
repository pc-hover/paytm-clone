import express from 'express';
import mainRouter from '../backend/Routes/index.js';
import cors from "cors"

const port = 3000
const app = express();

app.use(express.json());
app.use(cors())//cross origin resurce sharing

app.use("/api/v1", mainRouter);

app.listen(port, () => {
    console.log(`Server running at at ${port}`)
}
);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/chnagePassword
