//Rocket 
var rocket;
var rockets = new Array();
// NUM THRUSTERS
var numThRocket = 0;
// POTENCIA ACTUAL ROCKET
var pwCurrentR = 0;
// CONTADOR RCCKETS
var cont = 0;
var validPowerT;
function addThs() {
    numThRocket = Number(document.getElementById("numThRocket").value);
    var setThRocket = document.getElementById("setThRocket");
    setThRocket.innerHTML = '';
    for (var i = 1; i <= numThRocket; i++) {
        setThRocket.innerHTML +=
            '<div class="form-group col-md-3">' +
                '<label>Thruster ' + [i] + '</label>' +
                '<input type="number" class="form-control" id="th' + [i] + '" placeholder="Power" min="0" max="100" step="10">' +
                '<div class="invalid-feedback">Thruster power must be between 10 and 100</div></div>';
    }
}
function validate() {
    var idRocket = document.getElementById("idRocket");
    var idRocketVal = (idRocket.value).length;
    var numThId = document.getElementById("numThRocket");
    var numThIdVal = Number(numThId.value);
    var validIdRo = false, validNumTh = false, validPwTh = false;
    validPowerT = new Array();
    if (idRocketVal < 8 || idRocketVal > 8) {
        idRocket.className += " is-invalid";
        validIdRo = false;
    }
    else {
        idRocket.className = "form-control form-control-lg";
        validIdRo = true;
    }
    if (numThIdVal === 0) {
        numThId.className += " is-invalid";
        validNumTh = false;
    }
    else {
        numThId.className = "form-control form-control-lg";
        validNumTh = true;
    }
    for (var i = 1; i <= numThRocket; i++) {
        var pwMaxThId = document.getElementById("th" + [i]);
        var pwMaxThIdVal = Number(pwMaxThId.value);
        if (pwMaxThIdVal <= 0 || pwMaxThIdVal > 100) {
            pwMaxThId.className += " is-invalid";
        }
        else {
            pwMaxThId.className = "form-control";
            validPowerT.push(1);
        }
    }
    if (validPowerT.length == numThRocket) {
        validPwTh = true;
    }
    else {
        validPwTh = false;
    }
    if (validIdRo && validNumTh && validPwTh) {
        addRocket();
        alert();
        formClear();
    }
}
function alert() {
    if (rockets.length == 1) {
        $(document).ready(function () {
            $('#addRocket').modal('show');
        });
    }
}
function addRocket() {
    cont += 1;
    var idRocket = (document.getElementById("idRocket").value).toUpperCase();
    rocket = new Rocket(idRocket);
    var nameTh = "";
    var pwMaxTh = 0, pwCurrentTh = 0;
    var thruster;
    for (var i = 1; i < numThRocket + 1; i++) {
        nameTh = "Thruster" + [i];
        pwMaxTh = Number(document.getElementById("th" + [i]).value);
        thruster = new Thruster(pwMaxTh, pwCurrentTh, nameTh);
        rocket.addThruster(thruster);
    }
    rockets.push(rocket);
    showRockets();
    if (cont === 2) {
        var form = document.getElementById("formCustoms");
        form.className = "d-none";
        var roDetails = document.getElementById("rocketDetails");
        roDetails.className = "container text-light fixed-bottom mb-5";
    }
    console.log(rockets);
}
function formClear() {
    var form = document.getElementById("formRocket");
    form.reset();
    var setThRocket = document.getElementById("setThRocket");
    setThRocket.innerHTML = '';
}
function speedUpR(id) {
    var indexR = 0;
    if (id == "up0") {
        indexR = 0;
        var aniRo0 = document.getElementById("aniRo0");
        aniRo0.src = "img/rocket1-llamas.png";
        aniRo0.className = "movimiento mov";
    }
    else if (id == "up1") {
        indexR = 1;
        var aniRo1 = document.getElementById("aniRo1");
        aniRo1.src = "img/rocket2-llamas.png";
        aniRo1.className = "movimiento mov mt-5 pt-5 ";
    }
    var aniCielo = document.getElementById("cielo");
    aniCielo.className = "cielo movcielo";
    var currentRocket = rockets[indexR];
    currentRocket.speedUpRocket();
    getCurretPwrRocket(currentRocket, id);
}
function breakR(id) {
    var indexL = 0;
    if (id == "bk0") {
        indexL = 0;
    }
    else if (id == "bk1") {
        indexL = 1;
    }
    var currentRocketBreak = rockets[indexL];
    currentRocketBreak.breakRocket();
    getCurretPwrRocket(currentRocketBreak, id);
    totalCurrentPower();
}
function getCurretPwrRocket(currentRocket, id) {
    var result = 0;
    var elementPrw = "";
    if (id == "up0" || id == "bk0") {
        elementPrw = "pwR0";
    }
    else if (id == "up1" || id == "bk1") {
        elementPrw = "pwR1";
    }
    for (var i = 0; i < currentRocket.thrusters.length; i++) {
        pwCurrentR = currentRocket.thrusters[i].getPwCurrent();
        result += pwCurrentR;
        var pwRocu = document.getElementById(elementPrw);
        pwRocu.innerHTML = String(result);
    }
}
function totalCurrentPower() {
    var total1 = 0;
    var total2 = 0;
    for (var i = 0; i < rockets.length; i++) {
        if (i == 0) {
            total1 += rockets[i].getCurrentTotalPower();
        }
        if (i == 1) {
            total2 += rockets[i].getCurrentTotalPower();
        }
    }
    if (total1 === 0) {
        var aniRo0 = document.getElementById("aniRo0");
        aniRo0.src = "img/rocket1.png";
        aniRo0.className = "movimiento mov2";
    }
    if (total2 === 0) {
        var aniRo1 = document.getElementById("aniRo1");
        aniRo1.src = "img/rocket2.png";
        aniRo1.className = "movimiento mov2 mt-5 pt-5";
    }
}
function showRockets() {
    var idrocket = "";
    var numTh = 0;
    var pw;
    for (var i = 0; i < rockets.length; i++) {
        idrocket = rockets[i].id;
        var idrocketHtml = document.getElementById("idrocket" + i);
        idrocketHtml.innerHTML = idrocket;
        numTh = rockets[i].thrusters.length;
        var numThHtml = document.getElementById("numTh" + i);
        numThHtml.innerHTML = String(numTh);
    }
}
