/**
 * 场景管理类
 */
class SceneManager {
	private _stage:egret.DisplayObjectContainer;//设置所有场景所在的舞台(根)

	public mainScene:MainScene;	//主场景
	public depotScene:DepotScene;	//地铁库场景
	public goodScene:GoodScene;	//工厂场景
	public insubwayScene:InsubwayScene;//地铁内场景

	public constructor() {
		this.mainScene=new MainScene();
		this.depotScene=new DepotScene();
		this.goodScene=new GoodScene();
		this.insubwayScene=new InsubwayScene();
}
	/**
	 * 获取实例
	 */
	static sceneManager:SceneManager
	static get instance(){
		if(!this.sceneManager){
			this.sceneManager=new SceneManager();
		}
		return this.sceneManager;
	}
	/**
	 * 设置根场景
	 */
	public setStage(s:egret.DisplayObjectContainer){
		this._stage=s;
	}
	/**
	 * 删除其他场景
	 * @param scene 不需要删除的场景
	 */
	private removeOther(scene){
		let arr=[this.depotScene,this.goodScene,this.insubwayScene]	//arr用来存放其他场景
		arr.forEach((item)=>{
			if(scene===item){
				return 
			}
			if(item.parent){
				this.mainScene.removeChild(item);
			}
		})
	}
	 /**
     * 在主场景显示选择的数据
     */
    static showInfo(arr:string[]) {
        let text:string = '你选择了: '
        if (arr.length === 0) {
            text = '厉害了什么都不选'
        } else {
            text += arr.toString()
        }
        // 新建一个消息背景图
        let img:egret.Bitmap = new egret.Bitmap()
        img.texture = RES.getRes('toast-bg_png')
        SceneManager.instance.mainScene.addChild(img)
        img.x = SceneManager.instance.mainScene.width / 2 - img.width / 2
        img.y = 500
        img.height = 40

        // 新建一个label用来显示
        let label:egret.TextField = new egret.TextField(); 
        label.text = text
        label.size = 20
        SceneManager.instance.mainScene.addChild(label)
        label.x = SceneManager.instance.mainScene.width / 2 - label.width / 2
        label.y = 510
        label.height = 40
		
        // 创建一个定时器,1000毫秒后删除label
        let timer:egret.Timer = new egret.Timer(1000, 1)
        timer.start()
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, (e)=>{
            SceneManager.instance.mainScene.removeChild(label)
            SceneManager.instance.mainScene.removeChild(img)
        }, this)
    }
	/**
	 * 主场景
	 */
	static toMainScene(){
		let stage:egret.DisplayObjectContainer=this.instance._stage;//根舞台
		let mainScene=SceneManager.instance.mainScene;//主场景
		console.log("33");
		 // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if(!mainScene.parent){
            // 未被添加到场景
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
			console.log("22");
        } 
		
        SceneManager.instance.removeOther(SceneManager.instance.mainScene);
    }
	/**
	 * 地铁库场景
	 */
	static toDepotScene(){
		this.instance.removeOther(this.instance.depotScene);
		//把地铁场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.depotScene);
	}
	/**
	 * 工厂场景
	 */
	static toGoodScene(){
		this.instance.removeOther(this.instance.goodScene);
		
		//把工厂场景添加到主场景中
		this.instance.mainScene.addChild(this.instance.goodScene);
	}
	/**
	 * 地铁内场景
	 */
	static toInsubwayScene(){
		this.instance.removeOther(this.instance.insubwayScene);
		
		//把地铁内场景添加到主场景中
		this.instance.mainScene.addChild(this.instance.insubwayScene);
	}
}