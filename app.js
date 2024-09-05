const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect ("mongodb://localhost:27017/careers",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB Connected...")
})
.catch(()=>{
    console.log("MongoDB Connection Failed")
})
const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection
app.get("/login", cors(),(req, res)=>{

})
app.post("/login", async(req,res)=>{
    const{ email, password} =req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist");
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        res.json('Failed...',e)
    }
})
//registration code
app.post("/register", async(req,res)=>{
    const{name, email, password} =req.body

    const data ={
        name : name,
        email : email,
        password : password
    }

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("already exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json('not exist')
    }
})
const server= app.listen(5000, ()=>{
    console.log('Server connected on Port 5000')
})