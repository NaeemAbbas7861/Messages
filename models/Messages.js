const MessagesModel=(_Messages)=>{

    var data={};
var Messages=[];
data.receiver_username= _Messages[0].receiver_username;
data.sender_username= _Messages[0].sender_username;
for(var i=0;i<_Messages.length;i++){
Messages.push({message:_Messages[i].Message.message})
}
data.Messages=Messages;

return data;
}

module.exports=MessagesModel;