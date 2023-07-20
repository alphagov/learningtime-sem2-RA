import express, { Express } from 'express'
import path from 'path'
import * as bodyParser from 'body-parser'

const app: Express = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
