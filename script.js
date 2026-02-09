const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")
const loginButton = document.getElementById("login")
const htmlBody = document.querySelector("body")
const loginDiv = document.getElementById("loginDiv")

const loginInfo = {
    userName: "test",
    password: "1234",
}

loginButton.addEventListener("click", logins)

function logins () {
    const inputtedUsername = inputUsername.value
    const inputtedPassword = inputPassword.value

    if 
    (inputtedUsername === loginInfo.userName &&
    inputtedPassword === loginInfo.password
    ){
        welcome () 
    } else if 
    (inputtedUsername != loginInfo.userName &&
    inputtedPassword === loginInfo.password){
        console.log("användarnamn är felaktig") 
    } else if 
    (inputtedUsername === loginInfo.userName &&
    inputtedPassword != loginInfo.password){
        console.log("lösenord är felaktigt")
    } else {
        console.log ("allt är fel!")
    }
}

function welcome () {
    loginDiv.style.display = "none"
    let loginTitle = document.getElementById("h1")
    loginTitle.textContent = "Välkommen"+ " " + inputUsername.value + " "  + ":D"  

    let logoutButton = document.createElement("button")
    logoutButton.textContent = ("logout")
    htmlBody.appendChild(logoutButton)

    logoutButton.addEventListener("click", function(){
        loginDiv.style.display = "block"
        logoutButton.style.display = "none"
        loginTitle.textContent = "Logga in"
    })
}

//funktion för att rensa input fälten
function cleanInput () {
    inputUsername.value = ""
    inputPassword.value = ""
}


//Todo efter rast: Nu när jag har sett att if satsen för fel/rätt inloggning funkar så ska jag lägga till ett meddelande för dessa. 
//samt att optimera med cleanInput där det behövs.
