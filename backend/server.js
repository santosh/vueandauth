const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/messages', (req, res) => {
  const messages = ['hello', 'hi', 'its working']
  res.send(messages)
})

app.listen(port, () => console.log('app running'))
