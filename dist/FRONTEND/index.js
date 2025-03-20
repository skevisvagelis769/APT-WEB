
const listEl= document.getElementById('ik')    
fetch("/emp/index")
.then(response=>response.json())
.then(img=>{
    
     img.img.forEach(element => {
        const listItem = document.createElement('img')
        const brk = document.createElement('br')
        listItem.src="./IMAGES/"+element.dir
        listEl.appendChild(listItem)
        listEl.appendChild(brk)
        listEl.style.textAlign="center"
    }); 
})   