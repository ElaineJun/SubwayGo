class shangdian_qch extends eui.Component implements  eui.UIComponent {

 
public btn_card:eui.Button;
 
public btn_subway:eui.Button;
 
public scr_card:eui.Scroller;
 
public list_card:eui.List;


public scr_subway:eui.Scroller;
 
public list_subway:eui.List;

public group_purchase:eui.Group;

public btn_purchase:eui.Button;

public btn_quxiao:eui.Button;

public btn_return:eui.Button; 

public btn_cha:eui.Button;

public btn_xiaoshi:eui.Button;


	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		 this.btn_card.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchcard,this);
		 this.btn_subway.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchsubway,this);
		this.addEventListener(egret.Event.ENTER_FRAME,this.enter_move,this);

		
let card:any[] = [
 
{image:"resource/art/imgBuffTime1.png",price:"价格：100"},
 
{image:"resource/art/imgBuffTime2.png",price:"价格：100"},
 
{image:"resource/art/imgBuffTime3.png",price:"价格：100"},
 
{image:"resource/art/imgBuffProtect1.png",price:"价格：100"},
 
{image:"resource/art/imgBuffProtect2.png",price:"价格：100"},
 
{image:"resource/art/imgBuffProtect3.png",price:"价格：100"},
 
{image:"resource/art/imgBuffHarvest.png",price:"价格：100"},

{image:"resource/art/imgBuffHarvest2.png",price:"价格：100"},

{image:"resource/art/imgBuffHarvest3.png",price:"价格：100"}


 
]

	
let subway:any[] = [
 
{image:"resource/art/train1Blue.png",price:"价格：100"},

{image:"resource/art/train1Yellow.png",price:"价格：100"},
 
{image:"resource/art/train2Red.png",price:"价格：100"},
 
{image:"resource/art/train2Blue.png",price:"价格：100"},
 
]
let EUIArr:eui.ArrayCollection = new eui.ArrayCollection(card);
this.list_card.dataProvider=EUIArr;

let EUIArr1:eui.ArrayCollection = new eui.ArrayCollection(subway);
this.list_subway.dataProvider=EUIArr1;

this.btn_xiaoshi.visible=false;
this.group_purchase.visible=false;
this.list_card.visible=true;
this.list_subway.visible=false
this.list_card.touchEnabled=true;
this.list_subway.touchEnabled=false;
this.list_card.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touchcard,this);
this.list_subway.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touchsubway,this);
this.btn_quxiao.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchquxiao,this);
this.btn_cha.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchquxiao,this);
this.btn_xiaoshi.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchxiaoshi,this);
}


private onTouchcard(event:egret.TouchEvent){
		this.list_card.visible=true;
		this.list_subway.visible=false;
		this.list_card.touchEnabled=true;
        this.list_subway.touchEnabled=false;
}
private onTouchsubway(event:egret.TouchEvent){
		this.list_card.visible=false;
		this.list_subway.visible=true;
		this.list_card.touchEnabled=false;
        this.list_subway.touchEnabled=true;
}
private enter_move(){
		var tw_running=egret.Tween.get(this.btn_card);
		var tw_all=egret.Tween.get(this.btn_subway);
		tw_running.to({x:124,y:0},400);
		tw_all.to({x:240,y:0},400);
	}
	private list_touchcard(e:eui.PropertyEvent):void{
		this.group_purchase.visible=true;
		this.btn_xiaoshi.visible=true;
		
	}
	private list_touchsubway(e:eui.PropertyEvent):void{
		this.group_purchase.visible=true;
		this.btn_xiaoshi.visible=true;
		
	}
private onTouchquxiao(event:egret.TouchEvent){
		this.group_purchase.visible=false;
		this.btn_xiaoshi.visible=false;
}
private onTouchxiaoshi(event:egret.TouchEvent){
		this.btn_xiaoshi.visible=false;
		this.group_purchase.visible=false;
		
}

}