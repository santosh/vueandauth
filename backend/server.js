const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/messages', (req, res) => {
  const messages = ['hello', 'hi', 'its working']
  res.send(messages)
})

app.post('/messages', (req, res) => {
  console.log(req.body);
  res.send({})
})

app.listen(port, () => console.log('app running'))
