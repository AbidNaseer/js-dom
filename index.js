const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e){
        e.preventDefault()
        const yourName = document.querySelector("#yName").value;
        const loverName = document.querySelector("#lName").value;
        const result = document.querySelector("#result");
        const random = Math.floor(Math.random() * 100);

        if (yourName && loverName == "") {
            result.innerHTML = `enter a valid user name`
        }else{

        result.innerHTML = `${yourName} your precentage with ${loverName} is ${random} %`
    }});
    

