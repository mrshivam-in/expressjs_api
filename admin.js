const express=require('express');
const router=express.Router();
const users=[];
// admin/add-product=>GET
router.get('/add-user',(req,res)=>
{
    // res.sendFile(path.join(__dirname,'../','views','add-user.html'));
    // res.sendFile(path.join(rootDir,'views','add-user.html'));
    res.render('add-user',
    {pageTitle:'Add User',
    path:'/admin/add-user',
    activeAddProduct:true,

})
})
// admin/add-user=>POST
router.post('/add-user',(req,res)=>
{
    // console.log(req.body.title);
    products.push({'name':req.body.user})
    res.redirect('/');   
})

exports.routes=router;
exports.users=users;