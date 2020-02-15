const express = require('express');
const app = express()
var port = process.env.PORT || 3000;
app.get('/', (req,res) => {res.send("Environment variables: "+process.env)})
app.listen(port,() => {console.log("App is running on port "+port)})