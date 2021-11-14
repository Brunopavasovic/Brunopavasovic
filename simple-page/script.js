let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let birth = document.getElementById("birth");
let email = document.getElementById("email");
let sub = document.getElementById("subject");
let pageForm = document.getElementById("form");
let inputError = document.getElelementById("input-error")
let allInputFieldsError = document.getElementById("error");
let formArr = [fisrtName , lastName , birth , email , sub];

pageForm.addEventListener('submit', (e) => {
    formArr.forEach((element) => {
       if(element.value === "") {
           allInputFieldsError.style.visibility = "visible";
            inputError.style.visibility = "visible";
           e.preventDefault();
       }
    });  
});

  


    
          
          
          
      

      
   

