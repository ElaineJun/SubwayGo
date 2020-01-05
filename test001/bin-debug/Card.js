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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super.call(this) || this;
        _this.drawCard();
        return _this;
    }
    Card.prototype.drawCard = function () {
        this.graphics.beginFill(0x00ff00);
        this.graphics.drawRect(200, 200, 80, 80);
        this.graphics.endFill();
        var button = new eui.Button();
        button.label = "Click!";
        button.x = 300;
        button.x = 600;
        button.width = 50;
        button.height = 50;
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
    };
    return Card;
}(egret.Sprite));
__reflect(Card.prototype, "Card");
//# sourceMappingURL=Card.js.map