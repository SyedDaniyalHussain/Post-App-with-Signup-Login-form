
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}


let firstdiv = document.getElementById("first-div")

const post = () => {
    let JsFirstDiv = document.getElementById("second-divForJS");
   
    if (document.querySelector(".post-field")) {
        return;
    }
    
    let postField = document.createElement("textarea");
    postField.placeholder = "Enter your post!"
    postField.className = "post-field"
    
    // console.log(postField);
    JsFirstDiv.appendChild(postField);
    
    let postButton = document.createElement("button");
    postButton.textContent = "Post Now";
    postButton.className = "postData"
    
    postButton.onclick = function () {
        console.log(postField.value);
        
        let JsSecondDiv = document.getElementById("third-divForJS");
        let para = document.createElement("p");
        para.className = "paragraph"
        para.innerText = postField.value;

        JsSecondDiv.appendChild(para);
        postField.value = ""

    }
    JsFirstDiv.appendChild(postButton);
    // console.log(postButton);
    


}


function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

