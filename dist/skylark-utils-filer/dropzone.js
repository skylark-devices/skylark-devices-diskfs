/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/Deferred","skylark-utils-dom/styler","skylark-utils-dom/eventer","./filer","./webentry"],function(e,r,n,t,a){return t.dropzone=function(e,t){var s=(t=t||{}).hoverClass||"dropzone",d=t.dropped,f=0;return n.on(e,"dragenter",function(t){t.dataTransfer&&t.dataTransfer.types.indexOf("Files")>-1&&(n.stop(t),f++,r.addClass(e,s))}),n.on(e,"dragover",function(e){e.dataTransfer&&e.dataTransfer.types.indexOf("Files")>-1&&n.stop(e)}),n.on(e,"dragleave",function(n){n.dataTransfer&&n.dataTransfer.types.indexOf("Files")>-1&&0==--f&&r.removeClass(e,s)}),n.on(e,"drop",function(t){if(t.dataTransfer&&t.dataTransfer.types.indexOf("Files")>-1&&(r.removeClass(e,s),n.stop(t),d)){var f=t.dataTransfer.items;f&&f.length&&(f[0].webkitGetAsEntry||f[0].getAsEntry)?a.all(langx.map(f,function(e){return e.webkitGetAsEntry?e.webkitGetAsEntry():e.getAsEntry()})).then(d):d(t.dataTransfer.files)}}),this}});
//# sourceMappingURL=sourcemaps/dropzone.js.map
