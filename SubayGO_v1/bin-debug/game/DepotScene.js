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
            { image: "resource/art/depot/train1Blue.png", money: "运营量：800" },
            { image: "resource/art/depot/train2Red.png", money: "运营量：700" },
            { image: "resource/art/depot/train2Blue.png", money: "运营量：600" },
            { image: "resource/art/depot/train2Red.png", money: "运营量：500" },
            { image: "resource/art/depot/train1Yellow.png", money: "运营量：400" },
            { image: "resource/art/depot/train1Blue.png", money: "运营量：300" },
        ];
        return _this;
    }
    DepotScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    DepotScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Running.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.button_return.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.return_button, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.enter_move, this);
        var EUIArr = new eui.ArrayCollection(this.dataArr);
        // this.p.touchEnabled=true;
        this.list_depot_run.touchEnabled = true;
        this.list_depot_run.dataProvider = EUIArr;
        this.list_depot_run.itemRenderer = item_run;
        this.list_depot_run.selectedIndex = 1;
        //this.list_depot_run.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touch,this);
    };
    DepotScene.prototype.onTouch = function (event) {
        // if(this.list_depot_run.visible==true)
        // {this.list_depot_run.visible=false;}
        // else if(this.list_depot_run.visible==false)
        // {this.list_depot_run.visible=true;}
        // var iDirection:number=Math.random()>.5?-1:1;
        // var funChange=():void=>{
        // 	this.All.rotation+=6*iDirection;
        // }
        // var tw=egret.Tween.get(this.All,{onChange:funChange,onChangeObj:this});
        // tw.to({x:300,y:400},500);
    };
    DepotScene.prototype.return_button = function (event) {
        if (this.visible == true) {
            this.visible = false;
        }
    };
    DepotScene.prototype.enter_move = function () {
        var tw_running = egret.Tween.get(this.Running);
        var tw_all = egret.Tween.get(this.All);
        tw_running.to({ x: 106, y: 100 }, 400);
        tw_all.to({ x: 260.39, y: 100 }, 400);
    };
    DepotScene.prototype.list_touch = function (e) {
        console.log(this.list_depot_run.selectedIndex);
        //this.dataArr[this.list_depot_run.selectedIndex]={image:"resource/assets/depot_picture/train2Blue.png",money:"运营量：900"}
        // let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
        // this.list_depot_run.dataProvider=EUIArr;
        //this.list_depot_run.getChildAt(this.list_depot_run.selectedIndex).
    };
    return DepotScene;
}(eui.Component));
__reflect(DepotScene.prototype, "DepotScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=DepotScene.js.map