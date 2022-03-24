const express = require('express');
const appe = express();
const path = require('path');
const router = express.Router();
appe.use(express.static(__dirname + '/public'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/logIn/index.html'));
});

router.get('/signUp',function(req,res){
  res.sendFile(path.join(__dirname+'/signUp/index.html'));
});

router.get('/profile',function(req,res){
  res.sendFile(path.join(__dirname+'/profile/index.html'));
});

router.get('/profile',function(req,res){
  res.sendFile(path.join(__dirname+'/profile/index.html'));
});




//add the router
appe.use('/', router);
appe.listen(process.env.port || 3000);

console.log('Running at Port 3000');


