var Rocket = /** @class */ (function () {
    function Rocket(id) {
        this.thrusters = new Array();
        this.id = id;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    Rocket.prototype.speedUpRocket = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].speedUpThruster();
        }
    };
    Rocket.prototype.breakRocket = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i].breakThruster();
        }
    };
    Rocket.prototype.getCurrentTotalPower = function () {
        var currentPower = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            currentPower += this.thrusters[i].getPwCurrent();
        }
        return currentPower;
    };
    return Rocket;
}());
