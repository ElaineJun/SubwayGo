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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        /**
         * 齿轮旋转
         */
        this.gearImg = new egret.Bitmap();
        this.gearImg.texture = RES.getRes('iconChilun_png');
        this.gearImg.width = 80;
        this.gearImg.height = 80;
        this.gearImg.anchorOffsetX = this.gearImg.width / 2;
        this.gearImg.anchorOffsetY = this.gearImg.height / 2;
        this.gearImg.x = this.width / 2 - 100;
        this.gearImg.y = this.height / 2 - 100;
        this.addChild(this.gearImg);
        // 监听帧事件,每帧都让loading图片转动
        this.addEventListener(egret.Event.ENTER_FRAME, this.updata, this);
        this.gearImg.touchEnabled = true;
        this.gearImg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.collectnum, this);
        /**
         * 碳量进度条
         */
        this.pBar = new eui.ProgressBar();
        this.pBar.maximum = 1000; //设置进度条最大值
        this.pBar.minimum = 0; //设置进度条最小值
        this.pBar.width = 150;
        this.pBar.height = 25;
        this.pBar.x = this.gearImg.x + 40;
        this.pBar.y = this.gearImg.y - 20;
        this.addChild(this.pBar);
        this.pBar.value = 10; //设置进度条的初始量
        //用timer来模拟加载进度
        this.timer = new egret.Timer(1000, 0); //调用时间间隔为3S。即3秒增加一个碳元素
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerHandler, this);
        this.timer.start();
        //跳转界面
        this.mbtnstrategy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_strategy, this); //跳转攻略界面
        this.mbtnInsubway.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_insubway, this); //跳转任务界面
        this.mbtnMessage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_Message, this); //跳转消息界面
        this.mbtnFriends.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_Friends, this); //跳转好友界面
        this.mbtnLock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_Lock, this); //跳转解锁界面
        this.mbtnAbout.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_About, this); //跳转周边界面
        this.mbtnfactory.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_factory, this); //跳转工厂界面
        this.mbtnstage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_stage, this); //跳转地铁库界面
        this.mbtntask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.To_task, this); //跳转任务界面
        // //让Group可以点击
        // //this.Group_Xmenu.touchEnabled=true;
        // //this.Group_Ymenu.touchEnabled=true;
        // //事件委托,点击按钮的时候触发toggleBtn
        // this.Group_Xmenu.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
        // 	// 如果target有子元素,说明点到的是Group,而不是里面的按钮
        // 	if(e.target.numElements) {
        // 		return
        // 	}
        // 	let theBtn = <eui.ToggleButton>e.target
        // 	// 在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
        // 	// 判断theBtn是否为true
        // 	if (theBtn.selected) {
        // 		this.toggleXBtn(theBtn)
        // 	} else {
        // 		// 当selected为false的时候,说明按钮在点击之前就是选中状态
        // 		// 点击后变成了false,所以这里改回选中状态
        // 		theBtn.selected = true
        // 	}
        // }, this)
        // this.Group_Ymenu.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
        // 	// 如果target有子元素,说明点到的是Group,而不是里面的按钮
        // 	if(e.target.numElements) {
        // 		return
        // 	}
        // 	let theBtn = <eui.ToggleButton>e.target
        // 	// 在点击触发这个事件的时候,点击的那个btn已经变成了选中状态
        // 	// 判断theBtn是否为true
        // 	if (theBtn.selected) {
        // 		this.toggleYBtn(theBtn)
        // 		console.log("点击")
        // 	} else {
        // 		// 当selected为false的时候,说明按钮在点击之前就是选中状态
        // 		// 点击后变成了false,所以这里改回选中状态
        // 		theBtn.selected = true
        // 	}
        // }, this)
    };
    // 齿轮旋转方法
    MainScene.prototype.updata = function () {
        var tw_homeTrainImg = egret.Tween.get(this.homeTrainImg);
        tw_homeTrainImg.to({ x: 213, y: 542 }, 2000);
        if (this.pBar.value < 1000) {
            this.gearImg.rotation += 7;
            //if(this.pBar.value>=100){this.timer.stop();this.gearImg.rotation +=0;}
            this.minigearImg0.anchorOffsetX = this.minigearImg0.width / 2;
            this.minigearImg0.anchorOffsetY = this.minigearImg0.height / 2;
            this.minigearImg1.anchorOffsetX = this.minigearImg1.width / 2;
            this.minigearImg1.anchorOffsetY = this.minigearImg1.height / 2;
            this.minigearImg2.anchorOffsetX = this.minigearImg2.width / 2;
            this.minigearImg2.anchorOffsetY = this.minigearImg2.height / 2;
            this.minigearImg0.rotation += 7;
            this.minigearImg1.rotation += 7;
            this.minigearImg2.rotation += 7;
        }
    };
    //进度条加载方法
    MainScene.prototype.timerHandler = function () {
        this.pBar.value += 1;
        if (this.pBar.value >= 1000) {
            this.timer.stop();
            this.gearImg.rotation += 0;
        }
    };
    //点击收集碳量事件
    MainScene.prototype.collectnum = function () {
        //小齿轮初始位置
        this.minigearImg0.x = 136;
        this.minigearImg0.y = 247.5;
        this.minigearImg1.x = 158;
        this.minigearImg1.y = 231;
        this.minigearImg2.x = 161;
        this.minigearImg2.y = 258;
        this.pBarnum = this.pBar.value;
        this.pBar.value = 0;
        //小齿轮动画
        this.minigearImg0.visible = true;
        this.minigearImg1.visible = true;
        this.minigearImg2.visible = true;
        var tw_mini0 = egret.Tween.get(this.minigearImg0);
        var tw_mini1 = egret.Tween.get(this.minigearImg1);
        var tw_mini2 = egret.Tween.get(this.minigearImg2);
        tw_mini0.to({ x: 300, y: 100 }, 1000).call(this.falseVisible, this);
        tw_mini1.to({ x: 300, y: 100 }, 1000);
        tw_mini2.to({ x: 300, y: 100 }, 1000);
    };
    //消失小齿轮并增加碳量
    MainScene.prototype.falseVisible = function () {
        this.minigearImg0.visible = false;
        this.minigearImg1.visible = false;
        this.minigearImg2.visible = false;
        //增加碳量
        var str = this.total_energynum.text.toString();
        var totalnum = Number(str);
        totalnum += this.pBarnum;
        var str2 = String(totalnum);
        this.total_energynum.text = str2;
        this.timer.start();
    };
    /**
     * 跳转界面
     */
    MainScene.prototype.To_strategy = function () { };
    MainScene.prototype.To_insubway = function () { SceneManager.toInsubwayScene(); };
    MainScene.prototype.To_Message = function () { };
    MainScene.prototype.To_Friends = function () { };
    MainScene.prototype.To_Lock = function () { };
    MainScene.prototype.To_About = function () { };
    MainScene.prototype.To_factory = function () { SceneManager.toGoodScene(); };
    MainScene.prototype.To_stage = function () { SceneManager.toDepotScene(); };
    MainScene.prototype.To_task = function () { };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map