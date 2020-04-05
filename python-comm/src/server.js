const express = require('express')
const app = express()
const port = 3001

app.use('/models', require("./routes/python"))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))