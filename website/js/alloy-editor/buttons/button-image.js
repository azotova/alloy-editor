YUI.add("button-image",function(e){"use strict";var t=e.Lang,i=e.Base.create("image",e.Plugin.Base,[e.ButtonBase],{_getInputFile:function(){var t,i;return i=this._inputFile,i||(t=e.guid(),e.one("body").prepend('<input type="file" id="'+t+'"  style="display: none;"></input>'),i=e.one("#"+t),i.on("change",this._onInputChange,this),this._inputFile=i),i},_onClick:function(){var e=this._getInputFile();e.simulate("click")},_onInputChange:function(){var e,t,i,n,a=this;n=new FileReader,n.onload=function(t){e=a.get("host").get("editor"),i=CKEDITOR.dom.element.createFromHtml('<img src="'+t.target.result+'">'),e.insertElement(i),e.fire("imageadd",i)},t=this._inputFile,n.readAsDataURL(t.getDOMNode().files[0]),t.set("value","")},TPL_CONTENT:'<i class="alloy-editor-icon-image-sign"></i>'},{NAME:"image",NS:"image",ATTRS:{strings:{validator:t.isObject,value:{label:"Image"}},toggle:{validator:t.isBoolean,value:!1,writeOnce:"initOnly"}}});e.ButtonImage=i},"",{requires:["button-base","node-event-simulate"]});