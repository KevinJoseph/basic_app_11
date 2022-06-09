
/* MANERA TRADICIONAL DE CREAR UN SERVIDOR CON NODE */
/* var http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
})
server.listen(3000, ()=>{
    console.log("Server on port 3000")
}) */

/* USANDO EXPRESS */
const express = require('express');
const morgan  = require('morgan');
const app = express();


/* Settings */
/* app.set('AppName','Carlos FreeLancer') */
app.set('port','3000')
app.set('view engine','ejs');

/* Middlewares */
app.use(express.json());
app.use(morgan('dev'));


/* 
function logger(req,res,next){
    console.log(`Route Received ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
} */

/* Routes */
app.get('/', (req,res) =>{
    const data = [{name: 'Jhon'},{name: 'cameron'},{name: 'albert'},{name: 'carlos'}];
    res.render('index.ejs',{people: data});
});

app.get('/user',(req,res)=>{
    res.json({
        username: "Homero",
        lastname: "Simpson"
    });
});
app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Post Request Received');
}); 
app.put('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} update`);
});
app.delete('/user/:userId',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.userId} deleted`);
});

/* Static File */
app.use(express.static('public'));
/* --------------- */

app.listen(app.get('port'), () =>{
    console.log(app.get('AppName'))
    console.log(`Server on port ${app.get('port')}`);
});