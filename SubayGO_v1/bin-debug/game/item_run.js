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
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/skins/skins_item/list_item.exml';
        _this.enter_buton.visible = false;
        _this.cancel_button.visible = false;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
        _this.train_image.addEventListener(egret.TouchEvent.TOUCH_END, _this.ontouch, _this);
        return _this;
    }
    item_run.prototype.onComplete = function () {
    };
    // 当数据改变时，更新视图
    item_run.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
        console.log("777");
    };
    item_run.prototype.ontouch = function () {
        // isSeleted 是我们提供数据的某个字段
        //console.log("777");
        if (this.touch_flag == 0) {
            this.enter_buton.visible = true;
            this.cancel_button.visible = true;
            var tw_enter = egret.Tween.get(this.enter_buton);
            var tw_cancel = egret.Tween.get(this.cancel_button);
            tw_enter.to({ x: 35, y: 6 }, 150);
            tw_cancel.to({ x: 35, y: 51 }, 150);
            this.touch_flag = 1;
            //item_run.all_flag=1;
        }
        else if (this.touch_flag == 1) {
            var tw_enter = egret.Tween.get(this.enter_buton);
            var tw_cancel = egret.Tween.get(this.cancel_button);
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
    item_run.prototype.EndMove = function () {
        this.enter_buton.visible = false;
        this.cancel_button.visible = false;
    };
    item_run.all_flag = 0;
    return item_run;
}(eui.ItemRenderer));
__reflect(item_run.prototype, "item_run");
//# sourceMappingURL=item_run.js.map