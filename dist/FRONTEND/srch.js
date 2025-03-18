let input  = document.getElementById("input")
        let disp = document.getElementById("RES")
        let p = document.getElementById("resu")
        let btn = document.getElementById("Submit")
        console.log("This is the input val",input.value)
        btn.addEventListener('click',()=>{
            fetch('/emp/srch',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "dt":`${input.value}`
            })})
            .then(response=>response.json())
            .then(img=>{
                img.img.forEach(element=>{
                    if(element.message===undefined){
                        p.textContent=''
                        console.log("This is the data",element)
                        const listItem = document.createElement('img')
                        const br = document.createElement('br')
                        listItem.src = "./IMAGES/"+element.dir
                        
                        disp.appendChild(listItem)
                        disp.appendChild(br)
                        disp.style.textAlign='center'
                         
                         
                    }else{
                         
                        console.log(element.message)
                       
                        p.textContent='DIDNT FIND'
                       
                    }
                        
                    
                })
                
            })
            .catch(error=>{
                 p.textContent='DIDNT FIND'
            })
        
        })