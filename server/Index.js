
// const mongoose = require("mongoose")
const express = require("express")
const app =  express()
const cors = require("cors")
// const DB = "mongodb+srv://Aniket:hZNM24aL4703fJd4@cluster0.b1svy.mongodb.net/Resume?retryWrites=true&w=majority";
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     // useCreateIndex:true,
//     useUnifiedTopology:true,
//     // useFindAndModify:false
// })
// // .then(()=>{
// //     console.log(`connection are succesful`)
// // })
// // .catch(()=>{
// //     console.log(`connection are failed`)
// // })
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });


app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome to goa singham")
})

app.listen(4000,()=>(
    console.log("server started on 4000")
))
