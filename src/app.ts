import express, { response } from 'express'
import { request } from 'http'
import path, {dirname} from 'path'
import Image from "./model/model.js";

import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import morgan from 'morgan'
import fs from 'node:fs'
import bodyParser from 'body-parser'
mongoose.connect('mongodb://localhost:27017/imgs')
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("DB connected!")
})

const app = express()
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
    response.sendFile(path.join(_dirname,'/FRONTEND/index.html'))
})
app.get('/store',(request,response)=>{
    response.sendFile(path.join(_dirname,'/FRONTEND/store.html'))
    
})
//Main page,fetching DB images
app.get('/emp/index',(req,res)=>{
    const imag = Image.find()
    .then(img =>{
        res.json({
            img
        })
        console.log("this is the index response",response)
    })
    .catch(error =>{
        res.json({
            message:'Error Occured!'
        })
    })
})
/* {$or:[{'dir':dt},{'date':dt}]}  */
app.post('/emp/srch',(req,res)=>{
    let dt = req.body.dt
    console.log("this is what the api got",dt)
    const regex = new RegExp(dt,'i')
    Image.find({$or:[{'dir':{$regex: regex}},{'date':{$regex: regex}}]} )
    .then(img =>{
        
        if(img.length!== 0){
            console.log("in the regular case")
            res.json({
                img
                
            })
        }else{
            console.log("didnt find")
            res.json({
              message:"didnt find"
              
                
            })
        }
        console.log("this is the response",img)
    })
    
    .catch(error=>{
        res.json({
            message:"Couldnt find emp"
        })
    })
})
app.post('/emp/store',(req,res)=>{
    let tmp = new Image({
        dir: req.body.dir
        ,date:req.body.date
    })
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
    response.sendFile(path.join(_dirname,'/FRONTEND/srch.html'))
})
app.listen(port,address,()=>console.log(`listening at http://${address}:${port}`))