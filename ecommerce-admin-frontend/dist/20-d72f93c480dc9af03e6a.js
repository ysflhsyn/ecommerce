(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1096:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(94),i=n(454),l=n(93),s=n(461),u=(n(460),n(455)),c=n(453),f=n.n(c),d=n(468),m=n(473);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=function(e){return r.a.createElement(m.a,p({},e,{columns:[{Header:r.a.createElement(l.a,{id:"unit_of_measurement.id",defaultMessage:"Id"}),accessor:"id",filterable:!1},{Header:r.a.createElement(l.a,{id:"unit_of_measurement.table.name",defaultMessage:"Display Name"}),accessor:"name",filterable:!1,Cell:function(e){return Object(u.a)(e.original.displayName)}},{Header:r.a.createElement(l.a,{id:"unit_of_measurement.table.description",defaultMessage:"description"}),accessor:"description",filterable:!1},{Header:r.a.createElement(l.a,{id:"unit_of_measurement.table.active",defaultMessage:"Active"}),accessor:"active",style:{overflow:"visible"},headerStyle:{overflow:"visible"},Cell:function(e){return r.a.createElement("i",{className:f()(["fa",{"fa-check text-success":e.original.active,"fa-times text-danger":!e.original.active}])})},Filter:function(e){return r.a.createElement(d.a,p({},e,{options:[{value:"YES",label:"yes"},{value:"NO",label:"no"},{value:"ALL",label:"all"}]}))}}]}))},b=(n(464),n(456)),y=n(466),g=n(465),v=n(507),w=n(469);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=Object(l.d)({main:{id:"unit_of_measurement.form.link.main_information",defaultMessage:"Əsas məlumatlar"},localization:{id:"unit_of_measurement.form.link.localization",defaultMessage:"Localization"}}),M=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?S(e):t}(this,O(n).call(this,e))).toggle=t.toggle.bind(S(t)),t.state={activeTab:"1",navLinks:[{tab:"1",title:e.intl.formatMessage(C.main),fields:["code","displayName"]}]},t.validation=y.object().shape({displayName:y.array().test("localization",e.intl.formatMessage(g.a.required),function(e){return e.length&&0<=e.findIndex(function(e){return"az"===e.language&&0<e.translation.length})})}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,r.a.Component),function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(n,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"submit",value:function(e){this.props.onSubmit(e)}},{key:"render",value:function(){var e=this,t=this.props.formData;return r.a.createElement(b.b,{initialValues:{id:t.id,displayName:t.displayName||[],description:t.description||""},onSubmit:this.submit.bind(this),validationSchema:this.validation,validateOnBlur:!1,validateOnChange:!1},function(t){return e.props.bindSubmit(t.handleSubmit),r.a.createElement("form",{onSubmit:t.handleSubmit},r.a.createElement(w.a,{active:e.state.activeTab,links:e.state.navLinks,onClick:e.toggle.bind(e),errors:t.errors}),r.a.createElement(i.t,{activeTab:e.state.activeTab},r.a.createElement(i.u,{tabId:"1"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-6"},r.a.createElement(v.a,{error:t.errors.displayName,values:t.values.displayName,onValueChange:function(e){t.setFieldValue("displayName",e)}}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},r.a.createElement(l.a,{id:"unit_of_measurement.form.description.label",defaultMessage:"Description"})),r.a.createElement(b.a,{type:"text",className:"form-control",name:"description"})))),r.a.createElement("button",{className:"hidden",type:"submit",style:{display:"none"}}))))})}}]),n}(),j=Object(l.e)(M),T=n(463),N=n.n(T),x=n(41),P=n(478);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=Object(l.d)({updateSuccessMsg:{id:"unit_of_measurement.update_success_msg",defaultMessage:"Unit updated successfully"},createdSuccessMsg:{id:"unit_of_measurement.create_success_msg",defaultMessage:"Unit created successfully"},deleteSuccessMessage:{id:"unit_of_measurement.delete_success_msg",defaultMessage:"Unit deleted successfully"}}),R=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?A(e):t}(this,D(n).call(this,e))).state={loading:!1,list:[],initialSearch:!0,selected:null,showForm:!1,filter:e.filter||"",filtered:e.filtered||[{id:"active",value:{value:"YES",label:"Yes"}}],page:0},t.tableState=null,t.fetchTimeout=!1,t.filterUrl="measure-units/filtered/",t.onFetchData=P.a.bind(A(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(n,r.a.Component),function(e,t,n){t&&B(e.prototype,t),n&&B(e,n)}(n,[{key:"componentDidMount",value:function(){}},{key:"onChangeFilter",value:function(e){this.setState({filter:e}),this.onFetchData()}},{key:"onFilteredChange",value:function(e){this.setState({filtered:e})}},{key:"onClickRow",value:function(t){this.setState(function(e){return e.selected=t.index===e.selected?null:t.index,e})}},{key:"edit",value:function(){var t=this;o.a.get("measure-unit/".concat(this.state.list[this.state.selected].id)).then(function(e){t.setState({showForm:!0,form:e.data})})}},{key:"add",value:function(){this.setState({selected:null,showForm:!0,form:{}})}},{key:"back",value:function(){this.setState({showForm:!1})}},{key:"save",value:function(){this.formSubmit()}},{key:"dissmissAlert",value:function(){this.setState({alertMsg:null,sweetAlertMsg:null})}},{key:"delete",value:function(){var t=this,n=this.state.list[this.state.selected];o.a.post("measure-unit/delete/".concat(n.id)).then(function(e){"ERROR"===e.data.response?t.setState({saving:!1,sweetAlertMsg:t.renderDeleteErrorMessage(e.data.errorText,n)}):(t.setState({alertMsg:t.props.intl.formatMessage(I.deleteSuccessMessage)}),setTimeout(function(){return t.dissmissAlert()},2e3))})}},{key:"submit",value:function(t){var n=this;this.setState({saving:!0}),(t.id?o.a.put("measure-unit",t):o.a.post("measure-unit",t)).then(function(e){n.setState({saving:!1,showForm:!1,alertMsg:n.props.intl.formatMessage(t.id?I.updateSuccessMsg:I.createdSuccessMsg)}),n.onFetchData(),setTimeout(function(){return n.dissmissAlert()},2e3)}).catch(function(e){n.setState({saving:!1,sweetAlertMsg:e.response.data.message})})}},{key:"render",value:function(){var t=this;return r.a.createElement(i.f,null,r.a.createElement(i.g,null,r.a.createElement(x.a,{portal:!0,show:this.state.saving,size:60,delay:800}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement(i.h,null,r.a.createElement(l.a,{id:"unit_of_measurement.title",defaultMessage:"Unit of measurements"}))),r.a.createElement("div",{className:"col-9"},r.a.createElement(s.a,{hideBack:!this.state.showForm,disableSave:!this.state.showForm||this.state.saving,disableEdit:null===this.state.selected,disableDelete:null===this.state.selected,confirmDelete:!0,disableRefresh:this.state.showForm,onClickAdd:this.add.bind(this),onClickBack:this.back.bind(this),onClickDelete:this.delete.bind(this),onClickRefresh:this.onFetchData,onClickEdit:this.edit.bind(this),onClickSave:this.save.bind(this)}))),r.a.createElement(i.a,{type:"success",isOpen:!!this.state.alertMsg,toggle:this.dissmissAlert.bind(this)},this.state.alertMsg),r.a.createElement(N.a,{show:!!this.state.sweetAlertMsg,error:!0,confirmBtnText:"Ok",confirmBtnBsStyle:"danger",btnSize:"xs",title:"",onConfirm:this.dissmissAlert.bind(this),onCancel:this.dissmissAlert.bind(this)},this.state.sweetAlertMsg),r.a.createElement(h,{show:!this.state.showForm,loading:this.state.loading,list:this.state.list,onClickRow:this.onClickRow.bind(this),selectedIndex:this.state.selected,filtered:this.state.filtered,onFilteredChange:this.onFilteredChange.bind(this),initialSearch:this.state.initialSearch,onFetchData:this.onFetchData,pages:this.state.page,showTextFilterInput:!0,filterInitialValue:this.state.filter,onFilterTextChange:this.onChangeFilter.bind(this),filterInputTimout:500}),this.state.showForm?r.a.createElement(j,{bindSubmit:function(e){return t.formSubmit=e},formData:this.state.form,onSubmit:this.submit.bind(this),shops:this.state.shops}):null))}}]),n}();t.default=Object(l.e)(R)},455:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(42);function r(e){if(!e.length)return"";var t=a.a.getState().auth.language,n=e.find(function(e){return e.language===t});return n?n.translation:e[0]?e[0].translation:""}function o(t,n){var a={};return Object.keys(t).forEach(function(e){-1===n.indexOf(e)&&(a[e]=t[e])}),a}},460:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(484),i=n(93),l=n(453),s=n.n(l),u=n(462),c=n(485),f=n.n(c);n(486);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e){return r.a.createElement("div",d({},e,{className:s()("rt-tbody",e.className||[])}),r.a.createElement(f.a,null,e.children))};t.a=function(e){return r.a.createElement("div",{className:"row",style:{overflow:"visible"}},r.a.createElement("div",{className:"col-3"},e.showTextFilterInput?r.a.createElement(u.a,{initalValue:e.filterInitialValue,onChange:e.onFilterTextChange,timeout:e.filterInputTimout}):null),r.a.createElement("div",{className:"col-12"},r.a.createElement(o.a,d({pageSizeOptions:[1,5,10,20,25,50,100,1e3],TbodyComponent:m,previousText:r.a.createElement(i.a,{id:"table.previous_page",defaultMessage:"Previous"}),nextText:r.a.createElement(i.a,{id:"table.next_page",defaultMessage:"Next"}),loadingText:r.a.createElement(i.a,{id:"table.loading",defaultMessage:"Loading..."}),noDataText:e.initialSearch?r.a.createElement(i.a,{id:"table.need_filter_for_show_data",defaultMessage:"This panel requires filter to display results. Please type search phrase into filter input."}):r.a.createElement(i.a,{id:"table.no_data_found",defaultMessage:"No data found"}),pageText:r.a.createElement(i.a,{id:"table.page",defaultMessage:"Page"}),ofText:r.a.createElement(i.a,{id:"table.of_text",defaultMessage:"of"}),rowsText:"sətir",style:{height:"400px"}},e))))}},461:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(93),i=n(463),l=n.n(i),s=n(73);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=document.getElementById("root"),b=Object(o.d)({saveButtonTitle:{id:"action_buttons.save.title",defaultMessage:"save"},addButtonTitle:{id:"action_buttons.add.title",defaultMessage:"add"},editButtonTitle:{id:"action_buttons.edit.title",defaultMessage:"edit"},deleteButtonTitle:{id:"action_buttons.delete.title",defaultMessage:"delete"},defualtConfirmMessage:{id:"action_buttons.default.confirm_message",defaultMessage:"Are you sure"},backButtonTitle:{id:"action_buttons.back.title",defaultMessage:"go back"},refreshButtonTitle:{id:"action_buttons.refresh.title",defaultMessage:"refresh"},undoButtonTitle:{id:"action_buttons.undo.title",defaultMessage:"Undo"}}),y=function(e){return e["onClick"+e.button.name]?e["hide"+e.button.name]?null:r.a.createElement("button",{type:"button",className:"btn btn-circle pull-right mx-1 btn-"+e.button.type,onClick:e.onClick,disabled:e["disable"+e.button.name],title:e.button.title},r.a.createElement("i",{className:e.button.icon})):null},g=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,m(n).call(this,e))).buttons=[{name:"Save",type:"success",title:e.intl.formatMessage(b.saveButtonTitle),icon:"fa fa-save"},{name:"Delete",type:"danger",title:e.intl.formatMessage(b.deleteButtonTitle),icon:"fa fa-times"},{name:"Refresh",type:"primary",title:e.intl.formatMessage(b.refreshButtonTitle),icon:"fa fa-refresh"},{name:"Undo",type:"primary",title:e.intl.formatMessage(b.undoButtonTitle),icon:"fa fa-undo"},{name:"Edit",type:"default",title:e.intl.formatMessage(b.editButtonTitle),icon:"fa fa-edit"},{name:"Add",type:"default",title:e.intl.formatMessage(b.addButtonTitle),icon:"fa fa-plus"}].concat(e.addButtons||[]).concat([{name:"Back",type:"primary",title:e.intl.formatMessage(b.backButtonTitle),icon:"fa fa-chevron-left"}]),t.state={showConfirm:!1,confirmButtonName:null,confirmMessage:""},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,r.a.Component),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(n,[{key:"hideConfirm",value:function(){this.setState({showConfirm:!1,confirmButtonName:null})}},{key:"onClick",value:function(e){this.props["confirm"+e.name]?this.setState({confirmButtonName:e.name,showConfirm:!0,confirmMessage:this.props["confirm".concat(e.name,"Message")]||this.props.intl.formatMessage(b.defualtConfirmMessage)}):this.props["onClick"+e.name]()}},{key:"render",value:function(){var n=this;return this.props.hide?null:r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 py-1 "},this.buttons.map(function(e,t){return r.a.createElement(y,c({key:t,button:e},n.props,{onClick:n.onClick.bind(n,e)}))})),Object(s.createPortal)(r.a.createElement(l.a,{show:this.state.showConfirm,warning:!0,confirmBtnText:"Ok",showCancel:!0,confirmBtnBsStyle:"warning",cancelBtnText:"Cancel",btnSize:"xs",title:this.state.confirmMessage,onConfirm:function(){n.props["onClick"+n.state.confirmButtonName](),n.hideConfirm()},onCancel:this.hideConfirm.bind(this)},this.state.sweetAlertMsg),h))}}]),n}();t.a=Object(o.e)(g)},462:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(1),r=n.n(a);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,s(n).call(this,e))).state={value:e.initalValue||""},t.timeout=!1,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,r.a.Component),function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(n,[{key:"onInputChange",value:function(e){var t=this,n=e.target.value;this.timeout&&clearTimeout(this.timeout),this.setState({value:n}),this.timeout=setTimeout(function(){t.props.onChange(t.state.value)},this.props.timeout)}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.props.onChange(this.state.value)}},{key:"render",value:function(){var e=this;return this.props.hide?null:r.a.createElement("div",{className:"form-group"},this.props.label?r.a.createElement("label",null,this.props.label):null,r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend c-pointer",onClick:function(){return e.props.onChange(e.state.value)}},r.a.createElement("span",{className:"input-group-text"},r.a.createElement("i",{className:"fa fa-filter"}))),r.a.createElement("input",{className:"form-control",placeholder:"search",onChange:this.onInputChange.bind(this),onKeyDown:this.onKeyDown.bind(this),value:this.state.value})))}}]),n}()},464:function(e,t,n){"use strict";var a=n(1),r=n.n(a);t.a=function(e){return e.show&&e.messages?r.a.createElement("p",{style:{fontSize:"12px",paddingTop:"4px"},className:"text-left"},e.messages.map(function(e,t){return r.a.createElement("span",{className:"text-danger",key:t},e,r.a.createElement("br",null))})):null}},465:function(e,t,n){"use strict";var a=n(93);t.a=Object(a.d)({required:{id:"validation.required",defaultMessage:"Field is required"},email:{id:"validation.email",defaultMessage:"Email is not valid"},confirmPassword:{id:"validation.confirm_password_not_match",defaultMessage:"Password does not match"},valueAlreadySelected:{id:"validation.value_already_selected",defaultMessage:"This value is already selected"},valueRange:{id:"validation.price_list_value_range",defaultMessage:"Value must be in 0-100 range"},dateRange:{id:"validation.other_income_date_ranger",defaultMessage:"Activation date to must be minimum activation date from"}})},468:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(1),r=n.n(a),o=n(483);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,u(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.a.Component),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"render",value:function(){var t=this;return r.a.createElement(o.a,{value:this.props.filter?this.props.filter.value:null,isClearable:!0,onChange:function(e){return t.props.onChange(e||null)},options:this.props.options,styles:{control:function(e,t){return function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,a;t=r,a=o[n=e],n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a})}return r}({},e,{boxShadow:"none"})}}})}}]),t}()},469:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(454),i=n(453),l=n.n(i),s=function(e){var t=e.fields,n=e.errors;if(!t)return null;var a=!1;return t.forEach(function(e){n[e]&&(a=!0)}),a?r.a.createElement("i",{className:"fa fa-exclamation-circle text-danger"}):null};t.a=function(n){return r.a.createElement(o.q,{tabs:!0},n.links.map(function(t){return r.a.createElement(o.r,{key:t.tab},r.a.createElement(o.s,{className:l()({active:n.active===t.tab}),onClick:function(e){return n.onClick(t.tab)}},t.title," ",r.a.createElement(s,{fields:t.fields,errors:n.errors})))}))}},473:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(460),i=n(453),l=n.n(i);t.a=function(n){var a=this;return n.show?r.a.createElement(o.a,{columns:n.columns,minRows:1,loading:n.loading,data:n.list,filterInitialValue:n.filterInitialValue,onFilterTextChange:n.onFilterTextChange,filterInputTimout:n.filterInputTimout,showTextFilterInput:n.showTextFilterInput,manual:!0,filterable:!0,pageSizeOptions:[1,5,10,20,25,50,100],initialSearch:n.initialSearch,defaultPageSize:10,className:"-striped",filtered:n.filtered,onFilteredChange:n.onFilteredChange,pages:n.pages,onFetchData:n.onFetchData,getTrProps:function(e,t){return t&&t.row?{onClick:n.onClickRow.bind(a,t),className:l()({"row-selected":t.index===n.selectedIndex})}:{}}}):null}},478:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(94);function a(n){var a=this;this.fetchTimeout&&clearTimeout(this.fetchTimeout),n=n||this.tableState;var e=function(){a.setState({loading:!0,selected:null}),a.tableState=n;var t={};n.filtered.forEach(function(e){return t[e.id]=e.value?e.value.value:null}),t.filter=a.state.filter,a.additionalFilters&&a.additionalFilters.forEach(function(e){return t[e.id]=e.value}),r.a.post(a.filterUrl+"?page=".concat(n.page,"&size=").concat(n.pageSize,"&sort=id,desc"),function(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,a;t=r,a=o[n=e],n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a})}return r}({},t)).then(function(e){a.setState({list:e.data.content,loading:!1,page:Math.ceil(e.data.totalElements/n.pageSize)})})};this.fetchTimeout=setTimeout(function(){e()},0)}},507:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(93),i=n(56),l=n(464);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=Object(o.d)({keyPlaceholder:{id:"localizaion.form.lang_key.placeholder",defaultMessage:"key"},valuePlaceholder:{id:"localizaion.form.lang_value.placeholder",defaultMessage:"translation"},duplicateKeyErrorMsg:{id:"localizaion.form.error.duplicate_key",defaultMessage:"This language key already exists"},keyNotAllowedKeyErrorMsg:{id:"localizaion.form.error.key_not_allowed",defaultMessage:"Language key not valid."}}),h=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,d(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.a.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.auth.langs.map(function(t){return e.props.values.find(function(e){return e.language===t.code})||{language:t.code,translation:"",default:t.default}});setTimeout(function(){e.props.onValueChange(t)},0)}},{key:"onChange",value:function(e,t){var n=t.target.value,a=u(this.props.values);a[e].translation=n,this.props.onValueChange(a)}},{key:"setDefault",value:function(e){var t=this.props.values.map(function(e){return e.default=!1,e});t[e].default=!0,this.props.onValueChange(t)}},{key:"getTranslation",value:function(t){var e=this.props.values.find(function(e){return e.language===t});return e?e.translation:""}},{key:"isChecked",value:function(t){var e=this.props.values.find(function(e){return e.language===t});return e&&e.default||"az"===t}},{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,this.props.values.map(function(e,t){return r.a.createElement("div",{className:"row mt-1",key:t},r.a.createElement("div",{className:"col-1 pt-1 text-center"},r.a.createElement("b",{style:{color:"rgba(0,0,0,0.7)"}},e.language)),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{disabled:n.props.disabled,type:"text",className:"form-control",name:"translation",value:e.translation||"",placeholder:n.props.intl.formatMessage(p.valuePlaceholder),onChange:n.onChange.bind(n,t)}),r.a.createElement(l.a,{show:"az"===e.language&&n.props.error,messages:[n.props.error]})),r.a.createElement("div",{className:"col-3 pt-1"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{disabled:!0,id:"default".concat(t),type:"checkbox",className:"form-check-input c-pointer",checked:e.default,onChange:n.setDefault.bind(n,t)}),r.a.createElement("label",{className:"form-check-label small c-pointer",htmlFor:"default".concat(t)},"Default"))))}))}}]),t}();h=Object(i.b)(function(e){return{auth:e.auth}},function(){return{}})(h),t.a=Object(o.e)(h)}}]);