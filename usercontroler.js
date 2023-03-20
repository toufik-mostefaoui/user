const express = require('express');
const user = require('../models/user');
const router = express.Router();


const add = (req,res,next)=>{
const user = new user({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
    adress:req.body.adress,
    image:req.body.image,
 
});

console.log(req)
if (req.files){
    let path=''
    req.files.forEach((files,index,err)=>{
        path = path+files.path+ ','
    })
    path = path.substring(0,path.lastIndexOf(","));
    user.image=path;
}
user.save()
.then(() => {
  res.status(200).send('user added ');
})
.catch((error) => {
  console.error(error);
  res.status(500).send('error');
});


 
};

const update = (req,res,next)=>{
    const info=req.body;
    user.findByIdAndUpdate(req.body.id,{
        name:info.name,
        image:info.image,
        email:info.email,
        password:info.password,
        phone:info.phone,
        adress:info.adress,
        });
};

const delet = (req,res,next)=>{
    user.findByIdAndDelete(req.body.id);
};

const check = async (_,args) =>{
    const validname = await User.find({name:args.name});
    const validpass = await User.find({ password:args.password})
    const user = await User.find({name: args.name, password:args.password})
  if (validname.length == 0){
    console.log('username incorrect!!')
  }else if(validpass.length == 0){
    console.log('password incorret!!!')
  }else{
    console.log('welcome')
    return user
   } 
};


module.exports = {add,update,delet,check};