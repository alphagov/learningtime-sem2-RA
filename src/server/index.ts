import express, { Express, Request, Response } from 'express'
import path from 'path'
import * as bodyParser from 'body-parser'

const app: Express = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (request: Request, response: Response) => {
    response.json({ hello: 'world' })
})

app.get('/goodbye', (request: Request, response: Response) => {
    response.json({ goodbye: 'world' })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
