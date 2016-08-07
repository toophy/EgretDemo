var GameBegin = (function (_super) {
    __extends(GameBegin, _super);
    function GameBegin() {
        _super.call(this);
        this.skinName = "resource/eui_skins/GameBegin.exml";
        this.btn_gamestart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
    }
    var d = __define,c=GameBegin,p=c.prototype;
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    p.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    p.onclick_begin = function () {
    };
    return GameBegin;
}(eui.Component));
egret.registerClass(GameBegin,'GameBegin',["eui.UIComponent"]);
