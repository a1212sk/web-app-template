console.log("Backend started");

const express = require('express')
const app = express()
const port = 3001

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})