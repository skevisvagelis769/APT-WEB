let dt = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
        let btn = document.getElementById("Submit")
        let input = document.getElementById("txt") 
        btn.addEventListener('click',()=>{
            fetch('/emp/store',{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"dir": `${input.value}`,"date":dt})})
                .then(response=>response.json()).then(data=>{
                    console.log(data)
                })
        })