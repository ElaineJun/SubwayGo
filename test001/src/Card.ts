class Card extends egret.Sprite{
    public constructor(){
        super();
        this.drawCard();
    }
    private drawCard(){
        this.graphics.beginFill(0x00ff00);
        this.graphics.drawRect(200,200,80,80);
        this.graphics.endFill();

        let button = new eui.Button();
        button.label = "Click!";
        button.x=300;
        button.x=600;
        button.width=50;
        button.height=50;
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
    }
}