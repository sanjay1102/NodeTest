//var http = require('http');

//http.createServer(function(req,res){
  //  res.end('Hello http module')
//}).listen('3050');

// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'TestingAPM',
    
    // Use if APM Server requires a secret token
    secretToken: 'testtoken',
    
    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://192.168.4.250:9200',
    
    // Set the service environment
    //environment: 'production'
    })

var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('I am Listening to this route');
})

app.get('/home',function(req,res){
    res.send('I am Home');
    
})

app.get('/users',function(req,res){
    
    var query = req.query;
    var userName = query.Name;

    res.send('the user is : '+ userName);
})

app.listen('3050',function(req,res){
    console.log('express server started');
})