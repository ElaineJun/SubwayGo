class GoodScene extends eui.Component implements  eui.UIComponent {

 
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

public label_shuxin:eui.Label;

public label_money:eui.Label;

public group_failure:eui.Group;

public btn_quxiao0:eui.Button;

public group_chenggong:eui.Group;

public btn_purchase0:eui.Button;

private  price:any=0;


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
		 this.btn_return.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.return_button,this);
		
let card:any[] = [
 
{image:"resource/art/goods/imgBuffTime1.png",price:"价格：100"},
 
{image:"resource/art/goods/imgBuffTime2.png",price:"价格：200"},
 
{image:"resource/art/goods/imgBuffTime3.png",price:"价格：300"},
 
{image:"resource/art/goods/imgBuffProtect1.png",price:"价格：400"},
 
{image:"resource/art/goods/imgBuffProtect2.png",price:"价格：500"},
 
{image:"resource/art/goods/imgBuffProtect3.png",price:"价格：600"},
 
{image:"resource/art/goods/imgBuffHarvest.png",price:"价格：700"},

{image:"resource/art/goods/imgBuffHarvest2.png",price:"价格：800"},

{image:"resource/art/goods/imgBuffHarvest3.png",price:"价格：900"}


 
]

	
let subway:any[] = [
 
{image:"resource/art/goods/train1Blue.png",price:"价格：100"},

{image:"resource/art/goods/train1Yellow.png",price:"价格：100"},
 
{image:"resource/art/goods/train2Red.png",price:"价格：100"},
 
{image:"resource/art/goods/train2Blue.png",price:"价格：100"},
 
]

this.label_money.text="10000";
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
this.group_failure.visible=false;
this.group_chenggong.visible=false;
this.list_card.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touchcard,this);
this.list_subway.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.list_touchsubway,this);
this.btn_quxiao.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchquxiao,this);
this.btn_cha.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchquxiao,this);
this.btn_xiaoshi.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchxiaoshi,this);
this.btn_purchase.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchpurchase,this);
this.btn_quxiao0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchquxiao,this);
this.btn_purchase0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchquxiao,this);
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
private return_button(event:egret.TouchEvent){
			SceneManager.toMainScene();
		
	}

	private list_touchcard(e:eui.PropertyEvent):void{
		this.group_purchase.visible=true;
		this.btn_xiaoshi.visible=true;
		var i=this.list_card.selectedIndex;
		
		if(i==0){this.label_shuxin.text="属性：加速" ;this.price=100;}
		else if(i==1){this.label_shuxin.text="属性：1" ;this.price=200;}
		else if(i==2){this.label_shuxin.text="属性：2" ;this.price=300;}
		else if(i==3){this.label_shuxin.text="属性：3" ;this.price=400;}
		else if(i==4){this.label_shuxin.text="属性：4" ;this.price=500;}
		else if(i==5){this.label_shuxin.text="属性：5" ;this.price=600;}
		else if(i==6){this.label_shuxin.text="属性：6" ;this.price=700;}
		else if(i==7){this.label_shuxin.text="属性：7" ;this.price=800;}
		else if(i==8){this.label_shuxin.text="属性：8" ;this.price=900;}

	}
	private list_touchsubway(e:eui.PropertyEvent):void{
		this.group_purchase.visible=true;
		this.btn_xiaoshi.visible=true;
		var j=this.list_subway.selectedIndex;
		
		if(j==0){this.label_shuxin.text="一号地铁" ;this.price=100;}
		else if(j==1){this.label_shuxin.text="一号地铁" ;this.price=100;}
		else if(j==2){this.label_shuxin.text="一号地铁" ;this.price=100;}
		else if(j==3){this.label_shuxin.text="一号地铁" ;this.price=100;}
		
	}
	private onTouchpurchase(event:egret.TouchEvent){
		var str:string=this.label_money.text.toString();
		var totalnum:number=Number(str);
		if(totalnum>=this.price){
		totalnum=totalnum-this.price;
		var str2:string=String(totalnum);
		this.label_money.text=str2;	
		this.group_purchase.visible=false;
		this.btn_xiaoshi.visible=false;
	    this.group_chenggong.visible=true;}
		else{
			this.group_failure.visible=true;
			this.group_purchase.visible=false
		}
}
private onTouchquxiao(event:egret.TouchEvent){
		this.group_purchase.visible=false;
		this.btn_xiaoshi.visible=false;
		this.group_failure.visible=false;
		this.group_chenggong.visible=false;
}
private onTouchxiaoshi(event:egret.TouchEvent){
		this.btn_xiaoshi.visible=false;
		this.group_purchase.visible=false;
		this.group_failure.visible=false;
		this.group_chenggong.visible=false;
		
}

}