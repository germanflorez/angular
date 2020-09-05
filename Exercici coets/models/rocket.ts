class Rocket{
    id:string;
    thrusters:thruster[]=new Array();    

    constructor(id:string){
        this.id=id;
    }

    addThruster(thruster:Thruster):void{
        this.thrusters.push(thruster);
    }
    
    speedUpRocket() {  
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].speedUpThruster();
        } 
    }
    breakRocket() {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].breakThruster();
        }
    }
    
    getCurrentTotalPower():number{
        let currentPower:number=0;
        for (var i = 0; i < this.thrusters.length; i++) {
            currentPower += this.thrusters[i].getPwCurrent();
        }
        return currentPower;
    }
   
}