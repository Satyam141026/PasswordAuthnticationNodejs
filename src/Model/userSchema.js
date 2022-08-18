const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('userDataSaveds',Schema)