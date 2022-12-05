const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false}))

app.get("/",  async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://billing-staging.bytestacks.io/api/v1/electricity/billers',
        headers: {'content-type': 'application/json', "api-key": "Fincra_6VA35CDPQNMRS"}
      };
      try{
        const data = await axios.request(options)
        res.status(200).json({
          status: "Success",
          message: data.data
        })
      }catch(err){
        res.status(400).json({
          status: "Failed",
          message: err
        })
      }
      
    
})

app.post("/", (req, res) => {
    const body = req.body;
    res.status(200).json({
        status: "success",
        message: "loading project..."
    })
})

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})