// app.js
const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
const users=require('./controllers/usersController');
const logs=require('./controllers/logsController');
const chat=require('./controllers/chatController');
const app = new Koa();
const koaCors = require('koa-cors')
app.use(koaCors());

app.use(bodyParser({
    // formidable:{uploadDir: './uploads'},
    // multipart: true,
    // urlencoded: true
    extendTypes: {
      json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    }
 }));

app
  .use(users.routes())
  .use(users.allowedMethods())
  app
  .use(logs.routes())
  .use(logs.allowedMethods())
  app
  .use(chat.routes())
  .use(chat.allowedMethods())

app.listen(5000);