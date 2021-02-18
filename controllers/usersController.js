var Router = require('koa-router');
var router = new Router();

const ofiredata=require('./../Repository/usersRepository')

router.post('/api/crafts_createuser',function(ctx,next){

    ofiredata.insertUser(ctx,function(err,data){
    
    } )
})
router.get('/api/crafts_List',function(ctx,next){

    ofiredata.getUsers(ctx,function(err,data){
    
    } )
})
router.get('/api/crafts/:id',function(ctx,next){

    ofiredata.getUsersById(ctx,function(err,data){
    
    } )
})
router.post('/api/login',function(ctx,next){

    ofiredata.userLogin(ctx,function(err,data){
    
    } )
})

module.exports=router;