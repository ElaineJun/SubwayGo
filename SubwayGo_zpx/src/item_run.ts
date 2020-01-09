class item_run extends eui.ItemRenderer{
	// 选择框
	public train_image:eui.Image;
	public train_Null:eui.Image;
	public money_label:eui.Label;
	public name_label:eui.Label;

	public enter_buton:eui.Button;
	public cancel_button:eui.Button;
	private touch_flag:any=0;
	private static all_flag:any=0;

	public isNull:any=4;

	public constructor() {
		super()
		// 把这个 类和皮肤 联系起来
		this.skinName = 'resource/Depot/list_item.exml';
		this.enter_buton.visible=false;
		this.cancel_button.visible=false;
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
		//this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchOther,this);
		this.train_image.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch,this);
		this.train_Null.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch_Null,this);

	}
	private onComplete() {
		//this.train_image.source
		this.data
	}
	// 当数据改变时，更新视图
	protected dataChanged() {
		// isSeleted 是我们提供数据的某个字段
		this.isNull=this.data.isNull;
		//console.log(this.data.isNull);
		if(this.isNull==1){
			this.train_image.visible=false;
			this.name_label.visible=false;
			this.money_label.visible=false;
		}
		else if(this.isNull==0){
			this.train_Null.visible=false;
			
		}
		else if(this.isNull==2){
			this.train_image.visible=false;
			this.name_label.visible=false;
			this.money_label.visible=false;
			this.train_Null.source="resource/assets/depot_picture/trainFriends.png"
			
		}
	}
	protected ontouch() {
		if(this.touch_flag==0){
			this.enter_buton.visible=true;
			this.cancel_button.visible=true;
			var tw_enter=egret.Tween.get(this.enter_buton);
			var tw_cancel=egret.Tween.get(this.cancel_button);
			tw_enter.to({x:35,y:6},150);
			tw_cancel.to({x:35,y:51},150);
			this.touch_flag=1;
		}
		else if(this.touch_flag==1){
			var tw_enter=egret.Tween.get(this.enter_buton);
			var tw_cancel=egret.Tween.get(this.cancel_button);
			tw_enter.to({x:90,y:27.17},200).call(this.EndMove,this);
			tw_cancel.to({x:90,y:27.17},200);
			this.touch_flag=0;
		}	
	}
	protected ontouch_Null() {

	}
	protected EndMove(){
		this.enter_buton.visible=false;
		this.cancel_button.visible=false;
	}
	
}