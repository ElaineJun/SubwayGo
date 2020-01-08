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
var shangdian_qch = (function (_super) {
    __extends(shangdian_qch, _super);
    function shangdian_qch() {
        return _super.call(this) || this;
    }
    shangdian_qch.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    shangdian_qch.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchcard, this);
        this.btn_subway.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchsubway, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enter_move, this);
        var card = [
            { image: "resource/art/imgBuffTime1.png", price: "价格：100" },
            { image: "resource/art/imgBuffTime2.png", price: "价格：100" },
            { image: "resource/art/imgBuffTime3.png", price: "价格：100" },
            { image: "resource/art/imgBuffProtect1.png", price: "价格：100" },
            { image: "resource/art/imgBuffProtect2.png", price: "价格：100" },
            { image: "resource/art/imgBuffProtect3.png", price: "价格：100" },
            { image: "resource/art/imgBuffHarvest.png", price: "价格：100" },
            { image: "resource/art/imgBuffHarvest2.png", price: "价格：100" },
            { image: "resource/art/imgBuffHarvest3.png", price: "价格：100" }
        ];
        var subway = [
            { image: "resource/art/train1Blue.png", price: "价格：100" },
            { image: "resource/art/train1Yellow.png", price: "价格：100" },
            { image: "resource/art/train2Red.png", price: "价格：100" },
            { image: "resource/art/train2Blue.png", price: "价格：100" },
        ];
        var EUIArr = new eui.ArrayCollection(card);
        this.list_card.dataProvider = EUIArr;
        var EUIArr1 = new eui.ArrayCollection(subway);
        this.list_subway.dataProvider = EUIArr1;
        this.btn_xiaoshi.visible = false;
        this.group_purchase.visible = false;
        this.list_card.visible = true;
        this.list_subway.visible = false;
        this.list_card.touchEnabled = true;
        this.list_subway.touchEnabled = false;
        this.list_card.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.list_touchcard, this);
        this.list_subway.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.list_touchsubway, this);
        this.btn_quxiao.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchquxiao, this);
        this.btn_cha.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchquxiao, this);
        this.btn_xiaoshi.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchxiaoshi, this);
    };
    shangdian_qch.prototype.onTouchcard = function (event) {
        this.list_card.visible = true;
        this.list_subway.visible = false;
        this.list_card.touchEnabled = true;
        this.list_subway.touchEnabled = false;
    };
    shangdian_qch.prototype.onTouchsubway = function (event) {
        this.list_card.visible = false;
        this.list_subway.visible = true;
        this.list_card.touchEnabled = false;
        this.list_subway.touchEnabled = true;
    };
    shangdian_qch.prototype.enter_move = function () {
        var tw_running = egret.Tween.get(this.btn_card);
        var tw_all = egret.Tween.get(this.btn_subway);
        tw_running.to({ x: 124, y: 0 }, 400);
        tw_all.to({ x: 240, y: 0 }, 400);
    };
    shangdian_qch.prototype.list_touchcard = function (e) {
        this.group_purchase.visible = true;
        this.btn_xiaoshi.visible = true;
    };
    shangdian_qch.prototype.list_touchsubway = function (e) {
        this.group_purchase.visible = true;
        this.btn_xiaoshi.visible = true;
    };
    shangdian_qch.prototype.onTouchquxiao = function (event) {
        this.group_purchase.visible = false;
        this.btn_xiaoshi.visible = false;
    };
    shangdian_qch.prototype.onTouchxiaoshi = function (event) {
        this.btn_xiaoshi.visible = false;
        this.group_purchase.visible = false;
    };
    return shangdian_qch;
}(eui.Component));
__reflect(shangdian_qch.prototype, "shangdian_qch", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=shangdian_qch.js.map