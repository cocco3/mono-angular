(self.webpackChunkmono_angular=self.webpackChunkmono_angular||[]).push([[276],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/ui/src/lib/base/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>UiIconComponent,J:()=>UiIconKinds});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),iconngResource=__webpack_require__("./projects/ui/src/lib/base/icon/icon.css?ngResource"),iconngResource_default=__webpack_require__.n(iconngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),svgIconStore=__webpack_require__("./projects/ui/src/lib/icons/svgIconStore.ts");let UiIconService=class UiIconService{getSvgForName(name){return svgIconStore.J[name]}};UiIconService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],UiIconService);const UiIconKinds=Object.keys(svgIconStore.J);let UiIconComponent=class UiIconComponent{sanitizer=(0,core.inject)(platform_browser.DomSanitizer);iconService=(0,core.inject)(UiIconService);kind=core.input.required();color=(0,core.input)();size=(0,core.input)();svg=(0,core.computed)((()=>{const svgContent=this.iconService.getSvgForName(this.kind());return this.sanitizer.bypassSecurityTrustHtml(svgContent)}));static propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],color:[{type:core.Input,args:[{isSignal:!0,alias:"color",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}]}};UiIconComponent=(0,tslib_es6.Cg)([(0,core.Component)({exportAs:"uiIcon",host:{"[innerHTML]":"svg()","[style.width]":"size()","[style.color]":"color()"},selector:"ui-icon",standalone:!0,template:"",styles:[iconngResource_default()]})],UiIconComponent)},"./projects/ui/src/lib/base/icon/icon.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  align-items: center;\n  aspect-ratio: 1;\n  display: inline-flex;\n  justify-content: center;\n}\n\n:host ::ng-deep svg {\n  fill: currentColor;\n  height: 100%;\n  width: 100%;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/ui/src/lib/icons/svgIconStore.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>svgIconStore});const svgIconStore={"alert-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"alert-triangle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1.496c-.277 0-.554.057-.812.172-.797.354-.983.937-1.438 1.723L1.525 17.598c-.456.788-.871 1.24-.78 2.109.058.564.355 1.077.814 1.41.707.514 1.306.383 2.216.383h16.45c.91 0 1.51.131 2.216-.383.458-.333.754-.846.813-1.41.09-.87-.323-1.321-.78-2.11L14.25 3.392c-.455-.786-.641-1.369-1.437-1.723A2 2 0 0 0 12 1.496m-.055 1.98q.018.003.055.02c.093-.041.077-.011 0 .098.092.129.273.373.52.799L20.744 18.6c.246.424.367.706.434.851.137-.012.171-.012.088.049-.011.103-.03.075-.088-.049-.16.015-.463.049-.953.049H3.775c-.49 0-.793-.034-.953-.049-.057.124-.077.152-.088.049-.083-.06-.049-.061.088-.049.067-.145.188-.427.434-.851L11.48 4.393c.247-.426.429-.67.52-.8-.056-.079-.085-.12-.055-.116M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"arrow-down":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-1 1v11.586l-5.293-5.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L13 16.586V5a1 1 0 0 0-1-1"/>\n</svg>\n',"arrow-left":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7A1 1 0 0 0 4 12a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H19a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.414l5.293-5.293a1 1 0 0 0 0-1.414A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-right":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .26-.447 1 1 0 0 0 0-.18L20 12a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-up":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L11 7.414V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',calendar:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 1a1 1 0 0 0-1 1v1.014c-1.16.001-2.044.028-2.816.422a4 4 0 0 0-1.748 1.748C1.948 6.14 2 7.12 2 8.8v8.4c0 1.68-.052 2.66.436 3.616a4 4 0 0 0 1.748 1.748C5.14 23.052 6.12 23 7.8 23h8.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V8.8c0-1.68.052-2.66-.436-3.616a4 4 0 0 0-1.748-1.748c-.772-.394-1.657-.42-2.816-.422V2a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H9V2a1 1 0 0 0-1-1m1 4h6v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.936c.813.026 1.678.037 1.908.155.377.192.681.496.873.873.167.327.219 1.029.219 2.709V9H4v-.2c0-1.68.052-2.381.219-2.708.192-.377.496-.681.873-.873.23-.118 1.095-.13 1.908-.155V6a1 1 0 0 0 1 1 1 1 0 0 0 1-1Zm-5 6h16v6.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H7.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C4.052 19.581 4 18.88 4 17.2Z"/>\n</svg>\n',check:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M19.293 5.293 9 15.586l-4.293-4.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0"/>\n</svg>\n',"chevron-down":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 8a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 13.586 6.707 8.293A1 1 0 0 0 6 8"/>\n</svg>\n',"chevron-left":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M15 5a1 1 0 0 0-.707.293l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L10.414 12l5.293-5.293a1 1 0 0 0 0-1.414A1 1 0 0 0 15 5"/>\n</svg>\n',"chevron-right":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M9 5a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L13.586 12l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414l-6-6A1 1 0 0 0 9 5"/>\n</svg>\n',"chevron-up":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="m11.293 8.293-6 6a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 10.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0"/>\n</svg>\n',"clock-rewind":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12.062 1.965q-.322.002-.643.025a10.4 10.4 0 0 0-3.306.793C3.938 4.548.853 9.11 2.355 14.625a10.01 10.01 0 0 0 10.969 7.283 9.98 9.98 0 0 0 7.834-5.894 10 10 0 0 0 .508-1.451 10 10 0 0 0 .125-.557l.201.201a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l.377-.377c-.017.073-.03.148-.049.22a8 8 0 0 1-1.34 2.755 8 8 0 0 1-5.334 3.121A7.986 7.986 0 0 1 4.285 14.1c-1.253-4.601 1.21-8.038 4.607-9.475s7.572-.81 10 3.313a1 1 0 0 0 1.37.353 1 1 0 0 0 .355-1.369c-2.045-3.472-5.332-4.98-8.555-4.957M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .445.832l3 2a1 1 0 0 0 1.387-.277 1 1 0 0 0-.278-1.387L13 11.465V7a1 1 0 0 0-1-1"/>\n</svg>\n',countdown:'<svg version="1.0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\n  <path d="M258.97 2.588c-11.775-.088-23.875.062-27.975.512-66 7.4-123 37-166.8 86.6-29.7 33.8-49.5 75.3-58.1 121.8-3 15.9-3.1 18-3.5 39-.5 26 1.4 44.2 7 67 2.6 10.7 8.5 28.599 10.9 33.199.8 1.5 1.5 3.3 1.5 4 0 4.1 27.6 51.9 31.9 55.3.4.3 1.7 1.8 3 3.5 6.4 8.4 17.4 20.1 28.1 30 9.8 9 12.301 11.002 21.801 17.802 4.8 3.4 8.9 6.399 9.2 6.699s1.6 1.2 3 1.9c1.4.8 7 4.099 12.5 7.299 12.5 7.3 38.5 18.701 48.5 21.301.8.3 5.8 1.6 11 2.9 20 5.3 38.9 7.9 58 8l14.6.1 5.5-3.3c11.4-7 15.4-20.6 9.5-32.7-5.4-10.9-12.3-14.1-32.6-14.9-7.4-.3-15.3-.899-17.5-1.199-9.6-1.4-27.6-5.7-37.4-9-13.2-4.4-39.4-17.1-38.5-18.6.4-.7.199-.8-.401-.4-.7.4-3.999-1.2-7.399-3.5-27-18.1-47.002-39.3-64.602-68.4-4-6.6-11.5-22.4-14.6-30.9-3.8-10-9-29.5-10.1-37.6-.3-2.5-.9-7-1.3-10-1.5-11.6-.5-53.1 1.4-56.1.2-.3.5-2.1.8-4 1.8-13.6 9.1-35.4 17.5-52.4 20.7-41.6 53-73.7 94.3-93.5 18-8.5 43.3-16.6 51.8-16.5 1.4 0 2.7-.3 3-.7 1-1.2 10-1.9 29.5-2.3 21.4-.4 30 .4 48.2 4.4 35 7.9 66.102 24.599 96.102 51.799l5.299 4.9-11.4 11.4c-12.4 12.5-13.7 14.3-13.7 19 0 3.8 4.7 9 8.2 9.1 1.3 0 20.9.101 43.5.201 33.4 0 41.8-.2 43.9-1.3 5.3-2.9 5.4-3.4 5.4-49.5 0-46.8 0-47-6-49.5-5.9-2.4-8.6-.901-22.1 12.6l-12.6 12.6-2.4-2.899c-2.6-3-17.1-16-22.9-20.5-33.5-25.8-71.7-42.801-112-49.701-6.3-1.1-13.1-2.3-15-2.6-2.8-.5-14.25-.824-26.025-.912zm-2.723 101.18a28 28 0 0 0-4.351.328c-2.5.4-5.9 1.401-7.5 2.201-4.7 2.4-11.1 10.098-12.5 14.898-.9 3.2-1.201 21.501-1.201 72.301-.1 67.1 0 68.1 2 72.5 2.7 5.8 8.6 11.4 14.2 13.6 4 1.6 8.8 1.801 47.6 1.801h43.1l4.801-2.4c19.9-9.6 20-36.6.1-46-4.8-2.3-5.6-2.4-33-2.4l-28-.1-.1-53.5c-.1-52-.2-53.6-2.2-58-4.463-9.625-12.983-15.193-22.948-15.23zm228.61 127.07a24.7 24.7 0 0 0-4.757.353c-9.9 1.7-18.2 9.602-20 19.102-.8 4.4-2.1 22.9-2.3 33.3 0 3.7 4.4 14.1 7 16.1 7.4 5.9 12.3 7.7 20.6 7.4 12.2-.4 21.5-9.2 23-21.6 1.4-11.1 1.8-32.3.7-36.2-2.888-10.674-13.201-18.211-24.242-18.454zm-26.895 101.5c-1.237 0-2.062.05-2.162.15-.2.3-1.3.601-2.4.801-2.6.4-9.5 4.6-11.6 7.2-.9 1.1-4 6.3-6.9 11.5-2.8 5.2-6.5 11.4-8.1 13.8-4.5 6.5-6 11.1-5.9 17.5.1 9.8 4.799 17.4 13.6 22 6.1 3.2 16.4 2.899 23.1-.601 6-3.1 9.2-6.599 15.9-17.898 10.1-16.9 11.798-20.801 12.198-28.301.4-6.3.202-7.6-2.398-12.5-4.3-8-12.001-13-20.701-13.5-1.75-.1-3.4-.15-4.637-.15zm-75.426 88.738c-3.087.037-6.087.411-8.037 1.111-1.6.6-6.1 3.1-9.9 5.5-10.1 6.5-32.2 17.301-40.6 19.801-4.9 1.5-9.7 5.4-13.1 10.6-3.2 5-3.4 5.9-3.4 13.4.1 8.9 1.4 12.5 7 18 7.4 7.5 16.798 9.3 27.698 5.4 7.9-2.8 29.6-12.6 36.4-16.5 19.1-10.8 24.501-15.2 27.701-22.4 2.6-5.9 2.5-14.4-.4-20.5-2.6-5.5-9.8-12.1-14.801-13.5-2.3-.65-5.475-.949-8.562-.912z"/>\n</svg>\n',"dots-vertical":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 3c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2"/>\n</svg>\n',"help-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m-.105 2.996a4 4 0 0 0-3.749 2.672 1 1 0 0 0 .612 1.275 1 1 0 0 0 1.275-.611 1.998 1.998 0 0 1 3.416-.625 2 2 0 0 1 .47 1.291V10c0 .5-.432 1.003-1.054 1.418s-1.261.633-1.261.633a1 1 0 0 0-.633 1.265 1 1 0 0 0 1.265.633s.86-.282 1.739-.867c.877-.585 1.944-1.581 1.945-3.08a4 4 0 0 0-4.025-4.006M12 16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"info-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/>\n</svg>\n',"link-external":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6.662 2c-1.03.008-1.761.07-2.478.436a4 4 0 0 0-1.748 1.748C1.948 5.14 2 6.12 2 7.8v8.398c0 1.68-.052 2.661.436 3.617a4 4 0 0 0 1.748 1.748C5.14 22.052 6.12 22 7.8 22h8.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H7.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C4.052 18.581 4 17.88 4 16.2V7.801c0-1.68.052-2.382.219-2.71.192-.376.496-.68.873-.872C5.419 4.052 6.12 4 7.8 4H10a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-.42 0-.795-.003-1.138 0M15 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1h3.586l-7.293 7.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L20 5.414V9a1 1 0 0 0 1 1 1 1 0 0 0 1-1V3a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398 1 1 0 0 0-.324-.217A1 1 0 0 0 21 2Z"/>\n</svg>\n',"log-out":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6.662 2c-1.03.008-1.761.07-2.478.436a4 4 0 0 0-1.748 1.748C1.948 5.14 2 6.12 2 7.8v8.398c0 1.68-.052 2.661.436 3.617a4 4 0 0 0 1.748 1.748C5.14 22.052 6.12 22 7.8 22H9a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-1.68 0-2.381-.052-2.708-.219a2 2 0 0 1-.873-.873C4.052 18.581 4 17.88 4 16.2V7.801c0-1.68.052-2.382.219-2.71.192-.376.496-.68.873-.872C5.419 4.052 6.12 4 7.8 4H9a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.8c-.42 0-.795-.003-1.138 0m9.182 4.012a1 1 0 0 0-.551.281 1 1 0 0 0 0 1.414L18.586 11H9a1 1 0 0 0-1 1 1 1 0 0 0 1 1h9.586l-3.293 3.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 .26-.627L22 12a1 1 0 0 0-.033-.166 1 1 0 0 0 0-.094l-.028-.049a1 1 0 0 0-.232-.398l-5-5a1 1 0 0 0-.863-.281"/>\n</svg>\n',minus:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M5 11a1 1 0 0 0-1 1 1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',settings:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1a2.82 2.82 0 0 0-2.818 2.818v.155a.5.5 0 0 1-.082.27.5.5 0 0 1-.2.165 1 1 0 0 0-.103.022.5.5 0 0 1-.553-.1L8.2 4.285a2.83 2.83 0 0 0-1.994-.828 2.823 2.823 0 0 0-2.82 2.82 2.82 2.82 0 0 0 .826 1.994l.047.047a.5.5 0 0 1 .1.551l-.024.059a.5.5 0 0 1-.457.326h-.059a2.819 2.819 0 0 0 0 5.637h.155a.5.5 0 0 1 .453.302l.004.01a.5.5 0 0 1-.1.553l-.047.047a2.82 2.82 0 0 0-.826 1.992 2.82 2.82 0 0 0 2.82 2.82 2.82 2.82 0 0 0 1.994-.826l.047-.047a.5.5 0 0 1 .551-.1l.059.024a.5.5 0 0 1 .326.457v.059a2.819 2.819 0 0 0 4.81 1.992h.002a2.82 2.82 0 0 0 .825-1.992v-.155a.5.5 0 0 1 .302-.453l.01-.004a.5.5 0 0 1 .553.1l.047.047a2.818 2.818 0 0 0 4.597-3.072v-.002a2.8 2.8 0 0 0-.61-.913v-.002l-.048-.046a.5.5 0 0 1-.1-.551l.005-.01a.5.5 0 0 1 .183-.219V14.9a.5.5 0 0 1 .27-.082h.082a2.819 2.819 0 0 0 0-5.636h-.155a.5.5 0 0 1-.27-.082.5.5 0 0 1-.165-.2 1 1 0 0 0-.022-.103.5.5 0 0 1 .098-.549l.002-.004.045-.045h.002a2.83 2.83 0 0 0 .611-3.074 2.82 2.82 0 0 0-2.605-1.74 2.82 2.82 0 0 0-1.994.826l-.047.047a.5.5 0 0 1-.551.1l-.01-.004a.5.5 0 0 1-.219-.184H14.9a.5.5 0 0 1-.082-.27v-.082A2.82 2.82 0 0 0 12 1m0 2a.817.817 0 0 1 .818.818v.086a2.5 2.5 0 0 0 1.512 2.284 2.5 2.5 0 0 0 2.752-.5l.006-.008.055-.055h.002a.82.82 0 0 1 1.156 0h.002a.82.82 0 0 1 0 1.158l-.055.055-.008.008a2.5 2.5 0 0 0-.673 1.302 2.5 2.5 0 0 0 .132 1.34 1 1 0 0 0 .037.178 2.5 2.5 0 0 0 2.288 1.516h.158A.816.816 0 0 1 21 12a.817.817 0 0 1-.818.818h-.086a2.5 2.5 0 0 0-2.283 1.512c-.2.455-.263.96-.174 1.45h.002a2.5 2.5 0 0 0 .672 1.302l.007.006.055.055v.002a.82.82 0 0 1 0 1.156v.002a.82.82 0 0 1-1.158 0l-.055-.055-.008-.008a2.5 2.5 0 0 0-1.302-.673 2.5 2.5 0 0 0-1.45.173 2.5 2.5 0 0 0-1.511 2.284v.158a.816.816 0 0 1-.819.818.816.816 0 0 1-.818-.818v-.106a2.5 2.5 0 0 0-.465-1.394 2.5 2.5 0 0 0-1.146-.873 2.5 2.5 0 0 0-1.422-.17v.002a2.5 2.5 0 0 0-1.303.672l-.006.007-.055.055h-.002a.82.82 0 0 1-1.156 0h-.002a.82.82 0 0 1 0-1.158l.002-.002.055-.053.006-.008c.35-.357.584-.811.674-1.302a2.5 2.5 0 0 0-.174-1.45 2.5 2.5 0 0 0-2.283-1.511h-.159A.816.816 0 0 1 3 12.072a.816.816 0 0 1 .818-.818h.106a2.5 2.5 0 0 0 1.394-.465c.4-.285.698-.689.873-1.146.191-.45.255-.942.168-1.422a2.5 2.5 0 0 0-.671-1.303L5.68 6.91l-.055-.053v-.002a.82.82 0 0 1 0-1.156v-.002a.82.82 0 0 1 1.158 0l.055.055.008.008c.357.349.811.584 1.302.674.452.081.914.03 1.34-.133a1 1 0 0 0 .178-.037 2.5 2.5 0 0 0 1.516-2.287v-.159A.816.816 0 0 1 12 3m0 5c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4m0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2"/>\n</svg>\n',"slash-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1a11 11 0 0 0-2.771.352 11 11 0 0 0-2.735 1.123A11 11 0 0 0 4.547 3.91c-.106.098-.205.203-.307.305l-.017.008-.008.017c-.091.092-.186.18-.274.274A11 11 0 0 0 2.76 6.027 11.04 11.04 0 0 0 1 12c0 6.063 4.937 11 11 11a11 11 0 0 0 5.014-1.207 11 11 0 0 0 1.896-1.234q.187-.15.367-.309.124-.11.245-.225c.085-.08.165-.165.248-.248h.007l.018-.027c.085-.086.174-.168.256-.256a11 11 0 0 0 1.361-1.797 11 11 0 0 0 .86-1.756q.096-.248.181-.503.077-.236.143-.475A11 11 0 0 0 23 12a11 11 0 0 0-7.043-10.266 11 11 0 0 0-2.096-.578l-.295-.045A11 11 0 0 0 12 1m0 2a9 9 0 0 1 1.283.09q.122.017.242.039a9 9 0 0 1 3.448 1.369A8.98 8.98 0 0 1 21 12a9 9 0 0 1-.596 3.225 9 9 0 0 1-1.174 2.134q-.098.131-.2.256L6.382 4.97a9 9 0 0 1 2.11-1.26A8.9 8.9 0 0 1 12 3.002zM4.97 6.385 17.618 19.03a9 9 0 0 1-1.979 1.203A8.9 8.9 0 0 1 12 21c-4.982 0-9-4.018-9-9a9 9 0 0 1 1.72-5.293q.121-.164.25-.323z"/>\n</svg>\n',user:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 2C8.974 2 6.5 4.474 6.5 7.5S8.974 13 12 13s5.5-2.474 5.5-5.5S15.026 2 12 2m0 2c1.945 0 3.5 1.555 3.5 3.5S13.945 11 12 11a3.485 3.485 0 0 1-3.5-3.5C8.5 5.555 10.055 4 12 4M8.56 14.5c-.842.005-1.422.036-2.011.215a5 5 0 0 0-3.334 3.334C2.977 18.834 3 19.604 3 21a1 1 0 0 0 1 1 1 1 0 0 0 1-1c0-1.396.023-2.021.129-2.371a3 3 0 0 1 2-2c.35-.106.975-.129 2.371-.129h5c1.396 0 2.021.023 2.371.129a3 3 0 0 1 2 2c.106.35.129.975.129 2.371a1 1 0 0 0 1 1 1 1 0 0 0 1-1c0-1.396.023-2.166-.215-2.951a5 5 0 0 0-3.334-3.334c-.785-.238-1.555-.215-2.951-.215z"/>\n</svg>\n',"user-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12c0 3.308 1.544 6.185 3.863 8.203a1 1 0 0 0 .063.156 1 1 0 0 0 .17.002C6.999 21.934 9.346 23 12 23s5.001-1.066 6.904-2.639a1 1 0 0 0 .17-.002 1 1 0 0 0 .447-.416C21.641 17.937 23 15.141 23 12c0-6.063-4.937-11-11-11m0 2c4.982 0 9 4.018 9 9 0 2.296-.921 4.333-2.328 5.92C17.752 16.828 16.532 16 15 16H9c-1.531 0-2.753.828-3.672 1.92C3.921 16.333 3 14.296 3 12c0-4.982 4.018-9 9-9m0 1.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5m0 2c1.669 0 3 1.331 3 3s-1.331 3-3 3-3-1.331-3-3 1.331-3 3-3M9 18h6c.93 0 1.659.497 2.207 1.152C15.721 20.235 13.985 21 12 21s-3.721-.765-5.207-1.848C7.341 18.498 8.071 18 9 18"/>\n</svg>\n',"x-close":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 5a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 10.586 6.707 5.293A1 1 0 0 0 6 5"/>\n</svg>\n'}}}]);