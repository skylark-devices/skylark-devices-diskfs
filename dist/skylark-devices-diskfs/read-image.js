/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-async/deferred","./diskfs","./read"],function(a,e,t){return e.readImage=function(e){var n=new a,r=new Image;return r.onload=function(){n.resolve(r)},r.onerror=function(e){n.reject(e)},t(e,{asDataUrl:!0}).then(function(e){r.src=e}).catch(function(e){n.reject(e)}),n.promise}});
//# sourceMappingURL=sourcemaps/read-image.js.map
