/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/arrays","skylark-langx/Deferred","./filer"],function(e,n,r){var t=function(){function r(e,r){var i=new n,a=function(e){i.reject(e)};if(r=r||"",e.isFile)e.file(function(e){e.relativePath=r,i.resolve(e)},a);else if(e.isDirectory){e.createReader().readEntries(function(n){t(n,r+e.name+"/").then(function(e){i.resolve(e)}).catch(a)},a)}else i.resolve([]);return i.promise}function t(t,i){return n.all(e.map(t,function(e){return r(e,i)})).then(function(){return concat.apply([],arguments)})}return{one:r,all:t}}();return r.webentry=t});
//# sourceMappingURL=sourcemaps/webentry.js.map
