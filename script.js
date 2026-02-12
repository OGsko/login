const inputUsername = document.getElementById("username")
const inputPassword = document.getElementById("password")
const loginButton = document.getElementById("login")
const htmlBody = document.querySelector("body")
const loginDiv = document.getElementById("loginDiv")
const messageDiv = document.getElementById("message")
const regButton = document.getElementById ("regButton")

//variabler för nyklar till local storage
const userKey = "users"
const activeUserKey = "activeUser"

//Här lagras username och password. Kollar efter redan sparade konton, annars tom
const userStorages = JSON.parse(localStorage.getItem(userKey)) || []

//här lagras den aktivt inloggade. Den kollar efter en active user, annars är arrayen tom
let activeUser = JSON.parse(localStorage.getItem(activeUserKey)) || []

//funktion för att lägga till alla skapade 
function saveUsers() {
    localStorage.setItem(userKey, JSON.stringify(userStorages))
}
//samma som ovan men bara för active user
function saveActiveUser() {
    localStorage.setItem(activeUserKey, JSON.stringify(activeUser))
}

loginButton.addEventListener("click", logins)

//skapar error meddelandet, men ingen textContent. Detta sker i funktionen logins.
const wrongMessage = document.createElement("p")
messageDiv.appendChild(wrongMessage)

if (activeUser.length > 0) {
    inputUsername.value = activeUser[0].activeUserName
    welcome()
}

//funktion med if sats för att antingen få dig inloggad om input stämmer överens med loginInfo objektet,
//annars skriver den ut vad som är fel i wrongMessage elementet.
function logins () {
    const inputtedUsername = inputUsername.value
    const inputtedPassword = inputPassword.value

    const user = userStorages.find(u => u.userName === inputtedUsername)

    if (!user) {
        wrongMessage.style.display = "block"
        wrongMessage.textContent = ("Fel användarnamn! Försök igen!")
        cleanInput()
        return
    } else if (user.password != inputtedPassword) {
        wrongMessage.style.display = "block"
        wrongMessage.textContent = ("Fel lösenord! Försök igen!")
        cleanInput()
        return
    } else {
        activeUserObject = {activeUserName: inputtedUsername}
        //skriver över aktiv user 
        activeUser = [activeUserObject]
        saveActiveUser()
        welcome ()
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
        activeUser = []
        saveActiveUser()
       
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
    wrongMessage.style.display = "none"

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
    regPasswordInput.setAttribute("type", "password")

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

        const loginInfo = {
        userName: regUserNameInput.value,
        password: regPasswordInput.value,
     }
//pushar upp till arrayen
        userStorages.push(loginInfo)
        saveUsers()
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

//funktion för att rensa
function cleanInput () {
    inputUsername.value = ""
    inputPassword.value = ""
}


//TODO innan hosting och inlämning
//1. Försök att buggchecka så mycket som möjligt så allt står rätt till
//2. Om tid finns kika på knappen i reg formuläret. 
//3. Gör repot public och hosta sidan
//4. Gör ett dokument med info till inlämning! 