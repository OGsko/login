const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")
const loginButton = document.getElementById("login")
const htmlBody = document.querySelector("body")
const loginDiv = document.getElementById("loginDiv")
const messageDiv = document.getElementById("message")

//Inloggningsinformationen. Ska bytas ut så det blir reginput istället.
const loginInfo = {
    userName: "test",
    password: "1234",
}

loginButton.addEventListener("click", logins)

//skapar error meddelandet, men ingen textContent. Detta sker i funktionen logins.
const wrongMessage = document.createElement("p")
messageDiv.appendChild(wrongMessage)

//funktion med if sats för att antingen få dig inloggad om input stämmer överens med loginInfo objektet,
//annars skriver den ut vad som är fel i wrongMessage elementet.
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
        wrongMessage.textContent = ("Fel användarnamn! Försök igen!")
        cleanInput()
    } else if 
    (inputtedUsername === loginInfo.userName &&
    inputtedPassword != loginInfo.password){
        wrongMessage.textContent = ("Fel lösenord! Försök igen!")
        cleanInput()
    } else {
        wrongMessage.textContent = ("Fel användarnamn & lösenord! Försök igen!")
        cleanInput()
    }
}

//Välkommen funktionen. Detta kommer man till om inputsen stämmer överens med objektet ovan. 
//Den byter ut h1 texten "logga in" till "Välkommen namn :D" samt lägger till en logga ut knapp
function welcome () {
    wrongMessage.textContent = ("")
    loginDiv.style.display = "none"
    let loginTitle = document.getElementById("h1")
    loginTitle.textContent = "Välkommen"+ " " + inputUsername.value + " "  + ":D"  

    let logoutButton = document.createElement("button")
    logoutButton.textContent = ("logout")
    htmlBody.appendChild(logoutButton)

    //funktionen för logga ut knappen
    logoutButton.addEventListener("click", function(){
        loginDiv.style.display = "block"
        logoutButton.style.display = "none"
        loginTitle.textContent = "Logga in"
        cleanInput()
    })
}

//funktion för att rensa input fälten
function cleanInput () {
    inputUsername.value = ""
    inputPassword.value = ""
}
