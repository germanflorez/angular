//Rocket 
let rocket: Rocket;
let rockets: Rocket[] = new Array();
// NUM THRUSTERS
let numThRocket: number = 0;
// POTENCIA ACTUAL ROCKET
let pwCurrentR: number = 0;
// CONTADOR RCCKETS
let cont: number = 0;
let validPowerT: Number[];

function addThs() {
    numThRocket = Number((<HTMLInputElement>document.getElementById("numThRocket")).value);
    let setThRocket = <HTMLDivElement>document.getElementById("setThRocket");
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
    let idRocket = <HTMLInputElement>document.getElementById("idRocket");
    let idRocketVal = (idRocket.value).length;
    let numThId = <HTMLInputElement>document.getElementById("numThRocket")
    let numThIdVal = Number(numThId.value);
    let validIdRo: boolean = false, validNumTh: boolean = false, validPwTh: boolean = false;
    validPowerT = new Array();
    if (idRocketVal < 8 || idRocketVal > 8) {
        idRocket.className += " is-invalid";
        validIdRo = false;
    } else {
        idRocket.className = "form-control form-control-lg";
        validIdRo = true;
    }
    if (numThIdVal === 0) {
        numThId.className += " is-invalid";
        validNumTh = false;
    } else {
        numThId.className = "form-control form-control-lg";
        validNumTh = true;
    }

    for (var i = 1; i <= numThRocket; i++) {

        let pwMaxThId = <HTMLInputElement>document.getElementById("th" + [i]);
        let pwMaxThIdVal = Number(pwMaxThId.value);

        if (pwMaxThIdVal <= 0 || pwMaxThIdVal > 100) {
            pwMaxThId.className += " is-invalid";
        } else {
            pwMaxThId.className = "form-control";
            validPowerT.push(1);
        }
    }
    if (validPowerT.length == numThRocket) {
        validPwTh = true;
    } else {
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
            $('#addRocket').modal('show')
        });
    }
}

function addRocket() {
    cont += 1;
    let idRocket = ((<HTMLInputElement>document.getElementById("idRocket")).value).toUpperCase();
    rocket = new Rocket(idRocket);
    let nameTh: string = "";
    let pwMaxTh: number = 0, pwCurrentTh: number = 0;
    let thruster: Thruster;
    for (var i = 1; i < numThRocket + 1; i++) {
        nameTh = "Thruster" + [i];
        pwMaxTh = Number((<HTMLInputElement>document.getElementById("th" + [i])).value);
        thruster = new Thruster(pwMaxTh, pwCurrentTh, nameTh);
        rocket.addThruster(thruster);
    }
    rockets.push(rocket);
    showRockets();
    if (cont === 2) {
        let form = <HTMLDivElement>document.getElementById("formCustoms");
        form.className = "d-none";
        let roDetails = <HTMLDivElement>document.getElementById("rocketDetails");
        roDetails.className = "container text-light fixed-bottom mb-5";
    }
    console.log(rockets);
}
function formClear() {
    let form = <HTMLFormElement>document.getElementById("formRocket");
    form.reset();
    let setThRocket = <HTMLDivElement>document.getElementById("setThRocket");
    setThRocket.innerHTML = '';
}

function speedUpR(id: string) {
    let indexR: number = 0;
    if (id == "up0") {
        indexR = 0;
        let aniRo0 = <HTMLImageElement>document.getElementById("aniRo0");
        aniRo0.src="img/rocket1-llamas.png"
        aniRo0.className = "movimiento mov";
        
    }else if(id == "up1"){
        indexR = 1;
        let aniRo1 = <HTMLImageElement>document.getElementById("aniRo1");
        aniRo1.src="img/rocket2-llamas.png"
        aniRo1.className = "movimiento mov mt-5 pt-5 ";
        
    }
    let aniCielo = <HTMLElement>document.getElementById("cielo");
    aniCielo.className = "cielo movcielo"
    let currentRocket: Rocket = rockets[indexR];
    currentRocket.speedUpRocket();
    getCurretPwrRocket(currentRocket, id);
   
}

function breakR(id: string) {
    let indexL: number = 0;
    if (id == "bk0") {
        indexL = 0;
    }else if(id == "bk1"){
        indexL = 1;
    }
    let currentRocketBreak: Rocket = rockets[indexL];
    currentRocketBreak.breakRocket();

    getCurretPwrRocket(currentRocketBreak, id);
    totalCurrentPower();
}

function getCurretPwrRocket(currentRocket: Rocket, id: string) {
    let result: number = 0; 
    let elementPrw: string = "";
    if (id == "up0" || id == "bk0") {
        elementPrw = "pwR0";
    } else if (id == "up1" || id == "bk1") {
        elementPrw = "pwR1";
    }
    for (var i = 0; i < currentRocket.thrusters.length; i++) {
        pwCurrentR = currentRocket.thrusters[i].getPwCurrent();
        result += pwCurrentR;
        let pwRocu = <HTMLElement>document.getElementById(elementPrw);
        pwRocu.innerHTML = String(result);
    }   
}

function totalCurrentPower(){  
    let total1:number=0; 
    let total2:number=0; 
    for (var i = 0; i < rockets.length; i++) {
       if(i == 0){
        total1+=rockets[i].getCurrentTotalPower();
       }
       if(i==1){
        total2+=rockets[i].getCurrentTotalPower();
       }       
    } 
    if(total1 === 0){
    let aniRo0 = <HTMLImageElement>document.getElementById("aniRo0");
    aniRo0.src="img/rocket1.png"
    aniRo0.className = "movimiento mov2";
    }   

    if(total2 === 0){
    let aniRo1 = <HTMLImageElement>document.getElementById("aniRo1");
    aniRo1.src="img/rocket2.png"
    aniRo1.className = "movimiento mov2 mt-5 pt-5";  
    }

}

function showRockets() {
    let idrocket: string = "";
    let numTh: number = 0;
    let pw :number;
    for (var i = 0; i < rockets.length; i++) {
        idrocket = rockets[i].id;
        let idrocketHtml = <HTMLElement>document.getElementById("idrocket" + i);
        idrocketHtml.innerHTML = idrocket;
        numTh = rockets[i].thrusters.length;
        let numThHtml = <HTMLElement>document.getElementById("numTh" + i);
        numThHtml.innerHTML = String(numTh);
    }   
}
