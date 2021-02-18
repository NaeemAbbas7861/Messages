const firebase = require('./../Config/firebase');
const MessagesModel=require('./../models/Messages');
 const insertChat=function(ctx,callback){
    let req=ctx.request.body;
    var GUID=Date.now();
     firebase.database().ref('Chat/'+GUID).set({
         id:GUID,
        sender_username:req.sender_username,
        receiver_username:req.receiver_username,
        
     });
     
     firebase.database().ref('Chat/'+GUID+'/Message/').set({
        ChatId:GUID,
        message:req.message,
        createdon:new Date()
     });
     callback(null,ctx.body=JSON.stringify({"statusCode":200,"messge":"Record inserted successfully"}))
   }

   const getChatById=function(ctx,callback) {
    var ref = firebase.database().ref("Chat").on("value", function(snapshot) {
        var data=[];
        let params=ctx.request.params;
        snapshot.forEach(function(childSnapshot) {
            console.log(params,childSnapshot.val())
            if(childSnapshot.val().sender_username==params.sender_username && childSnapshot.val().receiver_username==params.receiver_username)

            data.push(childSnapshot.val());
          });
          var response=MessagesModel(data);
        ctx.body=JSON.stringify({"statusCode":200,"messge":"Record Retrieved successfully","Data":response});
    });
 } 

   module.exports={insertChat,getChatById};