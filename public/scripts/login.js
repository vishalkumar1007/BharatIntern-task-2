const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
});


document.getElementById("signupbtn").addEventListener("click",(e)=>{
    e.preventDefault();
  
    const nameInput = document.getElementById("usernameInput").value;
    const  contactInput = document.getElementById("contInput").value;
    const  emailInput = document.getElementById("emailInput").value;
    const joinn = document.getElementById("joinasInput").value;
    const  passwordInput = document.getElementById("passInput").value;
  
    const apiUrl = 'http://localhost:4000/user/register';
   
  
    const postData = {
      username : nameInput,
      email : emailInput,
      password : passwordInput,
      mobile : contactInput,
      joiningas : joinn
    };
  
    // Options for the fetch request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(postData),
    };
  
    //Fetch the API
    fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      // Process the response data from the API
  
      console.log(data);
      if(data.message=='user already exists' && data.success==false){
        alert("User Registered Fail : User Already Exist");
      }
      else if(data.message=='Internal Server error' && data.success==false){
        alert("Internal Server error : Retry");
      }
      else{
        alert("User Registered Successfully");
        location.replace("./login_and_signup.html");
      }
    })
    .catch((error) => {
      // Handle errors
      console.error('Error fetching data:', error);
      alert("User Registration Failed");
    });
 
});

document.getElementById("loginbtn").addEventListener("click",(x)=>{
    x.preventDefault();
  
  
    const loginEmail = document.getElementById("loginemail").value;
    const loginPassword = document.getElementById("loginpassword").value;
  
    const apiUrl = 'http://localhost:4000/user/login';
   
  
    const postData = {
      email : loginEmail,
      password : loginPassword
    };
    console.log(postData);
    // Options for the fetch request
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(postData),
    };
  
    //Fetch the API
    fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      // Process the response data from the API
      console.log(data);
      if(data.success==true){
        window.location.href='/profile';
      }
      else if(data.message=='Invalid email' && data.success==false){
        alert("Invalid email");
      }
      else if(data.message=='Invalid password' && data.success==false){
        alert("Invalid password");
      }
    })
    .catch((error) => {
      // Handle errors
      console.log("err");
      console.error('Error fetching data:', error);
      alert("User Login Failed");
    });
  
});