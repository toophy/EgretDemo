class GameBegin extends eui.Component implements  eui.UIComponent {
	private btn_gamestart: eui.Button;
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/GameBegin.exml";
        this.btn_gamestart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_begin,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	private onclick_begin(){

	}
	
}