(self.webpackChunkmono_angular=self.webpackChunkmono_angular||[]).push([[702],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui/src/lib/forms/form-field/form-field.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>UiFormFieldDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiFormFieldDirective=class UiFormFieldDirective{renderer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);_inline=!1;get inline(){return this._inline}set inline(value){this._inline=value}hasError=!1;constructor({inline}){this.inline=inline}setId(id){this.elementRef.nativeElement.id?console.warn(`Input already has ID ${this.elementRef.nativeElement.id}. Input ID and <qai-field inputId="" /> cannot be used together.`):this.renderer.setAttribute(this.elementRef.nativeElement,"id",id)}setAreaDescribedById(id){this.renderer.setAttribute(this.elementRef.nativeElement,"aria-describedby",id)}setHasError(value){this.hasError=value}static ctorParameters=()=>[{type:void 0}]};UiFormFieldDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({host:{"[class.error]":"hasError"}})],UiFormFieldDirective)},"./projects/ui/src/lib/forms/textarea/textarea.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>UiTextareaComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),textareangResource=__webpack_require__("./projects/ui/src/lib/forms/textarea/textarea.css?ngResource"),textareangResource_default=__webpack_require__.n(textareangResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiTextareaAutosizeDirective=class UiTextareaAutosizeDirective{renderer=(0,core.inject)(core.Renderer2);textareaRef=(0,core.inject)(core.ElementRef);uiAutosize=(0,core.input)(!1,{transform:core.booleanAttribute});inputListener;ngOnInit(){if(!this.uiAutosize())return;const textarea=this.textareaRef.nativeElement;CSS.supports("field-sizing","content")||(this.inputListener=this.renderer.listen(textarea,"input",(()=>{this.adjustHeight(textarea)})),this.adjustHeight(textarea))}ngOnDestroy(){this.inputListener?.()}adjustHeight(textarea){this.renderer.setStyle(textarea,"height","auto");const newHeight=`${textarea.scrollHeight+2}px`;this.renderer.setStyle(textarea,"height",newHeight)}static propDecorators={uiAutosize:[{type:core.Input,args:[{isSignal:!0,alias:"uiAutosize",required:!1,transform:void 0}]}]}};UiTextareaAutosizeDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"textarea[uiAutosize]",standalone:!0})],UiTextareaAutosizeDirective);var form_field_directive=__webpack_require__("./projects/ui/src/lib/forms/form-field/form-field.directive.ts");let UiTextareaComponent=class UiTextareaComponent extends form_field_directive.E{autosize=(0,core.input)(!1,{transform:core.booleanAttribute});constructor(){super({inline:!1})}cssClass=(0,core.computed)((()=>({autosize:this.autosize()})));static ctorParameters=()=>[];static propDecorators={autosize:[{type:core.Input,args:[{isSignal:!0,alias:"autosize",required:!1,transform:void 0}]}]}};UiTextareaComponent=(0,tslib_es6.Cg)([(0,core.Component)({exportAs:"uiTextarea",host:{"[class]":"cssClass()"},hostDirectives:[{directive:UiTextareaAutosizeDirective,inputs:["uiAutosize: autosize"]}],providers:[{provide:form_field_directive.E,useExisting:(0,core.forwardRef)((()=>UiTextareaComponent))}],selector:"textarea[ui-textarea]",standalone:!0,template:"<ng-content />",styles:[textareangResource_default()]})],UiTextareaComponent)},"./projects/ui/src/lib/forms/textarea/textarea.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  background-color: var(--bg-primary);\n  border-color: var(--border-primary);\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 1px;\n  box-sizing: border-box;\n  color: var(--text-primary);\n  display: block;\n  font: 400 var(--type-text-md);\n  min-height: 70px;\n  padding-block: 8px;\n  padding-inline: 12px;\n  resize: none;\n  width: 100%;\n}\n\n@supports (field-sizing: content) {\n  :host.autosize {\n    field-sizing: content;\n  }\n}\n\n:host::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n:host::placeholder {\n  color: var(--text-placeholder);\n}\n\n:host:read-only {\n  background-color: var(--bg-disabled);\n  border-color: var(--border-disabled);\n  color: var(--text-disabled);\n}\n\n:host:disabled {\n  background-color: var(--bg-disabled);\n  border-color: var(--border-disabled);\n  color: var(--text-disabled);\n  cursor: not-allowed;\n}\n\n:host.error {\n  border-color: var(--border-error);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/forms/textarea/textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoSize:()=>AutoSize,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybookArgsToTemplate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/ui/src/lib/utils/storybookArgsToTemplate.ts");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./projects/ui/src/lib/forms/textarea/textarea.component.ts").k,tags:["autodocs"],argTypes:{autosize:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},name:{control:{type:"text"}},value:{control:{type:"text"}}},args:{value:"More it show yet arrange now, the for afforded everything than many acknowledge his plan objects including tones at on because for function."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=1238-278&t=zIQCmerxWCcvw2xE-0"},docs:{description:{component:"Use with [form-field](/story/forms-form-field--textarea) component"}}},render:args=>({props:args,template:`<textarea ui-textarea ${(0,_utils_storybookArgsToTemplate__WEBPACK_IMPORTED_MODULE_1__.N)(args)}></textarea>`})},Default={},Disabled={args:{disabled:!0}},AutoSize={args:{autosize:!0}},__namedExportsOrder=["Default","Disabled","AutoSize"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},AutoSize.parameters={...AutoSize.parameters,docs:{...AutoSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    autosize: true\n  }\n}",...AutoSize.parameters?.docs?.source},description:{story:"Uses CSS `field-sizing` in browsers that support it.\nIf not, uses input event handler to set the height.",...AutoSize.parameters?.docs?.description}}}},"./projects/ui/src/lib/utils/storybookArgsToTemplate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>storybookArgsToTemplate});const storybookArgsToTemplate=args=>Object.entries(args).filter((([_key,value])=>void 0!==value)).map((([key,value])=>isFunctionType(value)?`(${key})="${formatPropInTemplate(key)}($event)"`:createAngularInputProperty({propertyName:key,value:args[key]}))).join(" "),isFunctionType=value=>"function"==typeof value,formatPropInTemplate=propertyName=>/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propertyName)?propertyName:`this['${propertyName}']`;const createAngularInputProperty=({propertyName,value,_argType})=>{let templateValue;switch(typeof value){case"string":templateValue=`'${value}'`;break;case"object":templateValue=function stringifyCircular(obj){const seen=new Set;return JSON.stringify(obj,((_key,value)=>{if("object"==typeof value&&null!==value){if(seen.has(value))return"[Circular]";seen.add(value)}return value}))}(value).replace(/'/g,"’").replace(/\\"/g,"”").replace(/"([^-"]+)":/g,"$1: ").replace(/"/g,"'").replace(/\u2019/g,"\\'").replace(/\u201D/g,"\\'").split(",").join(", ");break;default:templateValue=value}return`[${propertyName}]="${templateValue}"`}}}]);