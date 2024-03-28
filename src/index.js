const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes"); 

app.use("/users", userRouter);

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(5000, ()=>{
    console.log("Server started on port no. " + 5000);
});