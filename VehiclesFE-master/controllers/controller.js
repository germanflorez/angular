var car;
//OBTENERT DATOS FORM1
var plate = document.getElementById("plate");
var color = document.getElementById("color");
var brand = document.getElementById("brand");
//VALIDACION
var validPlate, validBrand, validColor;
var validTextWheel, validTextDiameter;
var brandsOk = new Array();
var diametersOK = new Array();
// Crear Coche
function createCar() {
    car = new Car(plate.value, color.value, brand.value);
    var listCar = document.getElementById("listCar");
    listCar.innerHTML +=
        '<div class="row mt-3">' +
            '<div class="col-md-6 border"><span class="carAtribt">Marca</span><div class="carAtrib">' + car.brand + '</div></div>' +
            '<div class="col-md-6 border "><span class="carAtribt">Color</span><div class="carAtrib">' + car.color + '</div></div></div>' +
            '<div class="row border "><div class="col-md-2 bg-primary border"></div><div class="placa col-md-10">' + car.plate + '</div></div>';
}
//Crear Ruedas
function carWeels() {
    for (i = 1; i <= 4; i++) {
        var wheelBrand = String(document.getElementById("brandW" + i).value);
        var wheelDiameter = document.getElementById("diameterW" + i).value;
        var numwh = Number(wheelDiameter);
        console.log(wheelDiameter, wheelBrand);
        var wheel = new Wheel(numwh, wheelBrand);
        car.addWheel(wheel);
    }
    var res = document.getElementById("res");
    var xBrand = "";
    var xDiameter = 0;
    for (var i = 0; i < car.wheels.length; i++) {
        xBrand = car.wheels[i].brand;
        xDiameter = car.wheels[i].diameter;
        res.innerHTML +=
            '<div class="col-md-3 pt-5">' +
                '<img src="images/neumatico.png" width="50px"  height="50px">' +
                '<span class="wheel">RUEDA ' + [i + 1] + '</span>' +
                '<div class="wheelT">Marca</div>' +
                '<div class=""> ' + xBrand + '</div>' +
                '<div class="wheelT">Diametro</div>' +
                '<div class=""> ' + xDiameter + '</div></div>';
    }
    document.getElementById("wheels-form").reset();
}
//validaciones
//placa CAR
function validatePla() {
    var placa = plate.value.toUpperCase();
    var reg = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/;
    if (placa.match(reg)) {
        validPlate = true;
        document.getElementById("plate").className = " form-control form-control-lg mayusculas";
    }
    else {
        validPlate = false;
        document.getElementById("plate").className += " is-invalid";
    }
    return validPlate;
}
//marca y color CAR
function validateTex(id) {
    var text = document.getElementById(id);
    var textVa = text.value;
    if (id === "brand") {
        if (textVa.length <= 2 || textVa.length > 10) {
            document.getElementById(id).className += " is-invalid";
            validBrand = false;
        }
        else {
            validBrand = true;
            document.getElementById(id).className = " form-control form-control-lg mayusculas";
        }
        return validBrand;
    }
    else if (id === "color") {
        if (textVa.length <= 2 || textVa.length > 10) {
            document.getElementById(id).className += " is-invalid";
            validColor = false;
        }
        else {
            validColor = true;
            document.getElementById(id).className = " form-control form-control-lg mayusculas";
        }
        return validColor;
    }
}
// marca WHEEL
function validateTextWheels(id) {
    var textW = document.getElementById(id);
    var textWheel = textW.value;
    var posicion = -2;
    if (textWheel.length <= 2 || textWheel.length > 10) {
        posicion = brandsOk.indexOf(id);
        if (posicion !== -1) {
            brandsOk.splice(posicion, posicion);
        }
        validTextWheel = false;
        document.getElementById(id).className += " is-invalid";
    }
    else {
        validBrand = true;
        document.getElementById(id).className = " form-control form-control-lg mayusculas";
        if (brandsOk.indexOf(id) == -1) {
            brandsOk.push(id);
        }
        if (brandsOk.length == 4) {
            validTextWheel = true;
        }
    }
    return validTextWheel;
}
//diametro WHEEL
function validateDiam(id) {
    var diam = document.getElementById(id);
    var diameterW = Number(diam.value);
    var pD = -2;
    if (diameterW >= 0.4 && diameterW <= 2) {
        document.getElementById(id).className = " form-control form-control-lg mayusculas";
        if (diametersOK.indexOf(id) == -1) {
            diametersOK.push(id);
        }
    }
    else {
        pD = diametersOK.indexOf(id);
        document.getElementById(id).className += " is-invalid";
        validTextDiameter = false;
        if (pD !== -1) {
            diametersOK.splice(pD, 1);
        }
    }
    if (diametersOK.length == 4) {
        validTextDiameter = true;
    }
    return validTextDiameter;
}
//BOTON 1
function validateBtn() {
    var btn = document.getElementById("btnAddW");
    if (validPlate && validBrand && validColor) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}
//BOTON 2
function validateBtnCar() {
    var btn = document.getElementById("btnAddCar");
    if (validTextWheel && validTextDiameter) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}
//LIMPIAR FORMULARIO
function formClear() {
    var limpiar = document.getElementById("car-form").reset();
    plate.className = " form-control form-control-lg mayusculas";
    brand.className = " form-control form-control-lg mayusculas";
    color.className = " form-control form-control-lg mayusculas";
}
