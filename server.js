const PORT = process.env.PORT || 8080;
//Initialize App
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//Add middleware before routes
app.use(bodyParser.json());
    

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/', require('./routes/index.js'));
 
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + (PORT));
});