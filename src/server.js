require('dotenv').config();
const express =  require("express")
const serverless = require("serverless-http");
const axios = require("axios")
const cors = require('cors')
const { response } = require("express")
const router = express.Router();
const app =  express()
const port = "https://incandescent-sunshine-13b75b.netlify.app/"

app.use(cors())

router.get('/myspacexdata',async(req,res)=>{
  try{
    const response = await axios.get('https://api.spacexdata.com/v4/capsules');
    res.json(response.data)
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error has occurred"})
  }
});

app.use('/.netlify/src/server', router);

app.listen(port,()=>{
  console.log("Server up and running at:",port)
})

module.exports = app;
module.exports.handler = serverless(app);
