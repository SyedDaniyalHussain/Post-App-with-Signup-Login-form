var currentForm = null

function signupForm() {
    if (currentForm === 'signup') {
        return;
    }
    currentForm = 'signup'

    var htmlDiv = document.getElementById("form-Id");
    htmlDiv.innerHTML = "";

    //name input field
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter Your Name";
    nameInput.className = "name-Input";
    nameInput.id = "nameData"

    htmlDiv.appendChild(nameInput);

    //email input field 
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Enter Your Email";
    emailInput.className = "email-Input";
    emailInput.id = "EmailData"

    htmlDiv.appendChild(emailInput);

    //password input field 
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Enter Your Password";
    passwordInput.className = "Password-Input";
    passwordInput.id = "PasswordData"

    htmlDiv.appendChild(passwordInput);

    //signup button
    var SignupBtn = document.createElement("button");
    SignupBtn.type = "button"
    SignupBtn.textContent = "SIGN UP"
    SignupBtn.className = "Signup-Btn";
    htmlDiv.appendChild(SignupBtn);

    SignupBtn.onclick = function () {

        //name conditions
        if (nameInput.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Your Name!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
        localStorage.setItem("Name", nameInput.value);
        var getNameValue = localStorage.getItem("Name");
        console.log(getNameValue);


        //email conditions
        if (!(emailInput.value.includes("@") || emailInput.value.includes("."))) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Valid Email!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
        localStorage.setItem("Email", emailInput.value);
        var getEmailValue = localStorage.getItem("Email");
        console.log(getEmailValue);

        //password conditions
        var password = passwordInput.value;
        if (password.length < 8) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 8 characters!",
            });
            return;
        }
        var hasCapital = false;
        var hasSmall = false;
        var hasNumber = false;
        var hasSpecialSymbol = false;

        for (var i = 0; i < password.length; i++) {
            var code = password.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                hasCapital = true;
            }
            else if (code >= 97 && code <= 122) {
                hasSmall = true;
            }
            else if (code >= 48 && code <= 57) {
                hasNumber = true;
            }
            else if (
                (code >= 33 && code <= 47) ||
                (code >= 58 && code <= 64) ||
                (code >= 91 && code <= 96) ||
                (code >= 123 && code <= 126)
            ) {
                hasSpecialSymbol = true;
            }
        }

        if (!(hasCapital)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must contain at least one Capital Letter (A-Z)!",
            });
            return;
        }
        else if (!(hasSmall)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must contain at least one small Letter (a-z)!",
            });
            return;
        }
        else if (!(hasNumber)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must contain at least one Number (0-9)!",
            });
            return;
        }
        else if (!(hasSpecialSymbol)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must contain at least one Special Character (!@#$%^&*)!",
            });
            return;
        }
        else {
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Account created successfully!",
            });
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
        localStorage.setItem("Password", password);
        var getPasswordValue = localStorage.getItem("Password");
        console.log(getPasswordValue);
    }

}


// ----------------------
function loginForm() {
    if (currentForm === 'login') {
        return;
    }
    currentForm = 'login';

    var htmlDiv = document.getElementById("form-Id");
    htmlDiv.innerHTML = ""; 

    //email input field 
    var loginEmailInput = document.createElement("input");
    loginEmailInput.type = "email";
    loginEmailInput.placeholder = "Enter Your Email";
    loginEmailInput.className = "login-email";
    loginEmailInput.id = "loginEmailInput";
    htmlDiv.appendChild(loginEmailInput);

    //password input field 
    var loginPasswordInput = document.createElement("input");
    loginPasswordInput.type = "password";
    loginPasswordInput.placeholder = "Enter Your Password";
    loginPasswordInput.className = "login-password";
    loginPasswordInput.id = "loginPasswordInput";
    htmlDiv.appendChild(loginPasswordInput);

    //login button
    var LoginBtn = document.createElement("button");
    LoginBtn.type = "button";
    LoginBtn.textContent = "LOGIN";
    LoginBtn.className = "login-for-work";
    htmlDiv.appendChild(LoginBtn);

    LoginBtn.onclick = function () {


        var savedEmail = localStorage.getItem("Email");
        var savedPassword = localStorage.getItem("Password");

    
        if (!savedEmail || !savedPassword) {
            Swal.fire({
                icon: "error",
                title: "No Account Found",
                text: "Please signup first!",
            });
            return;
        }

    
        var enteredEmail = loginEmailInput.value;
        var enteredPassword = loginPasswordInput.value;

        
        if (enteredEmail === "" || enteredPassword === "") {
            Swal.fire({
                icon: "error",
                title: "Empty Fields",
                text: "Please enter both email and password!",
            });
            return;
        }

        
        if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
            Swal.fire({
                icon: "success",
                title: "Hurrrrayyyy!",
                text: "Login successful!",
            })
            
            .then(() => {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href ="post.html"
            });
            

        
            loginEmailInput.value = "";
            loginPasswordInput.value = "";
        }
        else {
            
            Swal.fire({
                icon: "error",
                title: "Invalid Credentials",
                text: "Email or password is incorrect!",
            });
        }
    }
}












