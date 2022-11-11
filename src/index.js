const { json } = require("express");
const express = require ("express");
const connect = require("./config/database");
const userRoute = require("./router/userRoute")
connect()
const app = express();
const port = process.env.port || 2020;
app.use("./user", userRoute);
app.use(json());

app.get('/',(req, res)=>{
    res.send('MongoDb Tasks for week 7');
});

app.listen(port, () => console.log(`Server is running on ${port}`));
