(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{72:function(e,t,o){"use strict";o.r(t);var s=o(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"scopes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scopes","aria-hidden":"true"}},[e._v("#")]),e._v(" Scopes")]),o("p",[e._v("By default, the scope of the validator is the same as the Vue instance that owns it. Sometimes you may have multiple fields within the same component, they are in different forms and serve different purposes. Since the validator uses the "),o("code",[e._v("name")]),e._v(" or "),o("code",[e._v("data-vv-name")]),e._v(" attributes to identify the field, fields with the same name will conflict with each other, which will cause problems when trying to display error messages for either of them.")]),o("p",[e._v("You can tell the validator to scope the fields by adding a "),o("code",[e._v("data-vv-scope")]),e._v(". Those fields will be then identified using their name and their scope. You can have inputs with the same name in different scopes, and you can display, clear and validate those scopes independently.")]),o("p",[e._v("For convenience, you may add the "),o("code",[e._v("data-vv-scope")]),e._v(" attribute on the form that owns the inputs, you don't have to add the attribute on every input. You can also pass "),o("code",[e._v("scope")]),e._v(" property to the validator expression.")]),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),o("p",[o("code",[e._v("data-vv-scope")]),e._v(" when applied on forms works if the inputs are HTML5 inputs. Custom components would need to define their scope using the attribute.")])]),o("p",[e._v("In the following example, we have two scopes and we operate on either of them independently:")]),o("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/y3504yr0l1?initialpath=%2Fscopes&module=%2Fsrc%2Fcomponents%2FScopes.vue&view=preview",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),o("p",[o("a",{attrs:{href:"https://codesandbox.io/s/y3504yr0l1?initialpath=%2Fscopes&module=%2Fsrc%2Fcomponents%2FScopes.vue",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit VeeValidate Examples"}})])])])}],!1,null,null,null);t.default=a.exports}}]);