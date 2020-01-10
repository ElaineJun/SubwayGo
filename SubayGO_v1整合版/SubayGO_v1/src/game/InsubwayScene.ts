class InsubwayScene extends eui.Component implements  eui.UIComponent {
	//public Group_Xmenu:eui.Group;//定义X菜单变量
	public mbtnapple:eui.Button;//消息按钮变量
	public mbtnyilaguan:eui.Button;//好友按钮变量
	public mbtnzhi:eui.Button;//解锁按钮变量
	public mbtnbanana:eui.Button;//关于按钮变量
	public total_energynums:eui.Label;//总碳量变量
	public timer:egret.Timer;
	public random_number1:number;
	public random_number2:number;
	public button_return:eui.Button;
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

		this.button_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.return_button,this);

		this.mbtnapple.visible=false;
		this.mbtnbanana.visible=false;
		this.mbtnyilaguan.visible=false;
		this.mbtnzhi.visible=false;
		this.timer=new egret.Timer(1000,0);
		this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerHandlers,this);
		this.timer.start();
		this.mbtnapple.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.apple_event,this);
		this.mbtnbanana.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.banana_event,this);
		this.mbtnzhi.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.zhi_event,this);
		this.mbtnyilaguan.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.yilaguan_event,this);
   }
   public random_num(min:number,max:number){
        let Range = max - min;  
        let Rand = Math.random();  
        return (min + Math.round(Rand * Range));  
    }
	public timerHandlers():void
	{
		this.random_number1=this.random_num(0,100);
		this.random_number2=this.random_num(0,440);
		if(this.random_number1<10&&this.random_number1>0&&(this.mbtnapple.visible==false))
		{
		this.mbtnapple.visible=true;
		}
		else if(this.random_number1<20&&this.random_number1>=10&&(this.mbtnbanana.visible==false))
		{	
		this.mbtnbanana.visible=true;
		}
		else if(this.random_number1<30&&this.random_number1>=20&&(this.mbtnzhi.visible==false))
		{
		this.mbtnzhi.visible=true;
		}
        else if(this.random_number1<40&&this.random_number1>=30&&(this.mbtnyilaguan.visible==false))
		{
		this.mbtnyilaguan.visible=true;
		}	
	}   
public apple_event(event:egret.TouchEvent):void
	{
		
    	this.removeChild(this.mbtnapple);
		var str:string=this.total_energynums.text.toString();
		var totalnum:number=Number(str);
		totalnum+=20;
		var str2:string=String(totalnum);
		this.total_energynums.text=str2;
		//this.timer.start();
	}
	public banana_event(event:egret.TouchEvent):void
	{
    	this. mbtnbanana.parent.removeChild( this.mbtnbanana);
		var str:string=this.total_energynums.text.toString();
		var totalnum:number=Number(str);
		totalnum+=20;
		var str2:string=String(totalnum);
		this.total_energynums.text=str2;
		//this.timer.start();
	}
	public zhi_event(event:egret.TouchEvent):void
	{
		
    	this.removeChild( this.mbtnzhi);
		var str:string=this.total_energynums.text.toString();
		var totalnum:number=Number(str);
		totalnum+=20;
		var str2:string=String(totalnum);
		this.total_energynums.text=str2;
		//this.timer.start();
	}
	public yilaguan_event(event:egret.TouchEvent):void
	{
    	this. mbtnyilaguan.parent.removeChild( this.mbtnyilaguan)
		var str:string=this.total_energynums.text.toString();
		var totalnum:number=Number(str);
		totalnum+=20;
		var str2:string=String(totalnum);
		this.total_energynums.text=str2;
		//this.timer.start();
	}
	private return_button(event:egret.TouchEvent){
			SceneManager.toMainScene();
			
		}
	}