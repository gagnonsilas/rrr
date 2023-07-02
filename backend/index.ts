const express = require('express')
var sqlite3 = require('sqlite3').verbose()

const app = express()
const port = 3000

let db = new sqlite3.Database('./db/games.db', (err) => {
  if(err) {
    return console.error(err.messsage)
  }

  console.log('Database opened')
})

db.close((err) => {
  if(err) {
    return console.error(err.messsage)
  }

  console.log('Database closed')
});

app.get('/', (req, res) => {
  res.send('<H1>RRR test</H1>')
})

app.listen(port, () => {
  console.log(`RRR at http://localhost:${port}`)
})

