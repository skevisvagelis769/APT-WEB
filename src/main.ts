import  _image  from "./types.js"
console.log("beninging")
/* var img = document.createElement('img')
 */var box = document.getElementById("imgs") as HTMLDivElement
/* img.setAttribute("src","./IMAGES/images.jpeg")
img.setAttribute("id","1")
document.body.appendChild(img)
box.appendChild(img)
img.innerHTML += '<br>' */
let btn = document.getElementById('search') as HTMLButtonElement
btn.addEventListener('click',()=>{
    console.log("btn pressed")
    window.location.assign('/srch')
}) 
class Main{
    public id:number
    constructor(){
        this.id=0
    }   
    makeImg(){
        //make this dynamic so that the img data gets entered as orisma in the func, mess about search (go to app.ts and make a new html directory for search)
        console.log("in make")
        let img:_image={
            id:this.id,dir:'./IMAGES/images.jpeg'
        }
        var tmp = document.createElement(`img`)
        tmp.setAttribute("src",`${img.dir}`)
        tmp.setAttribute("id",`${img.id}`)
        //document.body.appendChild(tmp)
        box.appendChild(tmp)
        tmp.innerHTML= '<br>'


    }
}
let test1 = new Main
console.log("after test")
test1.makeImg()
/*  var img2 = document.createElement('img')
img2.src = "./IMAGES/kougiasg.webp"
document.body.appendChild(img2) */
 