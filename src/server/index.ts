import express, { Express, Request, Response } from 'express'
import path from 'path'
import * as bodyParser from 'body-parser'
import cors from 'cors'

const app: Express = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(cors())

app.get('/', (_request: Request, response: Response) => {
    response.json({ hello: 'world' })
})

app.post('/api/postcode', (request: Request, response: Response) => {
    console.log(request)
    const { postcode } = request.body

    // Process the request and prepare the response data
    const responseData = `This is your postcode: ${postcode}`

    // Send the response data back to the client
    response.json({ message: responseData })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
