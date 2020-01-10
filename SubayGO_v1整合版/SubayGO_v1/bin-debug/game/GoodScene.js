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
var GoodScene = (function (_super) {
    __extends(GoodScene, _super);
    function GoodScene() {
        var _this = _super.call(this) || this;
        _this.price = 0;
        return _this;
    }
    GoodScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GoodScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchcard, this);
        this.btn_subway.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchsubway, this);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.return_button, this);
        var card = [
            { image: "resource/art/goods/imgBuffTime1.png", price: "价格：100" },
            { image: "resource/art/goods/imgBuffTime2.png", price: "价格：200" },
            { image: "resource/art/goods/imgBuffTime3.png", price: "价格：300" },
            { image: "resource/art/goods/imgBuffProtect1.png", price: "价格：400" },
            { image: "resource/art/goods/imgBuffProtect2.png", price: "价格：500" },
            { image: "resource/art/goods/imgBuffProtect3.png", price: "价格：600" },
            { image: "resource/art/goods/imgBuffHarvest.png", price: "价格：700" },
            { image: "resource/art/goods/imgBuffHarvest2.png", price: "价格：800" },
            { image: "resource/art/goods/imgBuffHarvest3.png", price: "价格：900" }
        ];
        var subway = [
            { image: "resource/art/goods/train1Blue.png", price: "价格：100" },
            { image: "resource/art/goods/train1Yellow.png", price: "价格：100" },
            { image: "resource/art/goods/train2Red.png", price: "价格：100" },
            { image: "resource/art/goods/train2Blue.png", price: "价格：100" },
        ];
        this.label_money.text = "10000";
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
        this.group_failure.visible = false;
        this.group_chenggong.visible = false;
        this.list_card.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.list_touchcard, this);
        this.list_subway.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.list_touchsubway, this);
        this.btn_quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchquxiao, this);
        this.btn_cha.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchquxiao, this);
        this.btn_xiaoshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchxiaoshi, this);
        this.btn_purchase.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchpurchase, this);
        this.btn_quxiao0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchquxiao, this);
        this.btn_purchase0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchquxiao, this);
    };
    GoodScene.prototype.onTouchcard = function (event) {
        this.list_card.visible = true;
        this.list_subway.visible = false;
        this.list_card.touchEnabled = true;
        this.list_subway.touchEnabled = false;
    };
    GoodScene.prototype.onTouchsubway = function (event) {
        this.list_card.visible = false;
        this.list_subway.visible = true;
        this.list_card.touchEnabled = false;
        this.list_subway.touchEnabled = true;
    };
    GoodScene.prototype.return_button = function (event) {
        SceneManager.toMainScene();
    };
    GoodScene.prototype.list_touchcard = function (e) {
        this.group_purchase.visible = true;
        this.btn_xiaoshi.visible = true;
        var i = this.list_card.selectedIndex;
        if (i == 0) {
            this.label_shuxin.text = "属性：加速";
            this.price = 100;
        }
        else if (i == 1) {
            this.label_shuxin.text = "属性：1";
            this.price = 200;
        }
        else if (i == 2) {
            this.label_shuxin.text = "属性：2";
            this.price = 300;
        }
        else if (i == 3) {
            this.label_shuxin.text = "属性：3";
            this.price = 400;
        }
        else if (i == 4) {
            this.label_shuxin.text = "属性：4";
            this.price = 500;
        }
        else if (i == 5) {
            this.label_shuxin.text = "属性：5";
            this.price = 600;
        }
        else if (i == 6) {
            this.label_shuxin.text = "属性：6";
            this.price = 700;
        }
        else if (i == 7) {
            this.label_shuxin.text = "属性：7";
            this.price = 800;
        }
        else if (i == 8) {
            this.label_shuxin.text = "属性：8";
            this.price = 900;
        }
    };
    GoodScene.prototype.list_touchsubway = function (e) {
        this.group_purchase.visible = true;
        this.btn_xiaoshi.visible = true;
        var j = this.list_subway.selectedIndex;
        if (j == 0) {
            this.label_shuxin.text = "一号地铁";
            this.price = 100;
        }
        else if (j == 1) {
            this.label_shuxin.text = "一号地铁";
            this.price = 100;
        }
        else if (j == 2) {
            this.label_shuxin.text = "一号地铁";
            this.price = 100;
        }
        else if (j == 3) {
            this.label_shuxin.text = "一号地铁";
            this.price = 100;
        }
    };
    GoodScene.prototype.onTouchpurchase = function (event) {
        var str = this.label_money.text.toString();
        var totalnum = Number(str);
        if (totalnum >= this.price) {
            totalnum = totalnum - this.price;
            var str2 = String(totalnum);
            this.label_money.text = str2;
            this.group_purchase.visible = false;
            this.btn_xiaoshi.visible = false;
            this.group_chenggong.visible = true;
        }
        else {
            this.group_failure.visible = true;
            this.group_purchase.visible = false;
        }
    };
    GoodScene.prototype.onTouchquxiao = function (event) {
        this.group_purchase.visible = false;
        this.btn_xiaoshi.visible = false;
        this.group_failure.visible = false;
        this.group_chenggong.visible = false;
    };
    GoodScene.prototype.onTouchxiaoshi = function (event) {
        this.btn_xiaoshi.visible = false;
        this.group_purchase.visible = false;
        this.group_failure.visible = false;
        this.group_chenggong.visible = false;
    };
    return GoodScene;
}(eui.Component));
__reflect(GoodScene.prototype, "GoodScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GoodScene.js.map