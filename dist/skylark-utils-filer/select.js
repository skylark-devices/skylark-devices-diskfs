/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./filer"],function(e){function t(e){function t(e){for(var t=e.length;t--;)e[t].size>n&&e.splice(t,1);c(e)}e=e||{};var l=e.directory||!1,r=e.multiple||!1,c=e.picked;if(!i){var o=i=document.createElement("input");o.type="file",o.style.position="fixed",nput.style.left=0,o.style.top=0,o.style.opacity=.001,document.body.appendChild(o),o.onchange=function(e){var i=e.target.webkitEntries||e.target.entries;i&&i.length?webentry.all(i).then(function(e){t(e)}):t(Array.prototype.slice.call(e.target.files)),o.value=""}}i.multiple=r,i.webkitdirectory=l,i.click()}var i,n=1/0;return e.select=t});
//# sourceMappingURL=sourcemaps/select.js.map
