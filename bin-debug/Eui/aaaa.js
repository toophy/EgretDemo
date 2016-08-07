// TypeScript file
/**
 * SceneBegin
 */
var BeginGame = (function (_super) {
    __extends(BeginGame, _super);
    function BeginGame() {
        _super.call(this);
        this.skinName = "src/Eui/SceneBeginSkin.exml";
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
    }
    var d = __define,c=BeginGame,p=c.prototype;
    p.onclick_begin = function () {
        console.log("hehehehe");
    };
    return BeginGame;
}(eui.Component));
egret.registerClass(BeginGame,'BeginGame');
