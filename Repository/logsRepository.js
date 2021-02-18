const firebase = require('./../Config/firebase');

 const insertLogs=function(ctx,callback){
    let req=ctx.request.body;

     firebase.database().ref('Logs/'+Date.now()).set({
        createdon  : new Date(),
        description  :req.description,
        username   :req.username
     });
     callback(null,ctx.body=JSON.stringify({"statusCode":200,"messge":"Record inserted successfully"}))
   }

   const getlogsById=function(ctx,callback) {
    var ref = firebase.database().ref("Logs").on("value", function(snapshot) {
        var data=[];
        let params=ctx.request.params;
        snapshot.forEach(function(childSnapshot) {
            console.log(params,childSnapshot.val())
            if(childSnapshot.val().username==params.id)
            data.push(childSnapshot.val());
          });
        ctx.body=JSON.stringify({"statusCode":200,"messge":"Record Retrieved successfully","Data":data});
    });
 } 

   module.exports={insertLogs,getlogsById};