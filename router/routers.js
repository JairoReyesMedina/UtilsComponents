const express = require('express'); 
const path = require('path');
const app = express();
const router = express.Router();

 
router.use("/",(req, res , next) => {
switch(req.url.toString().toLowerCase()){
case "/":

res.sendFile("index.html",{
    root:path.join(path.dirname(__dirname),"views")
});

break;
default:
return next();
}
})




module.exports = router;

