const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<H1>RRR</H1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})