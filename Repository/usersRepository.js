const firebase = require('./../Config/firebase');
var jwtToken=require('../helper/jwtToken');
var UsersModel=require('./../models/Users')
 const insertUser=function(ctx,callback){
    let req=ctx.request.body;
console.log(req)
     firebase.database().ref('users/'+Date.now()).set({
       firstname:req.firstname,
       lastname:req.lastname,
        username  : Date.now(),
        password  :req.password,
        emailid   :req.email,
        channelid :Date.now(),
        IsActive:1,
        UpdatedOn:new Date()
     });
     callback(null,ctx.body=JSON.stringify({"statusCode":200,"messge":"Record inserted successfully"}))
   }

 const getUsers=function(ctx,callback) {
    var ref = firebase.database().ref("users").on("value", function(snapshot) {
        var data=[];
        snapshot.forEach(function(childSnapshot) {
            
            data.push(childSnapshot.val());
          });
          var response=UsersModel(data);
        ctx.body=JSON.stringify({"statusCode":200,"messge":"Record Retrieved successfully","Data":response});
    });
   
 }  

 const getUsersById=function(ctx,callback) {
    var ref = firebase.database().ref("users").on("value", function(snapshot) {
        var data=[];
        let params=ctx.request.params;
        snapshot.forEach(function(childSnapshot) {
            console.log(params,childSnapshot.val())
            if(childSnapshot.val().username==params.id)
            data.push(childSnapshot.val());
          });
          var response=UsersModel(data);
        ctx.body=JSON.stringify({"statusCode":200,"messge":"Record Retrieved successfully","Data":response});
    });
 }  
 const userLogin=function(ctx,callback) {
    var ref = firebase.database().ref("users").on("value", function(snapshot) {
        var data="";
        let body=ctx.request.body;
       
        snapshot.forEach(function(childSnapshot) {
          console.log(childSnapshot.val())
            if(childSnapshot.val().emailid==body.email.trim() && childSnapshot.val().password==body.password.trim())
            data = childSnapshot.val();
            
          });
          delete data.password;

        if(data==""){
            ctx.body=JSON.stringify({"statusCode":400,"messge":"Invalid User"});
        } else {
            ctx.body=JSON.stringify({"statusCode":200,"messge":"User Login Successfully","Data":data});
        }
    });
 }  
   module.exports={insertUser,getUsers,getUsersById,userLogin};

