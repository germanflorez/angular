 
let car:Car; 
let wheel1: Wheel, wheel2: Wheel, wheel3: Wheel, wheel4: Wheel;
//VALIDACION
let validPlate: boolean, validBrand: boolean, validColor: boolean;
let validbrandW1:boolean, validbrandW2:boolean,  validbrandW3:boolean,  validbrandW4:boolean;
let validDiamW1:boolean, validDiamW2:boolean, validDiamW3:boolean, validDiamW4:boolean;

let plate:HTMLInputElement=<HTMLInputElement>document.getElementById("plate");
let color:HTMLInputElement=<HTMLInputElement>document.getElementById("color");
let brand:HTMLInputElement=<HTMLInputElement>document.getElementById("brand");

let bW1: HTMLInputElement = <HTMLInputElement>document.getElementById("brandW1");
let dW1: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterW1");
let bW2: HTMLInputElement = <HTMLInputElement>document.getElementById("brandW2");
let dW2: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterW2");
let bW3: HTMLInputElement = <HTMLInputElement>document.getElementById("brandW3");
let dW3: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterW3");
let bW4: HTMLInputElement = <HTMLInputElement>document.getElementById("brandW4");
let dW4: HTMLInputElement = <HTMLInputElement>document.getElementById("diameterW4");


function createCar(){
   car= new Car(plate.value,color.value,brand.value);
   let listCar = document.getElementById("listCar");
   listCar.innerHTML=
   '<div class="row ">'+
   '<div class="col-md-6 border"><span class="carAtribt">Marca :</span><div class="carAtrib">'+ car.brand +'</div></div>'+
   '<div class="col-md-6 border text-right"><span class="carAtribt">Color :</span><div class="carAtrib">'+ car.color +'</div></div></div>'+
   '<div class="row border "><div class="col-md-2 bg-primary border"></div><div class="placa col-md-10">' + car.plate + '</div></div>';
     
}
function carWeels() {
   let diameterW1: number = Number(dW1.value);
   let diameterW2: number = Number(dW2.value);
   let diameterW3: number = Number(dW3.value);
   let diameterW4: number = Number(dW4.value)
   let brandW1: string = bW1.value.toUpperCase();
   let brandW2: string = bW2.value.toUpperCase();
   let brandW3: string = bW3.value.toUpperCase();
   let brandW4: string = bW4.value.toUpperCase();
   wheel1 = new Wheel(diameterW1, brandW1 );
   wheel2 = new Wheel(diameterW2, brandW2 );
   wheel3 = new Wheel(diameterW3, brandW3 );
   wheel4 = new Wheel(diameterW4, brandW4 );
   car.addWheel(wheel1);
   car.addWheel(wheel2);
   car.addWheel(wheel3);
   car.addWheel(wheel4);  
   let res: HTMLInputElement = <HTMLInputElement>document.getElementById("res");
   let xBrand:string="";
   let xDiameter:Number=0;
   for(var i=0; i< car.wheels.length;i++)
   {
      xBrand=car.wheels[i].brand;
      xDiameter=car.wheels[i].diameter;    
      res.innerHTML += 
      '<div class="col-md-3">'+
      '<span class="carAtribt">RUEDA '+[i+1]+'</span>'+
      '<div class="weel">Marca : '+xBrand+'</div>'+
      '<div class="weel">Diametro : '+ xDiameter +'</div></div>';
   }
   let limpiar : HTMLFormElement = <HTMLFormElement> document.getElementById("wheels-form").reset();
}

//validaciones
function validatePla() {
   let placa :string = plate.value.toUpperCase(); 
   var reg = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/;
   if (placa.match(reg)) {
       validPlate = true;
       document.getElementById("plate").className = " form-control form-control-lg mayusculas"
   } else {
       validPlate = false;
       document.getElementById("plate").className += " is-invalid";
   }
   return validPlate;
}

function validateTex(id:any) {
   let text:HTMLInputElement=<HTMLInputElement>document.getElementById(id);
   let textVa:string =text.value;
   if(id==="brand"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
          validBrand = false;
      } else {
          validBrand = true;
          document.getElementById(id).className = " form-control form-control-lg mayusculas";
      }
      return validBrand;
   }else if(id==="color"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
          validColor = false;
      } else {
          validColor = true;
          document.getElementById(id).className = " form-control form-control-lg mayusculas";
      }
      return validColor;

   }else if(id==="brandW1"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
         validbrandW1 = false;
      } else {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validbrandW1 = true;
      }
      return validbrandW1;

   }else if(id==="brandW2"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
         validbrandW2 = false;
      } else {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validbrandW2 = true;
      }
      return validbrandW2;

   }else if(id==="brandW3"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
         validbrandW3 = false;  
      } else {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validbrandW3 = true; 
      }
      return validbrandW3;

   }else if(id==="brandW4"){
      if (textVa.length <= 2 || textVa.length > 10) {
         document.getElementById(id).className += " is-invalid";
         validbrandW4 = false; 
      } else {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validbrandW4 = true;    
      }
      return validbrandW4;
   }
}
//validacion boton crear llantas
function validateBtn(){
   let btn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnAddW");
   if(validPlate && validBrand && validColor){
      btn.disabled = false;
   }else{
      btn.disabled = true; 
   }  
}
function validateDiam(id:any){
   let diam :HTMLInputElement=<HTMLInputElement>document.getElementById(id);
   let diameterW: number = Number(diam.value);

   if(id==="diameterW1"){
      if ((diameterW >= 0.4) && (diameterW <= 2)) {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validDiamW1= true;
     } else {
         document.getElementById(id).className += " is-invalid";
         validDiamW1 = false;
     }
     return validDiamW1;
     
   }else if(id==="diameterW2"){
      if ((diameterW >= 0.4) && (diameterW <= 2)) {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validDiamW2= true;
     } else {
         document.getElementById(id).className += " is-invalid";
         validDiamW2 = false;
     }
     return validDiamW2;

   }else if(id==="diameterW3"){
      if ((diameterW >= 0.4) && (diameterW <= 2)) {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validDiamW3= true;
     } else {
         document.getElementById(id).className += " is-invalid";
         validDiamW3 = false;
     }
     return validDiamW3;

   }else if(id==="diameterW4"){
      if ((diameterW >= 0.4) && (diameterW <= 2)) {
         document.getElementById(id).className = " form-control form-control-lg mayusculas";
         validDiamW4= true;
     } else {
         document.getElementById(id).className += " is-invalid";
         validDiamW4 = false;
     }
     return validDiamW4;
   }  
}
function validateBtnCar(){
   let btn:HTMLButtonElement = <HTMLButtonElement> document.getElementById("btnAddCar");
   if(validbrandW1 && validbrandW2 && validbrandW3 && validbrandW4 &&validDiamW1 && validDiamW2 && validDiamW3  && validDiamW4){
      btn.disabled = false;
   }else{
      btn.disabled = true; 
   }  
}
function formClear(){
   let limpiar : HTMLFormElement = <HTMLFormElement> document.getElementById("car-form").reset();
   document.getElementById("plate").className = " form-control form-control-lg mayusculas"
   document.getElementById("brand").className = " form-control form-control-lg mayusculas"
   document.getElementById("color").className = " form-control form-control-lg mayusculas"

}