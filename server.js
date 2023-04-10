require('dotenv').config();
const express =  require("express")
const axios = require("axios")
const cors = require('cors')
const { response } = require("express")

const app =  express()
const port = "https://silly-nougat-3f9593.netlify.app"
app.use(cors())

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
