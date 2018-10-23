/**
 * skylark-utils-filer - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/objects","skylark-utils-dom/eventer","./filer"],function(e,n,t){function a(t,a){a=a||{};var i=(a.hoverClass||"pastezone",a.pasted);return n.on(t,"paste",function(n){var t=n.originalEvent&&n.originalEvent.clipboardData&&n.originalEvent.clipboardData.items,a=[];t&&t.length&&e.each(t,function(e,n){var t=n.getAsFile&&n.getAsFile();t&&a.push(t)}),i&&a.length&&i(a)}),this}return t.pastezone=a});
//# sourceMappingURL=sourcemaps/pastezone.js.map
