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
var item_run = (function (_super) {
    __extends(item_run, _super);
    function item_run() {
        var _this = _super.call(this) || this;
        _this.touch_flag = 0;
        _this.isNull = 4;
        _this.detail_bug = 0;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/skins/skins_item/list_item.exml';
        _this.enter_buton.visible = false;
        _this.cancel_button.visible = false;
        //this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
        _this.train_image.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.ontouch, _this);
        _this.train_Null.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.ontouch_Null, _this);
        _this.cancel_button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onTrain_cancel, _this);
        return _this;
    }
    item_run.prototype.onComplete = function () {
        //this.train_image.source
    };
    // 当数据改变时，更新视图
    item_run.prototype.dataChanged = function () {
        //if(this.detail_bug==0)	{
        this.my_change();
        // 	this.detail_bug=1;
        // }
    };
    item_run.prototype.my_change = function () {
        this.isNull = this.data.isNull;
        if (this.isNull == 1) {
            this.train_Null.visible = true;
            this.train_image.visible = false;
            this.name_label.visible = false;
            this.money_label.visible = false;
        }
        else if (this.isNull == 0) {
            this.train_Null.visible = false;
        }
        else if (this.isNull == 2) {
            this.train_image.visible = false;
            this.name_label.visible = false;
            this.money_label.visible = false;
            this.train_Null.source = "resource/art/depot/trainFriends.png";
        }
    };
    item_run.prototype.ontouch = function () {
        if (this.touch_flag == 0 && item_run.all_flag == 0) {
            this.enter_buton.visible = true;
            this.cancel_button.visible = true;
            var tw_enter = egret.Tween.get(this.enter_buton);
            var tw_cancel = egret.Tween.get(this.cancel_button);
            tw_enter.to({ x: 35, y: 6 }, 150);
            tw_cancel.to({ x: 35, y: 51 }, 150);
            this.touch_flag = 1;
            item_run.all_flag = 1;
        }
        else if (this.touch_flag == 1 && item_run.all_flag == 1) {
            var tw_enter = egret.Tween.get(this.enter_buton);
            var tw_cancel = egret.Tween.get(this.cancel_button);
            tw_enter.to({ x: 90, y: 27.17 }, 200).call(this.EndMove, this);
            tw_cancel.to({ x: 90, y: 27.17 }, 200);
            this.touch_flag = 0;
            item_run.all_flag = 0;
        }
    };
    item_run.prototype.ontouch_Null = function () {
    };
    item_run.prototype.EndMove = function () {
        this.enter_buton.visible = false;
        this.cancel_button.visible = false;
    };
    item_run.prototype.onTrain_cancel = function (event) {
        this.isNull = 1;
        this.data.isNull = 1;
        item_run.all_flag = 0;
        this.my_change();
        this.enter_buton.x = 85;
        this.enter_buton.y = 27.17;
        this.enter_buton.visible = false;
        this.cancel_button.x = 85;
        this.cancel_button.y = 27.17;
        this.cancel_button.visible = false;
        console.log("111");
    };
    item_run.all_flag = 0;
    return item_run;
}(eui.ItemRenderer));
__reflect(item_run.prototype, "item_run");
//# sourceMappingURL=item_run.js.map