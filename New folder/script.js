//Selecting input fields

const nameValue = document.getElementById("name-value");
const emailValue = document.getElementById("email-value");
const pwdValue = document.getElementById("pwd-value");
const phoneValue = document.getElementById("phone-value");
const genValue = document.getElementById("gender-value");
const occValue = document.getElementById("occ-value");

const addbtn = document.getElementById("btn");

//Selecting error fields

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const pwdError = document.getElementById("pwd-error");
const phoneError = document.getElementById("phone-error");
const genError = document.getElementById("gender-error");
const occError = document.getElementById("occ-error");

//Validation function for name field //////////////////////////////////////////////

function validateName()
{
    const name = nameValue.value;
    if(name.length === 0)
    {
        nameError.innerHTML = "Name is Required";
        Btn.disabled = true;
        return false;
    }
    if(!name.match(/^[a-zA-Z]{3,}[\s][a-zA-Z]+$/))
    {
        nameError.innerHTML = "Write full Name";
        btn.disabled=false;
        return true;
    }

    nameError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`
    BigInt.disabled = false;
    return true;

}
nameValue.addEventListener("keyup",validateName);
nameValue.addEventListener("blur",validateName);

// validation of email //////////////////////////////////////////////////////

function validateEmail()
{
    const email = emailValue.value;
    if(email.length == 0)
    {
        emailError.innerHTML = "Email is Required";
        Btn.disabled = true;
        return false;
    }
    if(!email.match(/^[A-Za-z0-9\._\-]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = "Invalid Mail";/*  */
        btn.disabled=false;
        return true;
    }
    emailError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`
    BigInt.disabled = false;
    return true;

}
emailValue.addEventListener("keyup",validateEmail);
emailValue.addEventListener("blur",validateEmail);

// password validation form ////////////////////////////////////


function validatePwd()
{
    const pwd = pwdValue.value;
    if(pwd.length==0)
    {
        pwdError.innerHTML = "Password is required";
        Btn.disabled = true;
        return false;
    }
    if(!pwd.match(/^[a-zA-Z0-9!@#$%^&*]{6,13}$/))
    {
        pwdError.innerHTML = "Invalid Password";
        btn.disabled=false;
        return true;
    }
    pwdError.innerHTML =  `<i class = 'fas fa-check-circle icon'></i>`
    Btn.disabled = false;
    return true;
}
pwdValue.addEventListener("keyup",validatePwd);
pwdValue.addEventListener("blur",validatePwd);

// phone validation form /////////////////////////////////////////////


function validatePhone()
{
    const phone = phoneValue.value;
    if(phone.length == 0)
    {
        phoneError.innerHTML = "Phone No. is Required";
        btn.disabled = true;
        return false;
    }
    if(!phone.match(/^[8,9][0-9]{9}$/))
    {
        phoneError.innerHTML = "Invalid Number";
        btn.disabled=false;
        return true;
    }
    phoneError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`
    btn.disabled = false;
    return true;


}
phoneValue.addEventListener("keyup",validatePhone);
phoneValue.addEventListener("blur",validatePhone);

// validation form of gender /////////////////////////////////////

function validateGen()
{
    const gen = genValue.options[genValue.selectedIndex].value;

  if (gen === "") 
  {
    genError.innerHTML = "Gender is required";
    addbtn.disabled = true;
    return false;
  }
  genError.innerHTML = "";
  addbtn.disabled = false;
  return true;

}
genValue.addEventListener("Change",validateGen);
genValue.addEventListener("blur",validateGen);

// FORM VALIDATION OF OCCUPATION //////////////////////////////////////

function validateOcc()
{
    const occ = occValue.value;
    if(occ.length === 0)
    {
        occError.innerHTML = "Occupation is Required";
        btn.disabled = true;
        return false;

    }
    if(!occ.match(/^[A-Za-z]+$/))
    {
        occError.innerHTML = "";
        btn.disabled=false;
        return true;
    }
    occError.innerHTML = "Occupation is Required";
    btn.disabled = false ;
        return true;

    }
    
    const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validatePwd();
    validatePhone();
    validateGen();
    validateOcc();
    if (
      !validateName() ||
      !validateEmail() ||
      !validatePwd() ||
      !validatePhone() ||
      !validateGen() ||
      !validateOcc()
    ) {
      return false;
    }
  
    let obj = {
      name: nameValue.value,
      email: emailValue.value,
      pwd: pwdValue.value,
      phone: phoneValue.value,
      gender: genValue.value,
      occupation: occValue.value,
    };
  
    console.log(obj);
  
    //Reset
    nameValue.value = "";
    emailValue.value = "";
    pwdValue.value = "";
    phoneValue.value = "";
    genValue.value = "";
    occValue.value = "";
  });
  

