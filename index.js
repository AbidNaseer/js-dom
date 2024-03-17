 const form = document.querySelectorAll('form')
 const yourName = document.getElementById("#yName");
 const loverName = document.getElementById("#lName");
 const result = document.getElementById('#result')
 const random = Math.floor(Math.random()*100);
 console.log(random)
 

 
 function calc(){
    form.forEach((i)=>{
        i[0].addEventListener('click', function(){
            alert(i.ATTRIBUTE_NODE)
        })
        console.log(i)
    })
 }