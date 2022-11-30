const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
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