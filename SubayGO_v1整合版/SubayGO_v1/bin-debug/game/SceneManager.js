var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理类
 */
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.depotScene = new DepotScene();
        this.goodScene = new GoodScene();
        this.insubwayScene = new InsubwayScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 删除其他场景
     * @param scene 不需要删除的场景
     */
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.depotScene, this.goodScene, this.insubwayScene]; //arr用来存放其他场景
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    /**
    * 在主场景显示选择的数据
    */
    SceneManager.showInfo = function (arr) {
        var text = '你选择了: ';
        if (arr.length === 0) {
            text = '厉害了什么都不选';
        }
        else {
            text += arr.toString();
        }
        // 新建一个消息背景图
        var img = new egret.Bitmap();
        img.texture = RES.getRes('toast-bg_png');
        SceneManager.instance.mainScene.addChild(img);
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2;
        img.y = 500;
        img.height = 40;
        // 新建一个label用来显示
        var label = new egret.TextField();
        label.text = text;
        label.size = 20;
        SceneManager.instance.mainScene.addChild(label);
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2;
        label.y = 510;
        label.height = 40;
        // 创建一个定时器,1000毫秒后删除label
        var timer = new egret.Timer(1000, 1);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            SceneManager.instance.mainScene.removeChild(label);
            SceneManager.instance.mainScene.removeChild(img);
        }, this);
    };
    /**
     * 主场景
     */
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage; //根舞台
        var mainScene = SceneManager.instance.mainScene; //主场景
        console.log("33");
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if (!mainScene.parent) {
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
            console.log("22");
        }
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
    };
    /**
     * 地铁库场景
     */
    SceneManager.toDepotScene = function () {
        this.instance.removeOther(this.instance.depotScene);
        //把地铁场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.depotScene);
    };
    /**
     * 工厂场景
     */
    SceneManager.toGoodScene = function () {
        this.instance.removeOther(this.instance.goodScene);
        //把工厂场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.goodScene);
    };
    /**
     * 地铁内场景
     */
    SceneManager.toInsubwayScene = function () {
        this.instance.removeOther(this.instance.insubwayScene);
        //把地铁内场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.insubwayScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map