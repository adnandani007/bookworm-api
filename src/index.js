import express from 'express';
import path from 'path';

const App = express();

App.post("/api/auth",(req, res)=>{
  res.status(400).json({errors:{ global : "invaild credentials"}});
})

App.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

App.listen("8080",()=>{
  console.log("Running on localhost 8080");
});
