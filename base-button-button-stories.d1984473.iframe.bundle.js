(self.webpackChunkmono_angular=self.webpackChunkmono_angular||[]).push([[122],{"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}($event)"`:`[${key}]="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}"`)).join(" ")};const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js")},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.moduleMetadata=void 0,exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/portable-stories.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/portable-stories.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var ownKeys,__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||(ownKeys=function(o){return ownKeys=Object.getOwnPropertyNames||function(o){var ar=[];for(var k in o)Object.prototype.hasOwnProperty.call(o,k)&&(ar[ar.length]=k);return ar},ownKeys(o)},function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k=ownKeys(mod),i=0;i<k.length;i++)"default"!==k[i]&&__createBinding(result,mod,k[i]);return __setModuleDefault(result,mod),result});Object.defineProperty(exports,"__esModule",{value:!0}),exports.setProjectAnnotations=function setProjectAnnotations(projectAnnotations){return(0,preview_api_1.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),(0,preview_api_1.setProjectAnnotations)(projectAnnotations)};const preview_api_1=__webpack_require__("storybook/internal/preview-api"),INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=__importStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"))},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui/src/lib/base/button/button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  align-items: center;\n  background-color: var(--button-background-color);\n  border: none;\n  border-color: var(--button-border-color);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  color: var(--button-text-color);\n  display: inline-flex;\n  gap: 8px;\n  margin: 0;\n  justify-content: center;\n  padding-block: 8px;\n  padding-inline: 16px;\n  text-decoration: none;\n  transition-property: background-color;\n  transition-duration: 200ms;\n  transition-timing-function: ease-out;\n  white-space: nowrap;\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n}\n\n@media (hover: hover) {\n  :host:enabled:hover,\n  :host:any-link:hover {\n    cursor: pointer;\n  }\n}\n\n:host:disabled {\n  cursor: not-allowed;\n  filter: grayscale(1);\n  opacity: 0.6;\n}\n\n:host.kind-primary {\n  --button-background-color: var(--button-primary-default-bg);\n  --button-border-color: var(--button-primary-default-border);\n  --button-text-color: var(--button-primary-default-text);\n\n  &:enabled:hover,\n  &:any-link:hover {\n    --button-background-color: var(--button-primary-hover-bg);\n  }\n}\n\n:host.kind-secondary {\n  --button-background-color: var(--button-secondary-default-bg);\n  --button-border-color: var(--button-secondary-default-border);\n  --button-text-color: var(--button-secondary-default-text);\n\n  &:enabled:hover,\n  &:any-link:hover {\n    --button-background-color: var(--button-secondary-hover-bg);\n  }\n}\n\n:host.kind-tertiary {\n  --button-background-color: var(--button-tertiary-default-bg);\n  --button-border-color: var(--button-tertiary-default-border);\n  --button-text-color: var(--button-tertiary-default-text);\n\n  &:enabled:hover,\n  &:any-link:hover {\n    --button-background-color: var(--button-tertiary-hover-bg);\n  }\n}\n\n:host.kind-destructive {\n  --button-background-color: var(--button-destructive-default-bg);\n  --button-border-color: var(--button-destructive-default-border);\n  --button-text-color: var(--button-destructive-default-text);\n\n  &:enabled:hover,\n  &:any-link:hover {\n    --button-background-color: var(--button-destructive-hover-bg);\n  }\n}\n\n:host.size-small {\n  font: 600 var(--type-text-sm);\n  min-height: 36px;\n  padding-block: 4px;\n  padding-inline: 12px;\n}\n\n:host.size-medium {\n  font: 600 var(--type-text-sm);\n  min-height: 40px;\n  padding-block: 8px;\n  padding-inline: 14px;\n}\n\n:host.size-large {\n  font: 600 var(--type-text-md);\n  min-height: 44px;\n  padding-block: 8px;\n  padding-inline: 16px;\n}\n\n.icon {\n  height: 20px;\n  width: 20px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/base/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Destructive:()=>Destructive,Disabled:()=>Disabled,Icons:()=>Icons,Primary:()=>Primary,Secondary:()=>Secondary,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var client=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}];const storybookArgsToTemplate=args=>Object.entries(args).filter((([_key,value])=>void 0!==value)).map((([key,value])=>isFunctionType(value)?`(${key})="${formatPropInTemplate(key)}($event)"`:createAngularInputProperty({propertyName:key,value:args[key]}))).join(" "),isFunctionType=value=>"function"==typeof value,formatPropInTemplate=propertyName=>/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propertyName)?propertyName:`this['${propertyName}']`;const createAngularInputProperty=({propertyName,value,_argType})=>{let templateValue;switch(typeof value){case"string":templateValue=`'${value}'`;break;case"object":templateValue=function stringifyCircular(obj){const seen=new Set;return JSON.stringify(obj,((_key,value)=>{if("object"==typeof value&&null!==value){if(seen.has(value))return"[Circular]";seen.add(value)}return value}))}(value).replace(/'/g,"’").replace(/\\"/g,"”").replace(/"([^-"]+)":/g,"$1: ").replace(/"/g,"'").replace(/\u2019/g,"\\'").replace(/\u201D/g,"\\'").split(",").join(", ");break;default:templateValue=value}return`[${propertyName}]="${templateValue}"`};var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var buttonngResource=__webpack_require__("./projects/ui/src/lib/base/button/button.css?ngResource"),buttonngResource_default=__webpack_require__.n(buttonngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiSlotDirective=class UiSlotDirective{name=core.input.required({alias:"uiSlot"});static propDecorators={name:[{type:core.Input,args:[{isSignal:!0,alias:"uiSlot",required:!0,transform:void 0}]}]}};UiSlotDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[uiSlot]",standalone:!0})],UiSlotDirective);let UiButtonComponent=class UiButtonComponent{kind=core.input.required();size=core.input.required();slots=(0,core.contentChildren)(UiSlotDirective,{descendants:!0});cssClass=(0,core.computed)((()=>({[`kind-${this.kind()}`]:!!this.kind(),[`size-${this.size()}`]:!!this.size()})));hasStartSlot=(0,core.computed)((()=>this.hasSlot("start")));hasEndSlot=(0,core.computed)((()=>this.hasSlot("end")));hasSlot(name){return this.slots().some((slot=>slot.name()===name))||!1}static propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!0,transform:void 0}]}],slots:[{type:core.ContentChildren,args:[UiSlotDirective,{descendants:!0,isSignal:!0}]}]}};UiButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({host:{"[class]":"cssClass()","[type]":"type || 'button'"},imports:[common.CommonModule],selector:"button[ui-button]",template:'<span class="icon" *ngIf="hasStartSlot()">\n  <ng-content select="[uiSlot=\'start\']" />\n</span>\n<ng-content />\n<span class="icon" *ngIf="hasEndSlot()">\n  <ng-content select="[uiSlot=\'end\']" />\n</span>\n',styles:[buttonngResource_default()]})],UiButtonComponent);var icon_component=__webpack_require__("./projects/ui/src/lib/base/icon/icon.component.ts");const button_stories={component:UiButtonComponent,tags:["autodocs"],decorators:[(0,client.moduleMetadata)({imports:[icon_component.H,UiSlotDirective]})],argTypes:{disabled:{control:{type:"boolean"}},kind:{options:["primary","secondary","tertiary","destructive"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}},start:{options:icon_component.J,control:{type:"select"},table:{category:"Slots",type:{detail:void 0}},description:"uiSlot='start'"},end:{options:icon_component.J,control:{type:"select"},table:{category:"Slots",type:{detail:void 0}},description:"uiSlot='end'"}},args:{size:"medium"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/T06aUcOseXpSG6HzgjrlLP/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v6.0)?node-id=3287-427074&t=0o1DVAmevCvWHWdL-0"}},render:({content,start,end,...args})=>({props:{...args,click:action("click")},template:`\n      <button ui-button ${storybookArgsToTemplate(args)} (click)="click($event)">\n        ${start?`<ui-icon kind="${start}" uiSlot='start' />`:""}\n        ${content}\n        ${end?`<ui-icon kind="${end}" uiSlot='end' />`:""}\n      </button>\n    `})},Primary={args:{kind:"primary",size:"medium",content:"Save"}},Secondary={args:{kind:"secondary",size:"medium",content:"View item"}},Tertiary={args:{kind:"tertiary",size:"medium",content:"Cancel"}},Destructive={args:{kind:"destructive",size:"medium",content:"Delete"}},Disabled={args:{kind:"primary",size:"medium",disabled:!0,content:"Save"}},Icons={args:{kind:"primary",size:"medium",content:"Support",start:"help-circle",end:"link-external"}},__namedExportsOrder=["Primary","Secondary","Tertiary","Destructive","Disabled","Icons"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'primary',\n    size: 'medium',\n    content: 'Save'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'secondary',\n    size: 'medium',\n    content: 'View item'\n  }\n}",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'tertiary',\n    size: 'medium',\n    content: 'Cancel'\n  }\n}",...Tertiary.parameters?.docs?.source}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'destructive',\n    size: 'medium',\n    content: 'Delete'\n  }\n}",...Destructive.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'primary',\n    size: 'medium',\n    disabled: true,\n    content: 'Save'\n  }\n}",...Disabled.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:"{\n  args: {\n    kind: 'primary',\n    size: 'medium',\n    content: 'Support',\n    start: 'help-circle',\n    end: 'link-external'\n  }\n}",...Icons.parameters?.docs?.source}}}},"./projects/ui/src/lib/base/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>UiIconComponent,J:()=>UiIconKinds});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),iconngResource=__webpack_require__("./projects/ui/src/lib/base/icon/icon.css?ngResource"),iconngResource_default=__webpack_require__.n(iconngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),svgIconStore=__webpack_require__("./projects/ui/src/lib/icons/svgIconStore.ts");let UiIconService=class UiIconService{getSvgForName(name){return svgIconStore.J[name]}};UiIconService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],UiIconService);const UiIconKinds=Object.keys(svgIconStore.J);let UiIconComponent=class UiIconComponent{sanitizer=(0,core.inject)(platform_browser.DomSanitizer);iconService=(0,core.inject)(UiIconService);kind=core.input.required();color=(0,core.input)();size=(0,core.input)();svg=(0,core.computed)((()=>{const svgContent=this.iconService.getSvgForName(this.kind());return this.sanitizer.bypassSecurityTrustHtml(svgContent)}));static propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],color:[{type:core.Input,args:[{isSignal:!0,alias:"color",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}]}};UiIconComponent=(0,tslib_es6.Cg)([(0,core.Component)({exportAs:"uiIcon",host:{"[innerHTML]":"svg()","[style.width]":"size()","[style.color]":"color()"},imports:[common.CommonModule],selector:"ui-icon",standalone:!0,template:"",styles:[iconngResource_default()]})],UiIconComponent)},"./projects/ui/src/lib/base/icon/icon.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  align-items: center;\n  aspect-ratio: 1;\n  display: inline-flex;\n  justify-content: center;\n}\n\n:host ::ng-deep svg {\n  fill: currentColor;\n  height: 100%;\n  width: 100%;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/icons/svgIconStore.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>svgIconStore});const svgIconStore={"alert-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"alert-triangle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1.496c-.277 0-.554.057-.812.172-.797.354-.983.937-1.438 1.723L1.525 17.598c-.456.788-.871 1.24-.78 2.109.058.564.355 1.077.814 1.41.707.514 1.306.383 2.216.383h16.45c.91 0 1.51.131 2.216-.383.458-.333.754-.846.813-1.41.09-.87-.323-1.321-.78-2.11L14.25 3.392c-.455-.786-.641-1.369-1.437-1.723A2 2 0 0 0 12 1.496m-.055 1.98q.018.003.055.02c.093-.041.077-.011 0 .098.092.129.273.373.52.799L20.744 18.6c.246.424.367.706.434.851.137-.012.171-.012.088.049-.011.103-.03.075-.088-.049-.16.015-.463.049-.953.049H3.775c-.49 0-.793-.034-.953-.049-.057.124-.077.152-.088.049-.083-.06-.049-.061.088-.049.067-.145.188-.427.434-.851L11.48 4.393c.247-.426.429-.67.52-.8-.056-.079-.085-.12-.055-.116M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"arrow-down":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-1 1v11.586l-5.293-5.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L13 16.586V5a1 1 0 0 0-1-1"/>\n</svg>\n',"arrow-left":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7A1 1 0 0 0 4 12a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H19a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.414l5.293-5.293a1 1 0 0 0 0-1.414A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-right":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .26-.447 1 1 0 0 0 0-.18L20 12a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-up":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L11 7.414V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',calendar:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 1a1 1 0 0 0-1 1v1.014c-1.16.001-2.044.028-2.816.422a4 4 0 0 0-1.748 1.748C1.948 6.14 2 7.12 2 8.8v8.4c0 1.68-.052 2.66.436 3.616a4 4 0 0 0 1.748 1.748C5.14 23.052 6.12 23 7.8 23h8.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V8.8c0-1.68.052-2.66-.436-3.616a4 4 0 0 0-1.748-1.748c-.772-.394-1.657-.42-2.816-.422V2a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H9V2a1 1 0 0 0-1-1m1 4h6v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.936c.813.026 1.678.037 1.908.155.377.192.681.496.873.873.167.327.219 1.029.219 2.709V9H4v-.2c0-1.68.052-2.381.219-2.708.192-.377.496-.681.873-.873.23-.118 1.095-.13 1.908-.155V6a1 1 0 0 0 1 1 1 1 0 0 0 1-1Zm-5 6h16v6.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H7.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C4.052 19.581 4 18.88 4 17.2Z"/>\n</svg>\n',check:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M19.293 5.293 9 15.586l-4.293-4.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0"/>\n</svg>\n',"chevron-down":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 8a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 13.586 6.707 8.293A1 1 0 0 0 6 8"/>\n</svg>\n',"chevron-left":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M15 5a1 1 0 0 0-.707.293l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L10.414 12l5.293-5.293a1 1 0 0 0 0-1.414A1 1 0 0 0 15 5"/>\n</svg>\n',"chevron-right":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M9 5a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L13.586 12l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414l-6-6A1 1 0 0 0 9 5"/>\n</svg>\n',"chevron-up":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="m11.293 8.293-6 6a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 10.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0"/>\n</svg>\n',"clock-rewind":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12.062 1.965q-.322.002-.643.025a10.4 10.4 0 0 0-3.306.793C3.938 4.548.853 9.11 2.355 14.625a10.01 10.01 0 0 0 10.969 7.283 9.98 9.98 0 0 0 7.834-5.894 10 10 0 0 0 .508-1.451 10 10 0 0 0 .125-.557l.201.201a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l.377-.377c-.017.073-.03.148-.049.22a8 8 0 0 1-1.34 2.755 8 8 0 0 1-5.334 3.121A7.986 7.986 0 0 1 4.285 14.1c-1.253-4.601 1.21-8.038 4.607-9.475s7.572-.81 10 3.313a1 1 0 0 0 1.37.353 1 1 0 0 0 .355-1.369c-2.045-3.472-5.332-4.98-8.555-4.957M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.387-.277 1 1 0 0 0-.278-1.387L13 11.465V7a1 1 0 0 0-1-1"/>\n</svg>\n',"dots-vertical":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 3c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2"/>\n</svg>\n',"help-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m-.105 2.996a4 4 0 0 0-3.749 2.672 1 1 0 0 0 .612 1.275 1 1 0 0 0 1.275-.611 1.998 1.998 0 0 1 3.416-.625 2 2 0 0 1 .47 1.291V10c0 .5-.432 1.003-1.054 1.418s-1.261.633-1.261.633a1 1 0 0 0-.633 1.265 1 1 0 0 0 1.265.633s.86-.282 1.739-.867c.877-.585 1.944-1.581 1.945-3.08a4 4 0 0 0-4.025-4.006M12 16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"info-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/>\n</svg>\n',"link-external":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6.662 2c-1.03.008-1.761.07-2.478.436a4 4 0 0 0-1.748 1.748C1.948 5.14 2 6.12 2 7.8v8.398c0 1.68-.052 2.661.436 3.617a4 4 0 0 0 1.748 1.748C5.14 22.052 6.12 22 7.8 22h8.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H7.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C4.052 18.581 4 17.88 4 16.2V7.801c0-1.68.052-2.382.219-2.71.192-.376.496-.68.873-.872C5.419 4.052 6.12 4 7.8 4H10a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-.42 0-.795-.003-1.138 0M15 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1h3.586l-7.293 7.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L20 5.414V9a1 1 0 0 0 1 1 1 1 0 0 0 1-1V3a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398 1 1 0 0 0-.324-.217A1 1 0 0 0 21 2Z"/>\n</svg>\n',"log-out":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6.662 2c-1.03.008-1.761.07-2.478.436a4 4 0 0 0-1.748 1.748C1.948 5.14 2 6.12 2 7.8v8.398c0 1.68-.052 2.661.436 3.617a4 4 0 0 0 1.748 1.748C5.14 22.052 6.12 22 7.8 22H9a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-1.68 0-2.381-.052-2.708-.219a2 2 0 0 1-.873-.873C4.052 18.581 4 17.88 4 16.2V7.801c0-1.68.052-2.382.219-2.71.192-.376.496-.68.873-.872C5.419 4.052 6.12 4 7.8 4H9a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-.42 0-.795-.003-1.138 0m9.182 4.012a1 1 0 0 0-.551.281 1 1 0 0 0 0 1.414L18.586 11H9a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9.586l-3.293 3.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 .26-.627L22 12a1 1 0 0 0-.033-.166 1 1 0 0 0 0-.094l-.028-.049a1 1 0 0 0-.232-.398l-5-5a1 1 0 0 0-.863-.281"/>\n</svg>\n',minus:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M5 11a1 1 0 0 0-1 1 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',settings:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1a2.82 2.82 0 0 0-2.818 2.818v.155a.5.5 0 0 1-.082.27.5.5 0 0 1-.2.165 1 1 0 0 0-.103.022.5.5 0 0 1-.553-.1L8.2 4.285a2.83 2.83 0 0 0-1.994-.828 2.823 2.823 0 0 0-2.82 2.82 2.82 2.82 0 0 0 .826 1.994l.047.047a.5.5 0 0 1 .1.551l-.024.059a.5.5 0 0 1-.457.326h-.059a2.819 2.819 0 0 0 0 5.637h.155a.5.5 0 0 1 .453.302l.004.01a.5.5 0 0 1-.1.553l-.047.047a2.82 2.82 0 0 0-.826 1.992 2.82 2.82 0 0 0 2.82 2.82 2.82 2.82 0 0 0 1.994-.826l.047-.047a.5.5 0 0 1 .551-.1l.059.024a.5.5 0 0 1 .326.457v.059a2.819 2.819 0 0 0 4.81 1.992h.002a2.82 2.82 0 0 0 .825-1.992v-.155a.5.5 0 0 1 .302-.453l.01-.004a.5.5 0 0 1 .553.1l.047.047a2.818 2.818 0 0 0 4.597-3.072v-.002a2.8 2.8 0 0 0-.61-.913v-.002l-.048-.046a.5.5 0 0 1-.1-.551l.005-.01a.5.5 0 0 1 .183-.219V14.9a.5.5 0 0 1 .27-.082h.082a2.819 2.819 0 0 0 0-5.636h-.155a.5.5 0 0 1-.27-.082.5.5 0 0 1-.165-.2 1 1 0 0 0-.022-.103.5.5 0 0 1 .098-.549l.002-.004.045-.045h.002a2.83 2.83 0 0 0 .611-3.074 2.82 2.82 0 0 0-2.605-1.74 2.82 2.82 0 0 0-1.994.826l-.047.047a.5.5 0 0 1-.551.1l-.01-.004a.5.5 0 0 1-.219-.184H14.9a.5.5 0 0 1-.082-.27v-.082A2.82 2.82 0 0 0 12 1m0 2a.817.817 0 0 1 .818.818v.086a2.5 2.5 0 0 0 1.512 2.284 2.5 2.5 0 0 0 2.752-.5l.006-.008.055-.055h.002a.82.82 0 0 1 1.156 0h.002a.82.82 0 0 1 0 1.158l-.055.055-.008.008a2.5 2.5 0 0 0-.673 1.302 2.5 2.5 0 0 0 .132 1.34 1 1 0 0 0 .037.178 2.5 2.5 0 0 0 2.288 1.516h.158A.816.816 0 0 1 21 12a.817.817 0 0 1-.818.818h-.086a2.5 2.5 0 0 0-2.283 1.512c-.2.455-.263.96-.174 1.45h.002a2.5 2.5 0 0 0 .672 1.302l.007.006.055.055v.002a.82.82 0 0 1 0 1.156v.002a.82.82 0 0 1-1.158 0l-.055-.055-.008-.008a2.5 2.5 0 0 0-1.302-.673 2.5 2.5 0 0 0-1.45.173 2.5 2.5 0 0 0-1.511 2.284v.158a.816.816 0 0 1-.819.818.816.816 0 0 1-.818-.818v-.106a2.5 2.5 0 0 0-.465-1.394 2.5 2.5 0 0 0-1.146-.873 2.5 2.5 0 0 0-1.422-.17v.002a2.5 2.5 0 0 0-1.303.672l-.006.007-.055.055h-.002a.82.82 0 0 1-1.156 0h-.002a.82.82 0 0 1 0-1.158l.002-.002.055-.053.006-.008c.35-.357.584-.811.674-1.302a2.5 2.5 0 0 0-.174-1.45 2.5 2.5 0 0 0-2.283-1.511h-.159A.816.816 0 0 1 3 12.072a.816.816 0 0 1 .818-.818h.106a2.5 2.5 0 0 0 1.394-.465c.4-.285.698-.689.873-1.146.191-.45.255-.942.168-1.422a2.5 2.5 0 0 0-.671-1.303L5.68 6.91l-.055-.053v-.002a.82.82 0 0 1 0-1.156v-.002a.82.82 0 0 1 1.158 0l.055.055.008.008c.357.349.811.584 1.302.674.452.081.914.03 1.34-.133a1 1 0 0 0 .178-.037 2.5 2.5 0 0 0 1.516-2.287v-.159A.816.816 0 0 1 12 3m0 5c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2"/>\n</svg>\n',"slash-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1a11 11 0 0 0-2.771.352 11 11 0 0 0-2.735 1.123A11 11 0 0 0 4.547 3.91c-.106.098-.205.203-.307.305l-.017.008-.008.017c-.091.092-.186.18-.274.274A11 11 0 0 0 2.76 6.027 11.04 11.04 0 0 0 1 12c0 6.063 4.937 11 11 11a11 11 0 0 0 5.014-1.207 11 11 0 0 0 1.896-1.234q.187-.15.367-.309.124-.11.245-.225c.085-.08.165-.165.248-.248h.007l.018-.027c.085-.086.174-.168.256-.256a11 11 0 0 0 1.361-1.797 11 11 0 0 0 .86-1.756q.096-.248.181-.503.077-.236.143-.475A11 11 0 0 0 23 12a11 11 0 0 0-7.043-10.266 11 11 0 0 0-2.096-.578l-.295-.045A11 11 0 0 0 12 1m0 2a9 9 0 0 1 1.283.09q.122.017.242.039a9 9 0 0 1 3.448 1.369A8.98 8.98 0 0 1 21 12a9 9 0 0 1-.596 3.225 9 9 0 0 1-1.174 2.134q-.098.131-.2.256L6.382 4.97a9 9 0 0 1 2.11-1.26A8.9 8.9 0 0 1 12 3.002zM4.97 6.385 17.618 19.03a9 9 0 0 1-1.979 1.203A8.9 8.9 0 0 1 12 21c-4.982 0-9-4.018-9-9a9 9 0 0 1 1.72-5.293q.121-.164.25-.323z"/>\n</svg>\n',user:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 2C8.974 2 6.5 4.474 6.5 7.5S8.974 13 12 13s5.5-2.474 5.5-5.5S15.026 2 12 2m0 2c1.945 0 3.5 1.555 3.5 3.5S13.945 11 12 11a3.485 3.485 0 0 1-3.5-3.5C8.5 5.555 10.055 4 12 4M8.56 14.5c-.842.005-1.422.036-2.011.215a5 5 0 0 0-3.334 3.334C2.977 18.834 3 19.604 3 21a1 1 0 0 0 1 1 1 1 0 0 0 1-1c0-1.396.023-2.021.129-2.371a3 3 0 0 1 2-2c.35-.106.975-.129 2.371-.129h5c1.396 0 2.021.023 2.371.129a3 3 0 0 1 2 2c.106.35.129.975.129 2.371a1 1 0 0 0 1 1 1 1 0 0 0 1-1c0-1.396.023-2.166-.215-2.951a5 5 0 0 0-3.334-3.334c-.785-.238-1.555-.215-2.951-.215z"/>\n</svg>\n',"user-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12c0 3.308 1.544 6.185 3.863 8.203a1 1 0 0 0 .063.156 1 1 0 0 0 .17.002C6.999 21.934 9.346 23 12 23s5.001-1.066 6.904-2.639a1 1 0 0 0 .17-.002 1 1 0 0 0 .447-.416C21.641 17.937 23 15.141 23 12c0-6.063-4.937-11-11-11m0 2c4.982 0 9 4.018 9 9 0 2.296-.921 4.333-2.328 5.92C17.752 16.828 16.532 16 15 16H9c-1.531 0-2.753.828-3.672 1.92C3.921 16.333 3 14.296 3 12c0-4.982 4.018-9 9-9m0 1.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5m0 2c1.669 0 3 1.331 3 3s-1.331 3-3 3-3-1.331-3-3 1.331-3 3-3M9 18h6c.93 0 1.659.497 2.207 1.152C15.721 20.235 13.985 21 12 21s-3.721-.765-5.207-1.848C7.341 18.498 8.071 18 9 18"/>\n</svg>\n',"x-close":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 5a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 10.586 6.707 5.293A1 1 0 0 0 6 5"/>\n</svg>\n'}}}]);