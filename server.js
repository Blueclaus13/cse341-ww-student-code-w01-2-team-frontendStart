//Initialize App
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;
 
//Add middleware before routes
app.use(bodyParser.json());

router.get('/professional', (req, res) =>{
  res.send('Hello World, This is profile router');
    });
    

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/', router);
 
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + (PORT));
});