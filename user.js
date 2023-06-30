const express=require('express');
const path=require("path");
const router=express.Router();
const adminData=require("./admin");

router.get('/',(req,res,next)=>
{
    console.log('Hello World!! Server is listening to port 3000')
next();
})
router.get('/',(req,res,next)=>
{
    // console.log("shop.js",adminData.users)
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    res.render('users',
    {data:adminData.users,
    pageTitle:'User',
    path:'/',
    isData:adminData.users.length>0,
    cssShop:true,
    activeShop:true
});
})

module.exports=router;