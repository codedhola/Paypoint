const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false}))

app.get("/",  (req, res) => {
    // axios.get("https://billing-staging.bytestacks.io/api/v1/electricity/billers",{}, {
    //     headers: {
    //         "Content-type" : "application/json",
    //         "api-key": "Fincra_6VA35CDPQNMRS"
    //     }
    // })

    const options = {
        method: 'GET',
        url: 'https://billing-staging.bytestacks.io/api/v1/electricity/billers',
        headers: {accept: 'application/json', 'content-type': 'application/json', "api-key": "Fincra_6VA35CDPQNMRS"}
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    res.status(200).json({
        status: "success",
        message: "loading project..."
    })
})

app.post("/", (req, res) => {
    const body = req.body;
    console.log(body)
    res.status(200).json({
        status: "success",
        message: "loading project..."
    })
})

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})