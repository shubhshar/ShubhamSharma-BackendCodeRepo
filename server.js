require('dotenv').config();
const express =  require("express")
const axios = require("axios")
const { response } = require("express")

const app =  express()
const port = process.env.APP_PORT || 5000

app.get('/mySpaceXData',async(req,res)=>{
  try{
    const response = await axios.get("https://api.spacexdata.com/v4/capsules");
    res.json(response.data)
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error"})
  }
});

app.listen(port,()=>{
  console.log("Server up and running at:",port)
})