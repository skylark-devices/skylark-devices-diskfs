/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/Deferred","./filer"],function(e,n){var r=function(){function n(n,t){var i=new e,a=function(e){i.reject(e)};if(t=t||"",n.isFile)n.file(function(e){e.relativePath=t,i.resolve(e)},a);else if(n.isDirectory){var c=n.createReader();c.readEntries(function(e){r(e,t+n.name+"/").then(function(e){i.resolve(e)})["catch"](a)},a)}else i.resolve([]);return i.promise}function r(r,t){return e.all(langx.map(r,function(e){return n(e,t)})).then(function(){return concat.apply([],arguments)})}return{one:n,all:r}}();return n.webentry=r});
//# sourceMappingURL=sourcemaps/webentry.js.map
