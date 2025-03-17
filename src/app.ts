import express, { response } from 'express'
import { request } from 'http'
import path, {dirname} from 'path'
import Image from "./model/model.js";

import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import morgan from 'morgan'
import fs from 'node:fs'
import bodyParser from 'body-parser'
import {index} from './controller/controller.js'
mongoose.connect('mongodb://localhost:27017/imgs')
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
app.use(express.static('dist/FRONTEND'))
//root page,instantly sends to the main page with the images
app.get('/',(request,response)=>{
    console.log("in the thang")
    response.sendFile(path.join(_dirname,'/FRONTEND/index.html'))
})
app.get('/store',(request,response)=>{
    response.sendFile(path.join(_dirname,'/FRONTEND/store.html'))
    
})
//Main page,fetching DB images
app.get('/emp/index',(req,res)=>{
    console.log(Image.find())
    const employ = Image.find()
    .then(img =>{
        res.json({
            img
        })
    })
    .catch(error =>{
        res.json({
            message:'Error Occured!'
        })
    })
})
app.post('/emp/store',(req,res)=>{
    console.log("in post")
    let tmp = new Image({
        dir: req.body.dir
    })
    console.log(req.body.dir)
    tmp.save()
    .then(response=>{
        res.json({
            message:"Saved!"
        })
    })
    .catch(error=>{
        res.json({
            message:"Unable to save..."
        })
    })
})
app.use(express.static('srch'))
app.get('/srch',(request,response)=>{
    response.sendFile(path.join(_dirname,'../srch/srch.html'))
})

/* app.use('/srch',express.static(path.join(_dirname,'../srch/')))
console.log(path.join(_dirname,'../srch')) */

app.listen(port,address,()=>console.log(`listening at http://${address}:${port}`))