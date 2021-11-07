import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const messages = ['hello', 'hi', 'its working']

app.get('/messages', (req, res) => {
  return res.status(200).send({ "messages": messages })
})

app.post('/messages', (req, res) => {
  let msg = req.body
  messages.push(msg.message)
  return res.status(201).json(msg)
})

export default app
