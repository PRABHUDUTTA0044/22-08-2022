// selecting input fields.

const nameValue = document.getElementById("name-value");
const emailValue = document.getElementById("email-value");
const numberValue = document.getElementById("number-value");
const msgValue = document.getElementById("msg-value");

// slecting error fields

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const numberError = document.getElementById("number-error");
const msgError = document.getElementById("msg-error");


// validation of fields.

function validateName()
{
    const name =nameValue.value;
    if(name.length == 0 )
    {
        nameError.innerHTML = "Name is required";
        addbtn.disabled = true;
        return false;
    }
    if(!name.match(/^[a-zA-Z]{3,}[\s][a-zA-Z]+$/))
    {
        nameError.innerHTML = "Write full name";
        addbtn.disabled =  true;
        return false;
    }
    nameError.innerHTML = ` <i class = 'fas fa-check-circle icon'></i>`
    addbtn.disabled = false;
    return true;

}
    nameValue.addEventListener("keyup",validateName);
    nameValue.addEventListener("blur",validateName);


   function validateEmail()
   {
    const email = emailValue.value;
    if(email.length == 0)
    {
        emailError.innerHTML="Mail is required";
        addbtn.disabled=true;
        return false;
    }
    if(!email.match(/^[A-Za-z0-9\._\-]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = "Invalid mail";
        addbtn.disabled= true;
        return false;
    }
    emailError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`
    addbtn.disabled = false;
    return true;

}
emailValue.addEventListener("keyup",validateEmail);
emailValue.addEventListener("blur",validateEmail);

function validateNumber()
{
    const number = numberValue.value;
    if(number.length==0)
    {
        number.innerHTML = "Number is required";
        addbtn.disabled= true;
        return false;
    }
    if(!number.match(/^[8,9][0-9]{9}$/))
    {
        numberError.innerHTML = "Invalid number";
        addbtn.disabled= true;
        return false;
    }
    numberError.innerHTML= `<i class = 'fas fa-check-circle icon'></i>`
    addbtn.disabled = false;
    return true;
}
numberValue.addEventListener("change", validateNumber);
numberValue.addEventListener("blur", validateNumber);


function validateMessage()
{
    const msg = msgValue.value
    if(msg.length==0)
    {
        msgError.innerHTML= "Message is required";
        addbtn.disabled=true;
        return false;
    }
    if(!msg.match(/^[A-Za-z\s]+$/))
    {
        msgError.innerHTML= "Write Proper Message";
        addbtn.disabled=true;
        return false;
    }
    msgError.innerHTML= `<i class = 'fas fa-check-circle icon'></i>`
        addbtn.disabled=false;
        return true;

}
msgValue.addEventListener("keyup",validateMessage);
msgValue.addEventListener("blur",validateMessage);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateNumber();
    validateMessage();
    if (
      !validateName() ||
      !validateEmail() ||
      !validateNumber() ||
      !validateMessage()
    ) {
      return false;
    }
  
    let obj = {
      name: nameValue.value,
      email: emailValue.value,
      number:numberValue.value,
      msg: msgValue.value,
    };
  
    console.log(obj);
  
    //Reset
    nameValue.value = "";
    emailValue.value = "";
    numberValue.value = "";
    msgValue.value = "";
  });
  

