require('dotenv').config();
const mongose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


mongose.connect(process.env.MONGOOSE_URL,{
    useNewUrlParser: true,useUnifiedTopology: true
});

const Db = require('./models/db');
app.listen(port,()=>{console.log('Server Listning Started...')});
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:'10mb'}));
app.use(cors());

app.post('/postQuote',(req,res)=>{
    let body = req.body;
   Db.create(body);
   res.redirect('/')
})

app.get('/getquotes', async(req,res)=>{
    const all_data = await Db.find({});
    res.json(all_data)

    // database.loadDatabase();
    // database.find({},(err,data)=>{
    //     if(!err){
    //         res.json(data);
            
    //     }
    //     else{
    //         res.json([{"author":"Martin Fowler","authorContent":"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","_id":"SnWmqxEzmOTq7Gkl"}
    //     ])
    //     }
    // })
})




