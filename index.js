const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const actionRoute = requrie('./actions');
app.use('/api',actionRoute);

const port=5000;
app.listen(port, function(){
console.log(`server is working via port ${port}`);
});