import express from 'express'
import routes from './routes'
import cors from 'cors'
import '../database'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
