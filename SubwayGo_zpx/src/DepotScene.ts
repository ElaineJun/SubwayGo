class DepotScene extends eui.Component implements  eui.UIComponent {


	public Running:eui.Button;
	public All:eui.Button;
	public button_return:eui.Button;
	public scr_depot_run:eui.Scroller;
	public list_depot_run:eui.List;
	public list_depot_all:eui.List;
	public p:eui.Panel;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private dataArr:any[]=[
			{image:"resource/assets/depot_picture/train1Blue.png",money:"运营量：800",name:"二号线",isNull:0},
			{image:"resource/assets/depot_picture/train2Red.png",money:"运营量：700",name:"一号线",isNull:1},
			{image:"resource/assets/depot_picture/train2Blue.png",money:"运营量：600",name:"通鹏号",isNull:1},
			{image:"resource/assets/depot_picture/train2Red.png",money:"运营量：500",name:"七号线",isNull:0},
			{image:"resource/assets/depot_picture/train1Yellow.png",money:"运营量：400",name:"扬眉线",isNull:1},
			{image:"resource/assets/depot_picture/train1Blue.png",money:"运营量：300",name:"四号线",isNull:0},
		]
	private dataArr_all:any[]=[
		{image:"resource/assets/depot_picture/train1Blue.png",state:"resource/assets/depot_picture/stateGreen.png",name:"二号线"},
		{image:"resource/assets/depot_picture/train2Red.png",state:"resource/assets/depot_picture/stateGray.png",name:"一号线"},
		{image:"resource/assets/depot_picture/train2Blue.png",state:"resource/assets/depot_picture/stateGray.png",name:"通鹏号"},
		{image:"resource/assets/depot_picture/train2Red.png",state:"resource/assets/depot_picture/stateGreen.png",name:"七号线"},
		{image:"resource/assets/depot_picture/train1Yellow.png",state:"resource/assets/depot_picture/stateGreen.png",name:"扬眉线"},
		{image:"resource/assets/depot_picture/train1Blue.png",state:"resource/assets/depot_picture/stateGray.png",name:"四号线"},
		]
	protected childrenCreated():void
	{
		super.childrenCreated();

		
		this.Running.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch_running,this);
		this.All.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch_all,this);
		this.button_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.return_button,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.enter_move,this);
		

		this.list_depot_all.visible=false;
		let EUIArr_all:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr_all);
		this.list_depot_all.dataProvider=EUIArr_all;
		this.list_depot_all.touchEnabled=true;
		this.list_depot_all.itemRenderer=item_all;
		
		// this.p.touchEnabled=true;


		let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
		this.list_depot_run.touchEnabled=true;
		this.list_depot_run.dataProvider=EUIArr;
		this.list_depot_run.itemRenderer=item_run;
		this.list_depot_run.selectedIndex=1;
		//this.list_depot_run.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touch,this);
		
	}
	
	
	
	private onTouch_running(event:egret.TouchEvent){
		if(this.list_depot_run.visible==false&&this.list_depot_all.visible==true)
		{
			this.list_depot_run.visible=true;this.list_depot_all.visible=false;
		}
		// else if(this.list_depot_run.visible==false)
		// {this.list_depot_run.visible=true;}
		// var iDirection:number=Math.random()>.5?-1:1;
		// var funChange=():void=>{
		// 	this.All.rotation+=6*iDirection;
		// }
		// var tw=egret.Tween.get(this.All,{onChange:funChange,onChangeObj:this});
		// tw.to({x:300,y:400},500);
	
	}
	private onTouch_all(event:egret.TouchEvent){	
		if(this.list_depot_run.visible==true&&this.list_depot_all.visible==false)
		{
			this.list_depot_run.visible=false;this.list_depot_all.visible=true;
		}
	
	}
	private return_button(event:egret.TouchEvent){
		if(this.visible==true){
			this.visible=false;
		}
		
	}
	private enter_move(){
		var tw_running=egret.Tween.get(this.Running);
		var tw_all=egret.Tween.get(this.All);
		tw_running.to({x:106,y:100},400);
		tw_all.to({x:260.39,y:100},400);
	}
	private list_touch(e:eui.PropertyEvent):void{
		console.log(this.list_depot_run.selectedIndex);
		//this.dataArr[this.list_depot_run.selectedIndex]={image:"resource/assets/depot_picture/train2Blue.png",money:"运营量：900"}
		// let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(this.dataArr);
		// this.list_depot_run.dataProvider=EUIArr;
		//this.list_depot_run.getChildAt(this.list_depot_run.selectedIndex).
		
	}
}