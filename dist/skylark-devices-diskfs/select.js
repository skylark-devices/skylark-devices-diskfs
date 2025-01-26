/**
 * skylark-devices-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./diskfs"],function(e){var o;return e.select=function(e){var t=(e=e||{}).directory||!1,i=e.multiple||!1,n=e.accept||"",l=e.title||"",c=e.picked;function r(e){for(var t=e.length;t--;)e[t].size>1/0&&e.splice(t,1);c(e)}o||((e=o=document.createElement("input")).type="file",e.style.position="fixed",e.style.left=0,e.style.top=0,e.style.opacity=.001,document.body.appendChild(e)),o.onchange=function(e){var t=e.target.webkitEntries||e.target.entries;t&&t.length?webentry.all(t).then(function(e){r(e)}):r(Array.prototype.slice.call(e.target.files)),o.value="",o.onchange=null},o.multiple=i,o.accept=n,o.title=l,o.webkitdirectory=t,o.click()}});
//# sourceMappingURL=sourcemaps/select.js.map
