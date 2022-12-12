const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    const body = req.body;
    res.status(200).json({
        status: "success",
        message: "loading project..."
    })  
})

app.post("/pay", async (req, res) => {
  try{
    const data = {provider: 'ikeja electric prepaid', meter_number: '23100009119'}
     const response =  await axios.post('https://billing-staging.bytestacks.io/api/v1/electricity/subscribe', {provider: 'ikeja electric prepaid', meter_number: '23100009119'}, {
        headers: {'content-type': 'application/json', "api-key": "Fincra_6VA35CDPQNMRS"},
      })
      console.log(response.data)
      res.status(200).json({
            status: "Success",
            data: response.data
          })

  }catch(error){
    res.status(400).json({
      status: "Failed",
      err: error
    })
  }
})

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})