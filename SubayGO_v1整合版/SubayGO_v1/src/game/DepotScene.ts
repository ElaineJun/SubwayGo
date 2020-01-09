class DepotScene extends eui.Component implements  eui.UIComponent {


	public Running:eui.Button;
	public All:eui.Button;

	public tip_confim:eui.Button;
	public tip_cancel:eui.Button;
	public button_return:eui.Button;
	public scr_depot_run:eui.Scroller;
	public list_depot_run:eui.List;
	public list_depot_all:eui.List;
	public Tip:eui.Panel;
	

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private dataArr:any[5]=[
			{image:"resource/art/depot/train0Blue.png",money:"运营量：800",name:"二号线",isNull:0},
			{image:"resource/art/depot/train2Red.png",money:"运营量：700",name:"一号线",isNull:0},
			{image:"resource/art/depot/train1Yellow.png",money:"运营量：600",name:"通鹏号",isNull:1},
			{image:"resource/art/depot/train2Blue.png",money:"运营量：400",name:"扬眉线",isNull:2},
			{image:"resource/art/depot/train1Blue.png",money:"运营量：300",name:"四号线",isNull:2},
		]
	private dataArr_all:any[]=[
		{image:"resource/art/depot/train1Blue.png",state:"resource/art/depot/stateGreen.png",name:"二号线",state_flag:1},
		{image:"resource/art/depot/train2Red.png",state:"resource/art/depot/stateGray.png",name:"一号线",state_flag:0},
		{image:"resource/art/depot/train1Yellow.png",state:"resource/art/depot/stateGray.png",name:"通鹏号",state_flag:0},
		{image:"resource/art/depot/train0Blue.png",state:"resource/art/depot/stateGreen.png",name:"七号线",state_flag:1},
		{image:"resource/art/depot/train2Blue.png",state:"resource/art/depot/stateGreen.png",name:"扬眉线",state_flag:0},
		{image:"resource/art/depot/train4Blue.png",state:"resource/art/depot/stateGray.png",name:"四号线",state_flag:0},
		]
	protected childrenCreated():void
	{
		super.childrenCreated();

		
		this.Running.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch_running,this);
		this.All.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch_all,this);
		this.button_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.return_button,this);
		this.tip_confim.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTip_confirm,this);
		this.tip_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTip_cancel,this);
		
	
		//this.addEventListener(egret.Event.ENTER_FRAME,this.enter_move,this);
		

		this.list_depot_all.visible=false;
		let EUIArr_all:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr_all);
		this.list_depot_all.dataProvider=EUIArr_all;
		this.list_depot_all.touchEnabled=true;
		this.list_depot_all.itemRenderer=item_all;
		
		let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
		this.list_depot_run.touchEnabled=true;
		this.list_depot_run.dataProvider=EUIArr;
		this.list_depot_run.itemRenderer=item_run;
		this.list_depot_run.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touch,this);

		this.Tip.visible=false;
		
	}
	
	
	
	private onTouch_running(event:egret.TouchEvent){
		if(this.list_depot_run.visible==false&&this.list_depot_all.visible==true)
		{
			this.list_depot_run.visible=true;this.list_depot_all.visible=false;
		}	
	}
	private onTouch_all(event:egret.TouchEvent){	
		if(this.list_depot_run.visible==true&&this.list_depot_all.visible==false)
		{
			this.list_depot_run.visible=false;this.list_depot_all.visible=true;
		}
	
	}
	private return_button(event:egret.TouchEvent){
			SceneManager.toMainScene();
		
	}

	private onTip_confirm(event:egret.TouchEvent){
		this.Tip.visible=false;
		if(this.list_depot_run.visible==true&&this.list_depot_all.visible==false)
		{
			this.list_depot_run.visible=false;this.list_depot_all.visible=true;
		}
	}
	private onTip_cancel(event:egret.TouchEvent){
		this.Tip.visible=false;
	}
	// private enter_move(){
	// 	var tw_running=egret.Tween.get(this.Running);
	// 	var tw_all=egret.Tween.get(this.All);
	// 	tw_running.to({x:106,y:100},400);
	// 	tw_all.to({x:260.39,y:100},400);
	// }
	private ii:any=0;
	private list_touch(e:eui.PropertyEvent):void{
		
		if(this.dataArr[this.list_depot_run.selectedIndex].isNull==1){
			this.Tip.visible=true;
			//this.list_depot_run.touchEnabled=false;
			//var x:item_run=this.list_depot_run.$indexToRenderer[this.list_depot_run.selectedIndex];
		}
		this.ii++;
		console.log(this.ii);

	}
	
}