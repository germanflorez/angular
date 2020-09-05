
class Thruster{
    public nameTh:string;
    public pwMaxTh:number;
    public pwCurrentTh:number = 0;
     

    constructor(pwMaxTh:number,pwCurrentTh:number,nameTh:string){
        this.nameTh = nameTh;
        this.pwMaxTh = pwMaxTh;
        this.pwCurrentTh = pwCurrentTh;
       
    }

    speedUpThruster(){
        if(this.pwCurrentTh < this.pwMaxTh){
            this.pwCurrentTh  = this.pwCurrentTh+10;
        }
    }
    breakThruster(){
        if(this.pwCurrentTh > 0){
            this.pwCurrentTh  = this.pwCurrentTh-10;
        }
    }

    getPwCurrent():number{
        return this.pwCurrentTh;
    }

}