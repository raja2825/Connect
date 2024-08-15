const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')
const app=express()
// app.use(cors({
//     // origin:["https://deploy-mern-1whq.vercel.app"],
//     // methods:["POST","GET"],
//     // credentials:true
// }))
app.use(cors())

app.use(express.json())
mongoose.connect("mongodb+srv://rajasankar2004s:!EUqFH@h$Jqm7j$@cluster0.3apgo.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0");

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Sucess")
            }
        
        else{
            res.json("incorrect password")
        }
    }
    else{
        res.json("no record existed")
    }
    })
})
app.post('/register',(req,res)=>{
EmployeeModel.create(req.body)
.then(employees=>res.json(employees))
.catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running");
    
}) 
