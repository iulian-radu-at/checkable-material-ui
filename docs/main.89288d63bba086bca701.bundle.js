(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(320),C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(321),C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(325),C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(326),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(323),_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_FormHelperText_FormHelperText__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(324),_material_ui_core_FormHelperText_FormHelperText__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_FormHelperText_FormHelperText__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(322),_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7__),styles={checkbox:{padding:"0 5px 0 0"},container:{alignItems:"center",display:"flex"},itemLeft:{flexGrow:0},itemRight:{flexGrow:1}},CheckableMaterialUi=function(_React$Component){Object(C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(CheckableMaterialUi,_React$Component);var _super=Object(C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(CheckableMaterialUi);function CheckableMaterialUi(){var _this;Object(C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CheckableMaterialUi);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).isEmpty=function(str){return void 0===str||0===str.length},_this.handleCheckboxClick=function(event,checked){return _this.props.onChange(checked)},_this}return Object(C_Workspace_components_1_checkable_material_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CheckableMaterialUi,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{id:this.props.id,style:this.props.style},this.renderLabel(),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{style:styles.container},react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{style:styles.itemLeft},this.renderCheckbox()),react__WEBPACK_IMPORTED_MODULE_4__.createElement("div",{style:styles.itemRight},this.props.children)),this.renderHelperText())}},{key:"renderLabel",value:function renderLabel(){var label=this.props.label;return this.isEmpty(label)?null:react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_7___default.a,null,label)}},{key:"renderCheckbox",value:function renderCheckbox(){return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a,{checked:this.props.checked,color:"primary",onChange:this.handleCheckboxClick,style:styles.checkbox})}},{key:"renderHelperText",value:function renderHelperText(){var helperText=this.props.helperText;return this.isEmpty(helperText)?null:react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core_FormHelperText_FormHelperText__WEBPACK_IMPORTED_MODULE_6___default.a,null,helperText)}}]),CheckableMaterialUi}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=CheckableMaterialUi},329:function(module,exports,__webpack_require__){__webpack_require__(330),__webpack_require__(476),module.exports=__webpack_require__(477)},394:function(module,exports){},477:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(144);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(666)}),module)}.call(this,__webpack_require__(257)(module))},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _src_CheckableMaterialUi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(112),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(144),style={height:20},showSelectedValue=function showSelectedValue(id){return function(checked){return document.getElementById(id).textContent=checked?"selected":"not selected"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("CheckableMaterialUi",module).addParameters({options:{showPanel:!1}}).add("with a text",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_CheckableMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{onChange:showSelectedValue("cmui1")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong",null,"Bold")," the text"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"cmui1"}))})).add("with label",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_CheckableMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Options for files",onChange:showSelectedValue("cmui2")},"Show hidden files"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"cmui2"}))})).add("with helper text",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_CheckableMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{helperText:"Please select it if you want to see also the hidden files",onChange:showSelectedValue("cmui3")},"Show hidden files"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"cmui3"}))})).add("with a component",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_CheckableMaterialUi__WEBPACK_IMPORTED_MODULE_0__.a,{label:"Do you want only from a specific country?",helperText:"Please select a continent and input the country",onChange:showSelectedValue("cmui4")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{selected:!0},"Europe"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{selected:!0},"America"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option",{selected:!0},"Africa"))," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",placeholder:"Country"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:style}),"Selected value: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{id:"cmui4"}))}))}.call(this,__webpack_require__(257)(module))}},[[329,1,2]]]);
//# sourceMappingURL=main.89288d63bba086bca701.bundle.js.map