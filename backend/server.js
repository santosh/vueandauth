const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const messages = ['hello', 'hi', 'its working']

app.get('/messages', (req, res) => {
  res.send(messages)
})

app.post('/messages', (req, res) => {
  let msg = req.body
  console.log(msg);
  messages.push(msg.message)
  res.send(msg)
})

app.listen(port, () => console.log('app running'))
