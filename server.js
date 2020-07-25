const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const Datastore = require('nedb');
const database = new Datastore('database.db');

app.listen(port,()=>{console.log('Server Listning Started...')});
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'10mb'}));
app.use(cors());

app.post('/postQuote',(req,res)=>{
    let body = req.body;
    console.log(body)
   database.loadDatabase();
   database.insert(body);
   res.redirect('/')
})

app.get('/getquotes',(req,res)=>{
    database.loadDatabase();
    database.find({},(err,data)=>{
        if(!err){
            res.json(data);
            
        }
        else{
            res.json([{"author":"Martin Fowler","authorContent":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","_id":"SnWmqxEzmOTq7Gkl"}
        ])
        }
    })
})




