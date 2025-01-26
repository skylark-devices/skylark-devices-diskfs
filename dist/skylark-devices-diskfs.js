/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals,define,require) {
  var isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define("skylark-devices-diskfs/diskfs",["skylark-langx/skylark"],function(e){function r(){return r}return e.attach("storages.diskfs",r)}),define("skylark-devices-diskfs/download",["skylark-langx/types","./diskfs"],function(t,e){return e.downlad=function(e,r){var n;window.navigator.msSaveBlob?(t.isString(e)&&(e=dataURItoBlob(e)),window.navigator.msSaveBlob(e,r)):(n=document.createElement("a"),e instanceof Blob&&(e=URL.createObjectURL(e)),n.href=e,n.setAttribute("download",r||"noname"),n.click())}}),define("skylark-devices-diskfs/read",["skylark-langx-async/deferred","./diskfs"],function(a,e){return e.read=e.readFile=function(e,r){r=r||{};var n=new a,t=new FileReader;return t.onload=function(e){n.resolve(e.target.result)},t.onerror=function(e){e=e.target.error.code;2===e?alert("please don't open this page using protocol fill:///"):alert("error code: "+e)},r.asArrayBuffer?t.readAsArrayBuffer(e):r.asDataUrl?t.readAsDataURL(e):r.asText?t.readAsText(e):t.readAsArrayBuffer(e),n.promise}}),define("skylark-devices-diskfs/read-image",["skylark-langx-async/deferred","./diskfs","./read"],function(t,e,a){return e.readImage=function(e){var r=new t,n=new Image;return n.onload=function(){r.resolve(n)},n.onerror=function(e){r.reject(e)},a(e,{asDataUrl:!0}).then(function(e){n.src=e}).catch(function(e){r.reject(e)}),r.promise}}),define("skylark-devices-diskfs/select",["./diskfs"],function(e){var o;return e.select=function(e){var r=(e=e||{}).directory||!1,n=e.multiple||!1,t=e.accept||"",a=e.title||"",i=e.picked;function s(e){for(var r=e.length;r--;)e[r].size>1/0&&e.splice(r,1);i(e)}o||((e=o=document.createElement("input")).type="file",e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.opacity=.001,document.body.appendChild(e)),o.onchange=function(e){var r=e.target.webkitEntries||e.target.entries;r&&r.length?webentry.all(r).then(function(e){s(e)}):s(Array.prototype.slice.call(e.target.files)),o.value="",o.onchange=null},o.multiple=n,o.accept=t,o.title=a,o.webkitdirectory=r,o.click()}}),define("skylark-devices-diskfs/webentry",["skylark-langx-arrays","skylark-langx-async/deferred","./diskfs"],function(n,i,e){var t=Array.prototype.concat;function a(r,n){function t(e){a.reject(e)}var a=new i;return n=n||"",r.isFile?r.file(function(e){e.relativePath=n,a.resolve(e)},t):r.isDirectory?r.createReader().readEntries(function(e){s(e,n+r.name+"/").then(function(e){a.resolve(e)}).catch(t)},t):a.resolve([]),a.promise}function s(e,r){return i.all(n.map(e,function(e){return a(e,r)})).then(function(){return t.apply([],arguments)})}return e.webentry={one:a,all:s}}),define("skylark-devices-diskfs/main",["./diskfs","./download","./read","./read-image","./select","./webentry"],function(e){return e}),define("skylark-devices-diskfs",["skylark-devices-diskfs/main"],function(e){return e});
},this,define,require);
//# sourceMappingURL=sourcemaps/skylark-devices-diskfs.js.map
