const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { student } = require("./models/student")
const { studentmodel } = require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://feb:febin4475@cluster0.pydodfi.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

// app.get("/",(req,res)=>{
//     res.send("HELLO")
// }
// )


// app.get("/contact",(req,res)=>{
//     res.send("Welcome to my contact page")
// })




app.post("/", (req, res) => {
    let input = req.body
    let student = new studentmodel(input)
    student.save()
    // console.log(student)
    res.json({ "status": "Success" })
})
app.post("/search", (req, res) => {
    res.send("Test")
})
app.post("/delete", (req, res) => {
    res.send("Test")
})
app.get("/ViewAll", (req, res) => {
    studentmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)
    })
    // res.send("Test")
})





app.listen(8080, () => {
    console.log("Server Started")
})
