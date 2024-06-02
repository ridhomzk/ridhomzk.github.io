// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/utils".split(" "),function(c,d,e,a,f,g,h,k,l){return c([g,h,k,f],{baseClass:"infographic-toggle-pocket",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"toggle-header"\x3e\x3cdiv data-dojo-attach-point\x3d"label" class\x3d"title"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"toggle" class\x3d"toggle"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"horizontal-line"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"pocket" class\x3d"pocket"\x3e\x3c/div\x3e\x3c/div\x3e',
state:!1,visibility:!0,postCreate:function(){this.inherited(arguments);this._initUI();this._initEvent();a.addClass(this.domNode,this.baseClass)},setState:function(b){this.state=!!b;this._switchState(this.state)},getState:function(){return!!this.state},visible:function(){return this.visibility},hide:function(){this.visibility=!1;a.setStyle(this.domNode,"display","none")},show:function(){this.visibility=!0;a.setStyle(this.domNode,"display","flex")},_initEvent:function(){this.own(e(this.toggle,"click",
d.hitch(this,function(){this.state=!this.state;this._switchState(this.state);this.emit("change",this.state)})))},_initUI:function(){this.titleLabel&&(this.label.innerHTML=l.sanitizeHTML(this.titleLabel));this.content&&a.place(this.content,this.pocket);this._switchState(this.state);this._switchVisible(this.visibility)},_switchState:function(b){b?this._openPocket():this._closePocket()},_switchVisible:function(b){b?this.show():this.hide()},_openPocket:function(){a.removeClass(this.toggle,"toggle-off");
a.addClass(this.toggle,"toggle-on");a.setStyle(this.pocket,"display","")},_closePocket:function(){a.removeClass(this.toggle,"toggle-on");a.addClass(this.toggle,"toggle-off");a.setStyle(this.pocket,"display","none")}})});