//import Area
const express=require('express')
const app=express();
const db=require('./config/db')
const jwt=require('jsonwebtoken');
const token=jwt.sign({_id:123456},'oklabs',{ expiresIn:60*60});
const bcrypt=require('bcrypt');
//jwt.sign({p:v},key,{expiry time})  //token for 1h




app.post('/',(req,res)=>{
    //For hash first method 
/* bcrypt.hash('12345',10) //first method and this method is retuen promise object 
.then((d)=>{
console.log(d,'d')
})
.catch((e)=>{
    console.log(e,'error')
})
    */
   //this anoter mentod where used hash sync
 const add=  bcrypt.hashSync('12345',10)
 res.send(add)
})
bcrypt.compare('12345',`$2b$10$x.fFkXlK8BoytOZZN6ubwe8wBkwlCXfqRiZru9Zpf..H1fXbs/aq.`)
.then((d)=>{
    console.log(d,'d')
    })
    .catch((e)=>{
        console.log(e,'error')
    })


app.listen(process.env.PORT || 5001,()=>{
    console.log('the db is connection succesful the port is hte '+process.env.PORT)

})