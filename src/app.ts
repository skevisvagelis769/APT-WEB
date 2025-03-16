import express, { response } from 'express'
import { request } from 'http'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import morgan from 'morgan'
import bodyParser from 'body-parser'
mongoose.connect('mongodb://localhost:27017/tut')
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("DB connected!")
})

const app = express()
const sr = express()
const port = 3000
const address = '127.0.0.2'
const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
console.log(_dirname)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use (bodyParser.json())
app.use(express.static('dist'))
app.get('/',(request,response)=>{
    response.sendFile('dist/index.html')
})
app.use(express.static('srch'))
app.get('/srch',(request,response)=>{
    response.sendFile(path.join(_dirname,'../srch/srch.html'))
})

/* app.use('/srch',express.static(path.join(_dirname,'../srch/')))
console.log(path.join(_dirname,'../srch')) */

app.listen(port,address,()=>console.log(`listening at http://${address}:${port}`))