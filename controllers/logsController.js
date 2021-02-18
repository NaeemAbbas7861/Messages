var Router = require('koa-router');
var router = new Router();

const logsRepository=require('./../Repository/logsRepository')

router.post('/api/SaveCallLogs',function(ctx,next){

    logsRepository.insertLogs(ctx,function(err,data){
    
    } )
}) 
router.get('/api/RetriveCallLogs/:id',function(ctx,next){

    logsRepository.getlogsById(ctx,function(err,data){
    
    } )
})

module.exports=router;