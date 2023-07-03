const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const app = express()
const port = 3000

let db = new sqlite3.Database('./db/games.db', (err: { messsage: any }) => {
  if(err) {
    return console.error(err.messsage)
  }

  console.log('Database opened')
})

db.close((err: { messsage: any }) => {
  if(err) {
    return console.error(err.messsage)
  }

  console.log('Database closed')
});


app.use('/', express.static('./../frontend/dist/'))

app.post('/login', (req: any, res: any) => {
  console.log(req)
})

app.listen(port, () => {
  console.log(`RRR at http://localhost:${port}`)
})

