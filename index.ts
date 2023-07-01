const express = require('express')
var sqlite3 = require('sqlite3')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<H1>RRR test</H1>')
})

app.listen(port, () => {
  console.log(`RRR at http://localhost:${port}`)
})
