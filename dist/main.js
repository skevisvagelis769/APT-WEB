console.log("beninging");
/* var img = document.createElement('img')
 */ var box = document.getElementById("imgs");
/* img.setAttribute("src","./IMAGES/images.jpeg")
img.setAttribute("id","1")
document.body.appendChild(img)
box.appendChild(img)
img.innerHTML += '<br>' */
class Main {
    constructor() {
    }
    makeImg() {
        console.log("in make");
        let img = {
            id: 1, date: "skou", dir: './IMAGES/images.jpeg'
        };
        var tmp = document.createElement(`img`);
        tmp.setAttribute("src", `${img.dir}`);
        tmp.setAttribute("id", `${img.id}`);
        //document.body.appendChild(tmp)
        box.appendChild(tmp);
        tmp.innerHTML = '<br>';
    }
}
let test1 = new Main;
console.log("after test");
test1.makeImg();
export {};
/*  var img2 = document.createElement('img')
img2.src = "./IMAGES/kougiasg.webp"
document.body.appendChild(img2) */
