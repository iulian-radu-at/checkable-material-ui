"use strict";(self.webpackChunkcheckable_material_ui=self.webpackChunkcheckable_material_ui||[]).push([[552],{"./storybook/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithAComponent:()=>WithAComponent,WithALabel:()=>WithALabel,WithAText:()=>WithAText,WithHelperText:()=>WithHelperText,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),InputLabel=__webpack_require__("./node_modules/@mui/material/InputLabel/InputLabel.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),FormHelperText=__webpack_require__("./node_modules/@mui/material/FormHelperText/FormHelperText.js"),styles={checkbox:{padding:"0 5px 0 0"},container:{alignItems:"center",display:"flex"},itemLeft:{flexGrow:0},itemRight:{flexGrow:1}},CheckableMaterialUi=function(_React$Component){(0,inherits.Z)(CheckableMaterialUi,_React$Component);var _super=(0,createSuper.Z)(CheckableMaterialUi);function CheckableMaterialUi(){var _this;(0,classCallCheck.Z)(this,CheckableMaterialUi);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).isEmpty=function(str){return void 0===str||0===str.length},_this.handleCheckboxClick=function(event,checked){return _this.props.onChange(checked)},_this}return(0,createClass.Z)(CheckableMaterialUi,[{key:"render",value:function render(){var _this$props=this.props,children=_this$props.children,id=_this$props.id,style=_this$props.style;return react.createElement("div",{id:id,style:style},this.renderLabel(),react.createElement("div",{style:styles.container},react.createElement("div",{style:styles.itemLeft},this.renderCheckbox()),react.createElement("div",{style:styles.itemRight},children)),this.renderHelperText())}},{key:"renderLabel",value:function renderLabel(){var label=this.props.label;return this.isEmpty(label)?null:react.createElement(InputLabel.Z,null,label)}},{key:"renderCheckbox",value:function renderCheckbox(){return react.createElement(Checkbox.Z,{checked:this.props.checked,color:"primary",onChange:this.handleCheckboxClick,style:styles.checkbox})}},{key:"renderHelperText",value:function renderHelperText(){var helperText=this.props.helperText;return this.isEmpty(helperText)?null:react.createElement(FormHelperText.Z,null,helperText)}}]),CheckableMaterialUi}(react.Component),style={height:20},showSelectedValue=function(id){return function(checked){return document.getElementById(id).textContent=checked?"selected":"not selected"}};let stories={title:"CheckableMaterialUi",component:CheckableMaterialUi};var WithAText=function(){return react.createElement("div",null,react.createElement(CheckableMaterialUi,{onChange:showSelectedValue("cmui1")},react.createElement("strong",null,"Bold")," the text"),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"cmui1"}))},WithALabel=function(){return react.createElement("div",null,react.createElement(CheckableMaterialUi,{label:"Options for files",onChange:showSelectedValue("cmui2")},"Show hidden files"),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"cmui2"}))},WithHelperText=function(){return react.createElement("div",null,react.createElement(CheckableMaterialUi,{helperText:"Please select it if you want to see also the hidden files",onChange:showSelectedValue("cmui3")},"Show hidden files"),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"cmui3"}))},WithAComponent=function(){return react.createElement("div",null,react.createElement(CheckableMaterialUi,{label:"Do you want only from a specific country?",helperText:"Please select a continent and input the country",onChange:showSelectedValue("cmui4")},react.createElement("select",null,react.createElement("option",{selected:!0},"Europe"),react.createElement("option",{selected:!0},"America"),react.createElement("option",{selected:!0},"Africa"))," ",react.createElement("input",{type:"text",placeholder:"Country"})),react.createElement("div",{style:style}),"Selected value: ",react.createElement("span",{id:"cmui4"}))}}}]);