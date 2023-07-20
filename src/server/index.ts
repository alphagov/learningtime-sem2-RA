import express, { Express, Request, Response } from 'express'
import path from 'path'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import { getCoords } from './utils/getCoords'

const app: Express = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(cors())

app.get('/', (_request: Request, response: Response) => {
    response.json({ hello: 'world' })
})

app.post('/api/postcode', async (request: Request, response: Response) => {
    const { postcode } = request.body
    const parsedPostcode: string = postcode.replace(' ', '').toUpperCase()

    // Process the request and prepare the response data
    const coords = await getCoords(parsedPostcode)

    const responseData = `This is your Co-ords ${coords}`

    // Send the response data back to the client
    response.json({ coords: responseData })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
