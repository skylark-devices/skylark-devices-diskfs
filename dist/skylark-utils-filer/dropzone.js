/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/Deferred","skylark-utils-dom/eventer","./filer","./webentry"],function(e,r,t,n){function a(e,t){t=t||{};var a=t.hoverClass||"dropzone",s=t.dropped,d=0;return r.on(e,"dragenter",function(t){t.dataTransfer&&t.dataTransfer.types.indexOf("Files")>-1&&(r.stop(t),d++,styler.addClass(e,a))}),r.on(e,"dragover",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&r.stop(e)}),r.on(e,"dragleave",function(r){r.dataTransfer&&r.dataTransfer.types.indexOf("Files")>-1&&(d--,0==d&&styler.removeClass(e,a))}),r.on(e,"drop",function(t){if(t.dataTransfer&&t.dataTransfer.types.indexOf("Files")>-1&&(styler.removeClass(e,a),r.stop(t),s)){var d=t.dataTransfer.items;d&&d.length&&(d[0].webkitGetAsEntry||d[0].getAsEntry)?n.all(langx.map(d,function(e){return e.webkitGetAsEntry?e.webkitGetAsEntry():e.getAsEntry()})).then(s):s(t.dataTransfer.files)}}),this}return t.dropzone=a});
//# sourceMappingURL=sourcemaps/dropzone.js.map
