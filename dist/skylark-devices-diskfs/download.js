/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/types","./diskfs"],function(a,n){return n.downlad=function(n,e){var t;window.navigator.msSaveBlob?(a.isString(n)&&(n=dataURItoBlob(n)),window.navigator.msSaveBlob(n,e)):(t=document.createElement("a"),n instanceof Blob&&(n=URL.createObjectURL(n)),t.href=n,t.setAttribute("download",e||"noname"),t.click())}});
//# sourceMappingURL=sourcemaps/download.js.map
