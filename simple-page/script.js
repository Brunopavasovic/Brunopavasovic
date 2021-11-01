let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let birth = document.getElementById("birth");
let email = document.getElementById("email");
let sub = document.getElementById("subject");
const form = document.getElementById("form");
var showError = document.getElementById("error");
let input = document.querySelector("input-field");

form.addEventListener("submit" , (e) => {
    

    var errorMessage = [];

    if (firstName.value === "" || firstName.value === null && (lastName.value === "" || lastName.value === null) && (birth.value === "" || birth.value === null) && (email.value === "" || email.value === null) && (sub.value === "" || sub.value === null) ) {
        errorMessage.push("Please fill all fields!");
    }

  
  else if(firstName.value === "" || firstName.value === null) {
      errorMessage.push("Please enter your first name");
  }

  else if(lastName.value === "" || lastName.value === null) {
      errorMessage.push("Please enter your last name");
  }

  else if(birth.value === "" || birth.value === null){
      errorMessage.push("Please enter your dater of birth");
  }

  else if(email.value === "" || email.value === null){
      errorMessage.push("Please enter email!");
  }

  else if(sub.value ==="" || sub.value === null){
      errorMessage.push("Please enter subject");
  }
    if(errorMessage.length > 0) {
        e.preventDefault();
         showError.innerText = errorMessage.join(', ');
    }
       
         
     });
    
          
          
          
      

      
   

