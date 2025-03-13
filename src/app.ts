import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000
const address = '127.0.0.1'
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

app.use('/',express.static('dist'))

app.listen(port,address,()=>console.log(`listening at http://${address}:${port}`))