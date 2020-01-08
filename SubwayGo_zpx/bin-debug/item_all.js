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
        _this.touch_flag = 0;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/Depot/item_all.exml';
        _this.shuxing_button.visible = false;
        _this.run_button.visible = false;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
        _this.train_image.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.ontouch, _this);
        return _this;
    }
    item_all.prototype.onComplete = function () {
        //this.train_image.source
        this.data;
    };
    // 当数据改变时，更新视图
    item_all.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
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
            //item_run.all_flag=0;
        }
        // var enter_x=this.enter_buton.x;
        // var enter_y=this.enter_buton.y;
        // var cancel_x=this.cancel_buton.x;
        // var cancel_y=this.cancel_buton.y;
    };
    // protected ontouchOther(){
    // 	console.log("777");
    // }
    item_all.prototype.EndMove = function () {
        this.run_button.visible = false;
        this.shuxing_button.visible = false;
    };
    return item_all;
}(eui.ItemRenderer));
__reflect(item_all.prototype, "item_all");
//# sourceMappingURL=item_all.js.map