import express from 'express';
const PORT =9000;
const app = express();

app.get('/home',(req,res)=>{
    res.send('You are on home page');
    console.log(`Someone Reaches on Server from this ip address${req.ip}`)
})

app.get('/',(req,res)=>{
    res.send('You are On Server Now');
})


app.listen(PORT,()=>{
    console.log(`Server Stared AT PORT ${PORT}`)
})