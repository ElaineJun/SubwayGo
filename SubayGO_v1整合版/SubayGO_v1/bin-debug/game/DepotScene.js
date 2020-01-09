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
var DepotScene = (function (_super) {
    __extends(DepotScene, _super);
    function DepotScene() {
        var _this = _super.call(this) || this;
        _this.dataArr = [
            { image: "resource/art/depot/train0Blue.png", money: "运营量：800", name: "二号线", isNull: 0 },
            { image: "resource/art/depot/train2Red.png", money: "运营量：700", name: "一号线", isNull: 0 },
            { image: "resource/art/depot/train1Yellow.png", money: "运营量：600", name: "通鹏号", isNull: 1 },
            { image: "resource/art/depot/train2Blue.png", money: "运营量：400", name: "扬眉线", isNull: 2 },
            { image: "resource/art/depot/train1Blue.png", money: "运营量：300", name: "四号线", isNull: 2 },
        ];
        _this.dataArr_all = [
            { image: "resource/art/depot/train1Blue.png", state: "resource/art/depot/stateGreen.png", name: "二号线", state_flag: 1 },
            { image: "resource/art/depot/train2Red.png", state: "resource/art/depot/stateGray.png", name: "一号线", state_flag: 0 },
            { image: "resource/art/depot/train1Yellow.png", state: "resource/art/depot/stateGray.png", name: "通鹏号", state_flag: 0 },
            { image: "resource/art/depot/train0Blue.png", state: "resource/art/depot/stateGreen.png", name: "七号线", state_flag: 1 },
            { image: "resource/art/depot/train2Blue.png", state: "resource/art/depot/stateGreen.png", name: "扬眉线", state_flag: 0 },
            { image: "resource/art/depot/train4Blue.png", state: "resource/art/depot/stateGray.png", name: "四号线", state_flag: 0 },
        ];
        // private enter_move(){
        // 	var tw_running=egret.Tween.get(this.Running);
        // 	var tw_all=egret.Tween.get(this.All);
        // 	tw_running.to({x:106,y:100},400);
        // 	tw_all.to({x:260.39,y:100},400);
        // }
        _this.ii = 0;
        return _this;
    }
    DepotScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DepotScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Running.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch_running, this);
        this.All.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch_all, this);
        this.button_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.return_button, this);
        this.tip_confim.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTip_confirm, this);
        this.tip_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTip_cancel, this);
        //this.addEventListener(egret.Event.ENTER_FRAME,this.enter_move,this);
        this.list_depot_all.visible = false;
        var EUIArr_all = new eui.ArrayCollection(this.dataArr_all);
        this.list_depot_all.dataProvider = EUIArr_all;
        this.list_depot_all.touchEnabled = true;
        this.list_depot_all.itemRenderer = item_all;
        var EUIArr = new eui.ArrayCollection(this.dataArr);
        this.list_depot_run.touchEnabled = true;
        this.list_depot_run.dataProvider = EUIArr;
        this.list_depot_run.itemRenderer = item_run;
        this.list_depot_run.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.list_touch, this);
        this.Tip.visible = false;
    };
    DepotScene.prototype.onTouch_running = function (event) {
        if (this.list_depot_run.visible == false && this.list_depot_all.visible == true) {
            this.list_depot_run.visible = true;
            this.list_depot_all.visible = false;
        }
    };
    DepotScene.prototype.onTouch_all = function (event) {
        if (this.list_depot_run.visible == true && this.list_depot_all.visible == false) {
            this.list_depot_run.visible = false;
            this.list_depot_all.visible = true;
        }
    };
    DepotScene.prototype.return_button = function (event) {
        SceneManager.toMainScene();
    };
    DepotScene.prototype.onTip_confirm = function (event) {
        this.Tip.visible = false;
        if (this.list_depot_run.visible == true && this.list_depot_all.visible == false) {
            this.list_depot_run.visible = false;
            this.list_depot_all.visible = true;
        }
    };
    DepotScene.prototype.onTip_cancel = function (event) {
        this.Tip.visible = false;
    };
    DepotScene.prototype.list_touch = function (e) {
        if (this.dataArr[this.list_depot_run.selectedIndex].isNull == 1) {
            this.Tip.visible = true;
            //this.list_depot_run.touchEnabled=false;
            //var x:item_run=this.list_depot_run.$indexToRenderer[this.list_depot_run.selectedIndex];
        }
        this.ii++;
        console.log(this.ii);
    };
    return DepotScene;
}(eui.Component));
__reflect(DepotScene.prototype, "DepotScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=DepotScene.js.map