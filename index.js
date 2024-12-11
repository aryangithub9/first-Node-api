import express from 'express';
import dotenv from 'dotenv'
dotenv.config({});
const app = express();

app.use(express.json())

app.get('/home',(req,res)=>{
    res.send('You are on home page');
    console.log(`Someone Reaches on Server from this ip address${req.ip}`)
})

app.get('/',(req,res)=>{
    res.send('You are On Server Now');
})

app.get('/projet', (req,res)=>{
    res.send("You are on Project page");

})

app.get('/about',(req,res)=>{
    res.send('You are on About Page')
})

app.post('/name', (req,res)=>{
    const {name} = req.body;
    const Cname = name.toUpperCase();
    return res.json({Cname});
})


app.listen(process.env.PORT,()=>{
    console.log(`Server Stared AT PORT ${process.env.PORT}`);
})

