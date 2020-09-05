var Thruster = /** @class */ (function () {
    function Thruster(pwMaxTh, pwCurrentTh, nameTh) {
        this.pwCurrentTh = 0;
        this.nameTh = nameTh;
        this.pwMaxTh = pwMaxTh;
        this.pwCurrentTh = pwCurrentTh;
    }
    Thruster.prototype.speedUpThruster = function () {
        if (this.pwCurrentTh < this.pwMaxTh) {
            this.pwCurrentTh = this.pwCurrentTh + 10;
        }
    };
    Thruster.prototype.breakThruster = function () {
        if (this.pwCurrentTh > 0) {
            this.pwCurrentTh = this.pwCurrentTh - 10;
        }
    };
    Thruster.prototype.getPwCurrent = function () {
        return this.pwCurrentTh;
    };
    return Thruster;
}());
