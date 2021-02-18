var Router = require('koa-router');
var router = new Router();

const messageRepository=require('./../Repository/messageRepository')

router.post('/api/SaveChat',function(ctx,next){

    messageRepository.insertChat(ctx,function(err,data){
    
    } )
}) 
router.get('/api/RetriveChat/:sender_username/:receiver_username',function(ctx,next){

    messageRepository.getChatById(ctx,function(err,data){
    
    } )
})

module.exports=router;