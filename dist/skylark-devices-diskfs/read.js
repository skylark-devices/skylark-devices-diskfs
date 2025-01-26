/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-async/deferred","./diskfs"],function(t,r){return r.read=r.readFile=function(r,e){e=e||{};var a=new t,n=new FileReader;return n.onload=function(r){a.resolve(r.target.result)},n.onerror=function(r){r=r.target.error.code;2===r?alert("please don't open this page using protocol fill:///"):alert("error code: "+r)},e.asArrayBuffer?n.readAsArrayBuffer(r):e.asDataUrl?n.readAsDataURL(r):e.asText?n.readAsText(r):n.readAsArrayBuffer(r),a.promise}});
//# sourceMappingURL=sourcemaps/read.js.map
