
import express from "express";

import "./database";

const app = express();


app.get('/', (req,res)=>{
  return res.json({message:'Hello World'})
})
app.post('/users', (req,res)=>{
  return res.json({message: "usuario salvo com sucesso"})
})

app.listen(3333, ()=> console.log('Server is running on http://localhost:3333'))