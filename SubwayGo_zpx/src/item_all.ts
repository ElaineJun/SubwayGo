class item_all extends eui.ItemRenderer{
	// 选择框
	public train_image:eui.Image;
    
	public shuxing_button:eui.Button;
	public run_button:eui.Button;
    
    private touch_flag:any=0;

	public constructor() {
		super()
		// 把这个 类和皮肤 联系起来
		this.skinName = 'resource/Depot/item_all.exml';
		this.shuxing_button.visible=false;
		this.run_button.visible=false;
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
		//this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
		this.train_image.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch,this);
	}
	private onComplete() {
		//this.train_image.source
		this.data
	}
	// 当数据改变时，更新视图
	protected dataChanged() {
		// isSeleted 是我们提供数据的某个字段
	}
	protected ontouch() {
		// isSeleted 是我们提供数据的某个字段
		//console.log("777");
		if(this.touch_flag==0){
			this.run_button.visible=true;
			this.shuxing_button.visible=true;
			var tw_enter=egret.Tween.get(this.run_button);
			var tw_cancel=egret.Tween.get(this.shuxing_button);
			tw_enter.to({x:35,y:6},150);
			tw_cancel.to({x:35,y:51},150);
			this.touch_flag=1;
			//item_run.all_flag=1;
		}
		else if(this.touch_flag==1){
			var tw_enter=egret.Tween.get(this.run_button);
			var tw_cancel=egret.Tween.get(this.shuxing_button);
			tw_enter.to({x:90,y:27.17},200).call(this.EndMove,this);
			tw_cancel.to({x:90,y:27.17},200);
			this.touch_flag=0;
			//item_run.all_flag=0;
		}
		// var enter_x=this.enter_buton.x;
		// var enter_y=this.enter_buton.y;
		// var cancel_x=this.cancel_buton.x;
		// var cancel_y=this.cancel_buton.y;
		
		
	}
	// protected ontouchOther(){
	// 	console.log("777");
		
	// }
	protected EndMove(){
		this.run_button.visible=false;
		this.shuxing_button.visible=false;
	}
}