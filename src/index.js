//import Area
const express=require('express')
const app=express();
const db=require('./config/db')
const jwt=require('jsonwebtoken');
const token=jwt.sign({_id:123456},'oklabs',{ expiresIn:60*60});
const bcrypt=require('bcrypt');
const userSchema=require('./Model/userSchema');



//Middleware
app.use(express.json())


app.post('/',(req,res)=>{
    console.log(req.body)
    const data=new userSchema(req.body)
    res.send(data)
    console.log('data is the of the ',data)

})


app.listen(process.env.PORT || 5001,()=>{
    console.log('the db is connection succesful the port is hte '+process.env.PORT)

})