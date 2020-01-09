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
var item_all = (function (_super) {
    __extends(item_all, _super);
    function item_all() {
        var _this = _super.call(this) || this;
        _this.state_flag = 3;
        _this.touch_flag = 0;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/Depot/item_all.exml';
        _this.shuxing_button.visible = false;
        _this.run_button.visible = false;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
        _this.train_image.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.ontouch, _this);
        _this.run_button.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.to_run, _this);
        return _this;
    }
    item_all.prototype.onComplete = function () {
        //this.train_image.source
        this.data;
    };
    // 当数据改变时，更新视图
    item_all.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
        if (this.state_flag == 3) {
            this.state_flag = this.data.state_flag;
            if (this.state_flag == 0) {
                this.state_image.source = "resource/assets/depot_picture/stateGray.png";
            }
            else if (this.state_flag == 1) {
                this.state_image.source = "resource/assets/depot_picture/stateGreen.png";
            }
        }
    };
    item_all.prototype.ontouch = function () {
        // isSeleted 是我们提供数据的某个字段
        //console.log("777");
        if (this.touch_flag == 0) {
            this.run_button.visible = true;
            this.shuxing_button.visible = true;
            var tw_enter = egret.Tween.get(this.run_button);
            var tw_cancel = egret.Tween.get(this.shuxing_button);
            tw_enter.to({ x: 35, y: 6 }, 150);
            tw_cancel.to({ x: 35, y: 51 }, 150);
            this.touch_flag = 1;
            //item_run.all_flag=1;
        }
        else if (this.touch_flag == 1) {
            var tw_enter = egret.Tween.get(this.run_button);
            var tw_cancel = egret.Tween.get(this.shuxing_button);
            tw_enter.to({ x: 90, y: 27.17 }, 200).call(this.EndMove, this);
            tw_cancel.to({ x: 90, y: 27.17 }, 200);
            this.touch_flag = 0;
        }
    };
    item_all.prototype.EndMove = function () {
        this.run_button.visible = false;
        this.shuxing_button.visible = false;
    };
    item_all.prototype.to_run = function () {
        this.state_flag = 1;
        this.state_image.source = "resource/assets/depot_picture/stateGreen.png";
    };
    return item_all;
}(eui.ItemRenderer));
__reflect(item_all.prototype, "item_all");
//# sourceMappingURL=item_all.js.map