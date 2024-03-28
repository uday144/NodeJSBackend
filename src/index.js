const express = require("express");
const app = express();

const userRouter = require("./routes/userRoutes"); 
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use("/note", noteRouter);
app.use("/users", userRouter);

app.get("/", (req, res) =>{
    res.send("Hello");
});

mongoose.connect("mongodb+srv://uday144:uday144Admin@notesapicluster.63flqzi.mongodb.net/?retryWrites=true&w=majority&appName=NotesAPICluster")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("Server started on port no. " + 5000);
    });
}).catch((error)=>{
    console.log(error)
})


