const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")
const loginButton = document.getElementById("login")
const htmlBody = document.querySelector("body")
const loginDiv = document.getElementById("loginDiv")
const messageDiv = document.getElementById("message")
const regButton = document.getElementById ("regButton")

//Inloggningsinformationen. Info från registreringen
const loginInfo = {
    userName: "",
    password: "",
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



regButton.addEventListener ("click", regForm)

function regForm() {
    const regTitle = document.getElementById("h1")
    regTitle.textContent = "Registrera dig"

    loginDiv.style.display = "none"
    
    //skapar en div
    const regDiv = document.createElement("div")
    htmlBody.appendChild(regDiv)

    //skapar p taggar för input fälten
    const regUserNameP = document.createElement("p")
    regUserNameP.textContent = "Önskat Username"
    const regPasswordP = document.createElement ("p")
    regPasswordP.textContent = "Önskat Password"
    
    //skapar input fälten
    const regUserNameInput = document.createElement("input")
    const regPasswordInput = document.createElement("input")

    //Lägger till allt i skapade diven
    regDiv.appendChild(regUserNameP)
    regDiv.appendChild(regUserNameInput)
    regDiv.appendChild(regPasswordP)
    regDiv.appendChild(regPasswordInput)
    
    //skapar infoga reg knapp
    const insertRegButton = document.createElement("button")
    insertRegButton.textContent = "infoga"
    htmlBody.appendChild(insertRegButton)

    //funktion för insert knappen som lägger det man skrivit in i loginInfo objektet
    insertRegButton.addEventListener("click", function() {
        const inputtedRegName = regUserNameInput.value
        const inputtedRegPw = regPasswordInput.value
        loginInfo.userName = inputtedRegName
        loginInfo.password = inputtedRegPw
        backToLogin()
})

    //skapar och funktion till tillbaka knappen
    const backButton = document.createElement("button")
    backButton.textContent = "tillbaka"
    htmlBody.appendChild(backButton)

    backButton.addEventListener ("click", backToLogin)

    function backToLogin (){
        loginDiv.style.display = "block"
        backButton.style.display = "none" 
        insertRegButton.style.display = "none"
        regDiv.style.display = "none"
        regTitle.textContent = "Logga in"
        cleanInput()
    }
}

//funktion för att hämta
function cleanInput () {
    inputUsername.value = ""
    inputPassword.value = ""
}

//todo 
//1.Göra så du inte kan regga tomma konton (med if sats)
//2.Fixa så det går att ha flera användare (med if sats, typ if user1 objektet redan har användare, registreara på user2 etc.)
//-Inlogg ska sparas i local storages så man är inloggad efter man refreshar
//-Logga ut knappen ska rensa local storage