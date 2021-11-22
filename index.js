const express = require('express');
const path = require('path');
const router = require('./router/routers');

const app = express();
app.use(router);

app.use(express.static(path.join(__dirname,'public/')));
app.use(express.json({limit:'1000000000000000000000000000000000000000000000000000000000000000000000mb'}))
app.use(express.urlencoded({limit:'1000000000000000000000000000000000000000000000000000000000000000000000mb',extended:true}));

app.set('view engine', 'ejs');
app.set('views',__dirname,'/views');
app.listen(8080);




