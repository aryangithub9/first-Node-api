import express from 'express';
const PORT =9000;
const app = express();

app.use(express.json())

app.get('/home',(req,res)=>{
    res.send('You are on home page');
    console.log(`Someone Reaches on Server from this ip address${req.ip}`)
})

app.get('/',(req,res)=>{
    res.send('You are On Server Now');
})

app.get('/about',(req,res)=>{
    res.send('You are on About Page')
})

app.post('/name', (req,res)=>{
    const {name} = req.body;
    const Cname = name.toUpperCase();
    return res.json({Cname});
})


app.listen(PORT,()=>{
    console.log(`Server Stared AT PORT ${PORT}`);
})

