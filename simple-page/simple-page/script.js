let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let birth = document.getElementById("birth");
let email = document.getElementById("email");
let sub = document.getElementById("subject");
let pageForm = document.getElementById("form");
let inputError = document.getElementById("input-error");
let allInputFieldsError = document.getElementById("error");
let formArr = [firstName , lastName , birth , email ,sub];

formArr.forEach((input) => {
    pageForm.addEventListener('submit' ,(e) => {
        let allFieldsMessage =  [];
        let inputMessage = [];
        if(input.value === "") {
            allFieldsMessage.push("Please fill all fields!")
            inputMessage.push("Field empty!");
            e.preventDefault();
           
            allInputFieldsError.innerText = allFieldsMessage;
            inputError.innerText = inputMessage;
            
        }
    })
})


  



