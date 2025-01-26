/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-arrays","skylark-langx-async/deferred","./diskfs"],function(r,i,e){var t=Array.prototype.concat;function a(n,r){function t(e){a.reject(e)}var a=new i;return r=r||"",n.isFile?n.file(function(e){e.relativePath=r,a.resolve(e)},t):n.isDirectory?n.createReader().readEntries(function(e){o(e,r+n.name+"/").then(function(e){a.resolve(e)}).catch(t)},t):a.resolve([]),a.promise}function o(e,n){return i.all(r.map(e,function(e){return a(e,n)})).then(function(){return t.apply([],arguments)})}return e.webentry={one:a,all:o}});
//# sourceMappingURL=sourcemaps/webentry.js.map
