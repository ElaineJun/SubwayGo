var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var insubway = (function (_super) {
    __extends(insubway, _super);
    function insubway() {
        return _super.call(this) || this;
    }
    insubway.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    insubway.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.mbtnapple.visible = false;
        this.mbtnbanana.visible = false;
        this.mbtnyilaguan.visible = false;
        this.mbtnzhi.visible = false;
        this.timer = new egret.Timer(1000, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandlers, this);
        this.timer.start();
        this.mbtnreturns.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.return_buttons, this);
        this.mbtnapple.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.apple_event, this);
        this.mbtnbanana.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.banana_event, this);
        this.mbtnzhi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.zhi_event, this);
        this.mbtnyilaguan.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.yilaguan_event, this);
    };
    insubway.prototype.random_num = function (min, max) {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    };
    insubway.prototype.timerHandlers = function () {
        this.random_number1 = this.random_num(0, 100);
        this.random_number2 = this.random_num(0, 440);
        if (this.random_number1 < 10 && this.random_number1 > 0 && (this.mbtnapple.visible == false)) {
            this.mbtnapple.visible = true;
        }
        else if (this.random_number1 < 20 && this.random_number1 >= 10 && (this.mbtnbanana.visible == false)) {
            this.mbtnbanana.visible = true;
        }
        else if (this.random_number1 < 30 && this.random_number1 >= 20 && (this.mbtnzhi.visible == false)) {
            this.mbtnzhi.visible = true;
        }
        else if (this.random_number1 < 40 && this.random_number1 >= 30 && (this.mbtnyilaguan.visible == false)) {
            this.mbtnyilaguan.visible = true;
        }
    };
    insubway.prototype.apple_event = function (event) {
        this.removeChild(this.mbtnapple);
        var str = this.total_energynums.text.toString();
        var totalnum = Number(str);
        totalnum += 20;
        var str2 = String(totalnum);
        this.total_energynums.text = str2;
        //this.timer.start();
    };
    insubway.prototype.banana_event = function (event) {
        this.mbtnbanana.parent.removeChild(this.mbtnbanana);
        var str = this.total_energynums.text.toString();
        var totalnum = Number(str);
        totalnum += 20;
        var str2 = String(totalnum);
        this.total_energynums.text = str2;
        //this.timer.start();
    };
    insubway.prototype.zhi_event = function (event) {
        this.removeChild(this.mbtnzhi);
        var str = this.total_energynums.text.toString();
        var totalnum = Number(str);
        totalnum += 20;
        var str2 = String(totalnum);
        this.total_energynums.text = str2;
        //this.timer.start();
    };
    insubway.prototype.yilaguan_event = function (event) {
        this.mbtnyilaguan.parent.removeChild(this.mbtnyilaguan);
        var str = this.total_energynums.text.toString();
        var totalnum = Number(str);
        totalnum += 20;
        var str2 = String(totalnum);
        this.total_energynums.text = str2;
        //this.timer.start();
    };
    insubway.prototype.return_buttons = function (event) {
        if (this.visible == true) {
            this.visible = false;
        }
    };
    return insubway;
}(eui.Component));
__reflect(insubway.prototype, "insubway", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=insubway.js.map