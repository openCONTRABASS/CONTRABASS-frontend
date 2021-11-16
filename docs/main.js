(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/CONTRABASS/CONTRABASS-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "48Fb":
/*!**********************************************!*\
  !*** ./src/app/interfaces/task-type-enum.ts ***!
  \**********************************************/
/*! exports provided: TaskTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTypeEnum", function() { return TaskTypeEnum; });
var TaskTypeEnum;
(function (TaskTypeEnum) {
    TaskTypeEnum[TaskTypeEnum["COMPUTE_GROWTH_DEPENDENT"] = 0] = "COMPUTE_GROWTH_DEPENDENT";
    TaskTypeEnum[TaskTypeEnum["COMPUTE_CRITICAL_REACTIONS"] = 1] = "COMPUTE_CRITICAL_REACTIONS";
})(TaskTypeEnum || (TaskTypeEnum = {}));


/***/ }),

/***/ "4DH5":
/*!************************************************!*\
  !*** ./src/app/services/websockets.service.ts ***!
  \************************************************/
/*! exports provided: WebsocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketsService", function() { return WebsocketsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");



class WebsocketsService {
    constructor(socket) {
        this.socket = socket;
    }
    sendMessage(msg) {
        this.socket.emit('message', msg);
    }
    joinRoom(roomName) {
        this.socket.emit('join', roomName);
    }
    getMessage(fromEvent) {
        return this.socket
            .fromEvent(fromEvent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            console.log(data);
            return data;
        }));
    }
}
WebsocketsService.ɵfac = function WebsocketsService_Factory(t) { return new (t || WebsocketsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"])); };
WebsocketsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebsocketsService, factory: WebsocketsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AeJM":
/*!***************************************************!*\
  !*** ./src/app/directives/drag-drop.directive.ts ***!
  \***************************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DragDropDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        // propagate file on drop event
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
DragDropDirective.ɵfac = function DragDropDirective_Factory(t) { return new (t || DragDropDirective)(); };
DragDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropDirective, selectors: [["", "appDragDrop", ""]], hostVars: 2, hostBindings: function DragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fileover", ctx.fileOver);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // Note that EXPIRY_TASKS must be: EXPIRY_MODELS >= EXPIRY_TASKS
    EXPIRY_MODELS: 48,
    EXPIRY_TASKS: 48,
    websocketEndpoint: 'ws://localhost:5000',
    baseApiUrl: 'http://localhost:5000',
    baseApiUrlStatic: 'http://localhost:5000/static/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E21b":
/*!************************************************!*\
  !*** ./src/app/interfaces/task-status-enum.ts ***!
  \************************************************/
/*! exports provided: TaskStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusEnum", function() { return TaskStatusEnum; });
var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum[TaskStatusEnum["WAITING_OPERATION"] = 0] = "WAITING_OPERATION";
    TaskStatusEnum[TaskStatusEnum["IN_QUEUE"] = 1] = "IN_QUEUE";
    TaskStatusEnum[TaskStatusEnum["RUNNING"] = 2] = "RUNNING";
    TaskStatusEnum[TaskStatusEnum["DONE"] = 3] = "DONE";
    TaskStatusEnum[TaskStatusEnum["EXPIRED"] = 4] = "EXPIRED";
    TaskStatusEnum[TaskStatusEnum["FAILURE"] = 5] = "FAILURE";
})(TaskStatusEnum || (TaskStatusEnum = {}));


/***/ }),

/***/ "Hzbo":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessagesService {
    constructor() {
        this.modelsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.newModel = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.modelsChanged$ = this.modelsChanged.asObservable();
        this.newModel$ = this.newModel.asObservable();
    }
    notifyModelChange(model) {
        this.modelsChanged.next(model.uuid);
    }
    notifyNewModel() {
        this.newModel.next('');
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KWWs":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class NotificationsService {
    constructor(toastr) {
        this.toastr = toastr;
        this.sInfo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.sSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.sError = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.info$ = this.sInfo.asObservable();
        this.success$ = this.sSuccess.asObservable();
        this.error$ = this.sError.asObservable();
    }
    initComponent() {
        // This method should be called by the parent component that will
        // display all notifications
        // It should be called by child components as the notifications
        // will appear at the child component position
        this.info$.subscribe((msg) => this.toastr.info(msg, '', { positionClass: 'toast-bottom-right' }));
        this.success$.subscribe((msg) => this.toastr.success(msg, '', { positionClass: 'toast-bottom-right' }));
        this.error$.subscribe((msg) => this.toastr.error(msg, '', { positionClass: 'toast-bottom-right' }));
    }
    info(message) {
        this.sInfo.next(message);
    }
    success(message) {
        this.sSuccess.next(message);
    }
    error(message) {
        this.sError.next(message);
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MicN":
/*!*****************************************************!*\
  !*** ./src/app/components/model/model.component.ts ***!
  \*****************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var _interfaces_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/model */ "wthc");
/* harmony import */ var _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interfaces/task-status-enum */ "E21b");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _interfaces_task_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces/task-type-enum */ "48Fb");
/* harmony import */ var _interfaces_response_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/response-status */ "evuB");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "l207");
/* harmony import */ var _interfaces_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interfaces/task */ "kXsz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _interfaces_forms_medium_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interfaces/forms/medium-enum */ "y9DB");
/* harmony import */ var _interfaces_forms_optimization_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interfaces/forms/optimization-enum */ "oqRW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/messages.service */ "Hzbo");
/* harmony import */ var _services_back_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/back.service */ "heAi");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/validation.service */ "qZ4S");
/* harmony import */ var _services_websockets_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/websockets.service */ "4DH5");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/notifications.service */ "KWWs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var ngx_log_monitor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-log-monitor */ "dpPO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




























const _c0 = ["app-model", ""];
function ModelComponent_div_1_mat_error_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Fraction of optimum must be between 0.0 and 1.0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ModelComponent_div_1_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ModelComponent_div_1_mat_error_29_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.form_reacs_fraction_of_optimum.errors.invalidMinMax);
} }
function ModelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " Compute growth dependent reactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ModelComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r10.operationComputeGrowthDependent(ctx_r10.model); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " Critical reactions report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Fraction of optimum");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, ModelComponent_div_1_mat_error_29_Template, 2, 1, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ModelComponent_div_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r12.operationComputeReactionsSets(ctx_r12.model); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Execute");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.formGrowthDependentGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("cross-validation-error", (ctx_r0.formGrowthDependentGroup.errors == null ? null : ctx_r0.formGrowthDependentGroup.errors.formGrowthDependentValidator) && (ctx_r0.formGrowthDependentGroup.touched || ctx_r0.formGrowthDependentGroup.dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.formGrowthDependentGroup.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.formReactionsSetsGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("cross-validation-error", (ctx_r0.formReactionsSetsGroup.errors == null ? null : ctx_r0.formReactionsSetsGroup.errors.formReactionsValidator) && (ctx_r0.formReactionsSetsGroup.touched || ctx_r0.formReactionsSetsGroup.dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.form_reacs_fraction_of_optimum.invalid && (ctx_r0.form_reacs_fraction_of_optimum.dirty || ctx_r0.form_reacs_fraction_of_optimum.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r0.formReactionsSetsGroup.invalid);
} }
function ModelComponent_span_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div");
} }
function ModelComponent_span_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0, "Queued.");
} }
function ModelComponent_span_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Queued. Position: ", ctx_r17.model.pending_length, "");
} }
function ModelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ModelComponent_span_2_div_1_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ModelComponent_span_2_ng_template_2_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ModelComponent_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.model.pending_length == 0)("ngIfThen", _r14)("ngIfElse", _r16);
} }
function ModelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "log-monitor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("logStream", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 4, ctx_r2.logStream$))("animated", true)("icons", true)("history", ctx_r2.restoredLogs);
} }
function ModelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "View Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Download spreadsheet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "download_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("href", ctx_r3.model.file_html, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("href", ctx_r3.model.file_spreadsheet, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
} }
function ModelComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function ModelComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Error: Something went wrong...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class ModelComponent {
    constructor(http, storageService, messagesService, backService, validationService, websocketsService, notificationsService) {
        this.http = http;
        this.storageService = storageService;
        this.messagesService = messagesService;
        this.backService = backService;
        this.validationService = validationService;
        this.websocketsService = websocketsService;
        this.notificationsService = notificationsService;
        this.taskStatusEnum = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"];
        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.optimizationEnumView = _interfaces_forms_optimization_enum__WEBPACK_IMPORTED_MODULE_10__["OptimizationEnumView"].optimization;
        this.mediumEnumView = _interfaces_forms_medium_enum__WEBPACK_IMPORTED_MODULE_9__["MediumEnumView"].medium;
        this.formCGrowthDependentInitialValues = {
            uuid: undefined,
            objective: undefined,
        };
        this.formReactionsInitialValues = {
            uuid: undefined,
            objective: undefined,
            fraction_of_optimum: 1.0,
        };
        this.restoredLogs = [];
        this.logStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.logStream$ = this.logStream.asObservable();
    }
    ngOnInit() {
        /********************************************************************************************/
        /* FORM VALIDATION */
        this.formGrowthDependentGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.formCGrowthDependentInitialValues.uuid),
            objective: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.formCGrowthDependentInitialValues.objective, []),
        }, { validators: this.validationService.formGrowthDependentValidator });
        this.formReactionsSetsGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            uuid: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.formReactionsInitialValues.uuid),
            fraction_of_optimum: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.formReactionsInitialValues.fraction_of_optimum, [
                this.validationService.minMaxValidator(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MIN_FRACTION_OPTIMUM, _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_FRACTION_OPTIMUM),
            ]),
            objective: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.formReactionsInitialValues.objective, []),
        }, { validators: this.validationService.formReactionsValidator });
        /********************************************************************************************/
        /* STATUS RECOVERY */
        // celery wont give expiry info
        // have to save and calculate manually
        Object(_interfaces_model__WEBPACK_IMPORTED_MODULE_0__["process_model_expiry"])(this.model, _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EXPIRY_MODELS, new Date());
        // check individual task have not expired
        for (let i = 0; i < this.model.tasks.length; i++) {
            Object(_interfaces_task__WEBPACK_IMPORTED_MODULE_7__["process_task_expiry"])(this.model.tasks[i], _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].EXPIRY_TASKS, new Date());
        }
        // restart the process of checking running tasks
        for (let i = 0; i < this.model.tasks.length; i++) {
            if (this.model.tasks[i].status == _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE
                // tslint:disable-next-line:triple-equals
                || this.model.tasks[i].status == _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].RUNNING) {
                switch (this.model.tasks[i].type) {
                    case _interfaces_task_type_enum__WEBPACK_IMPORTED_MODULE_4__["TaskTypeEnum"].COMPUTE_GROWTH_DEPENDENT:
                        this.periodicallyCheckGrowthDependent(this.model.tasks[i].uuid);
                        break;
                    case _interfaces_task_type_enum__WEBPACK_IMPORTED_MODULE_4__["TaskTypeEnum"].COMPUTE_CRITICAL_REACTIONS:
                        this.periodicallyCheckReactionsSets(this.model.tasks[i].uuid);
                        break;
                    default:
                        // unknown task
                        break;
                }
                // if task is already running, subscribe again to socket-io channel
                // channel is given by the model id
                if (this.model.tasks[i].status == _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].RUNNING) {
                    this.websocketsService.joinRoom(this.model.uuid);
                    this.websocketsService.getMessage(this.model.uuid).subscribe((data) => {
                        this.manageWebsocketMessage(data.data);
                    });
                }
            }
        }
    }
    periodicallyCheckGrowthDependent(task_uuid) {
        this.taskStatusInfo$ = this.checkTasksGrowthDependent(task_uuid);
        this.taskStatusInfo$.subscribe((result) => {
            console.log('recibido');
            console.log(result);
            const response = result.body;
            const pending_length = response.pending_length;
            if (response.finished == false) {
                if (response.status == _interfaces_response_status__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].FAILURE) {
                    this.stopCheckTasks();
                    this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE, this.model);
                    // notify the error
                    this.notificationsService.error(`Error computing task on model: ${this.model.file}`);
                }
                else if (response.status == _interfaces_response_status__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].PENDING) {
                    // model is already in status IN QUEUE
                    this.model.pending_length = pending_length;
                    this.storageService.updateModel(this.model);
                }
                else {
                    this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].RUNNING, this.model);
                    this.storageService.updateModel(this.model);
                }
            }
            else {
                // task has ended succesfully!
                this.stopCheckTasks();
                this.model.file_html = _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].baseApiUrlStatic + response.file_html;
                this.model.file_spreadsheet = _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].baseApiUrlStatic + response.file_spreadsheet;
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].DONE, this.model);
                this.storageService.updateModel(this.model);
                // notify that the task has ended
                this.notificationsService.success(`Growth dependent computation finished successfully on model: ${this.model.file}`);
            }
        }, (error) => {
            if (error.status === 404) {
                this.stopCheckTasks();
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].EXPIRED, this.model);
            }
            else {
                this.stopCheckTasks();
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE, this.model);
            }
        });
    }
    get form_cp_objective() { return this.formGrowthDependentGroup.get('objective'); }
    get form_reacs_fraction_of_optimum() { return this.formReactionsSetsGroup.get('fraction_of_optimum'); }
    get form_reacs_objective() { return this.formReactionsSetsGroup.get('objective'); }
    periodicallyCheckReactionsSets(task_uuid) {
        this.taskStatusInfo$ = this.checkTasksReactionsSets(task_uuid);
        console.log('Suscribing...');
        this.taskStatusInfo$.subscribe((result) => {
            console.log('Result:');
            console.log(result);
            const response = result.body;
            const pending_length = response.pending_length;
            if (response.finished == false) {
                if (response.status == _interfaces_response_status__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].FAILURE) {
                    this.stopCheckTasks();
                    this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE, this.model);
                    // notify the error
                    this.notificationsService.error(`Error computing task on model: ${this.model.file}`);
                }
                else if (response.status == _interfaces_response_status__WEBPACK_IMPORTED_MODULE_5__["ResponseStatus"].PENDING) {
                    // model is already in status IN QUEUE
                    this.model.pending_length = pending_length;
                    this.storageService.updateModel(this.model);
                }
                else {
                    this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].RUNNING, this.model);
                    this.storageService.updateModel(this.model);
                }
            }
            else {
                // task has finished successfully !
                this.stopCheckTasks();
                this.model.file_html = _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].baseApiUrlStatic + response.file_html;
                this.model.file_spreadsheet = _constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].baseApiUrlStatic + response.file_spreadsheet;
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].DONE, this.model);
                this.storageService.updateModel(this.model);
                // notify that the task has ended
                this.notificationsService.success(`Critical reactions computation finished successfully on model: ${this.model.file}`);
            }
        }, (error) => {
            console.log('Error!');
            if (error.status === 404) {
                this.stopCheckTasks();
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].EXPIRED, this.model);
            }
            else {
                this.stopCheckTasks();
                this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE, this.model);
            }
        }, () => {
            console.log('Complete?');
        });
    }
    operationComputeGrowthDependent(model) {
        // The field 'restoredLogs', which is used for the component 'log-monitor'
        // as history is emptied, as it might have logs from previous operations.
        this.restoredLogs = [];
        // subscribe to websocket
        try {
            this.websocketsService.joinRoom(model.uuid);
            this.websocketsService.getMessage(model.uuid).subscribe((data) => {
                this.manageWebsocketMessage(data.data);
            });
        }
        catch (error) {
            console.error(error);
        }
        // notify that the process has been queued
        this.notificationsService.info(`Task on model: ${model.file} has been queued`);
        // update list of models tasks and store in cookies
        // in order to track model status
        model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE;
        this.storageService.updateModel(model);
        // build form values to be used on the endpoint request
        const formValues = this.formGrowthDependentGroup.getRawValue();
        formValues.uuid = model.uuid;
        this.backService.computeGrowthDependent(formValues).subscribe((response) => {
            const task_uuid = response.body.task_id;
            const pending_length = response.body.pending_length;
            model.tasks[0].uuid = task_uuid;
            model.pending_length = pending_length;
            this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE, this.model);
            this.initTypeForTask(task_uuid, _interfaces_task_type_enum__WEBPACK_IMPORTED_MODULE_4__["TaskTypeEnum"].COMPUTE_GROWTH_DEPENDENT, this.model);
            this.storageService.updateModel(model);
            console.log('task uuid: ' + task_uuid);
            this.periodicallyCheckGrowthDependent(task_uuid);
        }, (error) => {
            if (error.status === 404) {
                this.model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].EXPIRED;
            }
            else {
                this.model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE;
                // TODO: manage unexpected error
            }
        });
        // suscribe
    }
    operationComputeReactionsSets(model) {
        // The field 'restoredLogs', which is used for the component 'log-monitor'
        // as history is emptied, as it might have logs from previous operations.
        this.restoredLogs = [];
        // subscribe to websocket
        this.websocketsService.joinRoom(model.uuid);
        this.websocketsService.getMessage(model.uuid).subscribe((data) => {
            this.manageWebsocketMessage(data.data);
        });
        // notify that the process has been queued
        this.notificationsService.info(`Task on model: ${model.file} has been queued`);
        // update list of models tasks and store in cookies
        // in order to track model status
        model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE;
        this.storageService.updateModel(model);
        // build form values to be used on the endpoint request
        const formValues = this.formReactionsSetsGroup.getRawValue();
        formValues.uuid = model.uuid;
        this.backService.computeReactionsSet(formValues).subscribe((response) => {
            const task_uuid = response.body.task_id;
            const pending_length = response.body.pending_length;
            model.tasks[0].uuid = task_uuid;
            model.pending_length = pending_length;
            this.setStatusForTask(task_uuid, _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE, model);
            this.initTypeForTask(task_uuid, _interfaces_task_type_enum__WEBPACK_IMPORTED_MODULE_4__["TaskTypeEnum"].COMPUTE_CRITICAL_REACTIONS, model);
            this.storageService.updateModel(model);
            console.log('task uuid: ' + task_uuid);
            this.periodicallyCheckReactionsSets(task_uuid);
        }, (error) => {
            if (error.status === 404) {
                this.model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].EXPIRED;
            }
            else {
                this.model.tasks[0].status = _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].FAILURE;
                // TODO: manage unexpected error
            }
        });
        // suscribe
    }
    checkTasksGrowthDependent(task_uuid) {
        const url = `/results/${task_uuid}/growth_dependent_reactions`;
        console.log('Init timer...');
        this.taskObserver$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.backService.getGrowthDependentTasks(task_uuid)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), // retry 5 times if error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopPolling));
        return this.taskObserver$;
    }
    checkTasksReactionsSets(task_uuid) {
        this.taskObserver$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5000, 5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.backService.getCriticalReactionTasks(task_uuid)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5), // retry 5 times if error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopPolling));
        return this.taskObserver$;
    }
    stopCheckTasks() {
        this.stopPolling.next();
    }
    deleteModel(model) {
        this.storageService.popModel(model);
        this.messagesService.notifyModelChange(model);
    }
    initTypeForTask(task_uuid, task_type, model) {
        for (let i = 0; i < model.tasks.length; i++) {
            if (model.tasks[i].uuid == task_uuid) {
                model.tasks[i].type = task_type;
                model.tasks[i].init_date = new Date();
                break;
            }
        }
    }
    setStatusForTask(task_uuid, task_status, model) {
        for (let i = 0; i < model.tasks.length; i++) {
            if (model.tasks[i].uuid == task_uuid) {
                model.tasks[i].status = task_status;
                break;
            }
        }
    }
    manageWebsocketMessage(data) {
        const newLog = { message: data, type: 'INFO' };
        // If the model task is still in the tasks queue
        // but we have already received log messages, meaning that the task has already started
        // but the webpage is not yet aware.
        // We save the log in the 'restoredLogs' which will be shown in the 'log-monitor' component
        // once the model task status is updated to RUNNING
        if (this.model.tasks[0].status === _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_1__["TaskStatusEnum"].IN_QUEUE) {
            this.restoredLogs.push(newLog);
        }
        // the log message is either way passed to the 'logStream' subject,
        // which is consumed by the 'log-monitor' component.
        this.logStream.next(newLog);
    }
}
ModelComponent.ɵfac = function ModelComponent_Factory(t) { return new (t || ModelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_13__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_14__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_back_service__WEBPACK_IMPORTED_MODULE_15__["BackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_validation_service__WEBPACK_IMPORTED_MODULE_16__["ValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_websockets_service__WEBPACK_IMPORTED_MODULE_17__["WebsocketsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_18__["NotificationsService"])); };
ModelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ModelComponent, selectors: [["", "app-model", ""]], inputs: { model: "model" }, attrs: _c0, decls: 7, vars: 7, consts: [[1, "operations-accordion", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "formGroup"], ["formDir", "ngForm"], [1, "cross-validation"], [1, "form-group"], ["appearance", "fill"], ["matInput", "", "formControlName", "objective", 1, "form-control"], ["mat-raised-button", "", "color", "primary", 1, "execute-button", 3, "disabled", "click"], ["matInput", "", "formControlName", "fraction_of_optimum", "type", "number", "step", ".05", 1, "form-control"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["noTaskBlock", ""], ["multipleTaskBlock", ""], ["mode", "indeterminate"], ["theme", "light", "title", "Log", 1, "log-monitor", 3, "logStream", "animated", "icons", "history"], [3, "href"], ["mat-raised-button", "", "color", "basic", 1, "action-button"], ["aria-hidden", "false"]], template: function ModelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ModelComponent_div_1_Template, 36, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ModelComponent_span_2_Template, 6, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ModelComponent_div_3_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ModelComponent_div_4_Template, 9, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, ModelComponent_span_5_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ModelComponent_span_6_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", ctx.model.tasks[0].status);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.WAITING_OPERATION);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.IN_QUEUE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.RUNNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.DONE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.EXPIRED);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.taskStatusEnum.FAILURE);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionPanelDescription"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBar"], ngx_log_monitor__WEBPACK_IMPORTED_MODULE_25__["LogMonitorComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n.operation-event[_ngcontent-%COMP%] {\n  display: block;\n}\n.operations-accordion[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.log-monitor[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n.action-button[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.execute-button[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtb2RlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYXZvaWQgaW5saW5lLWJsb2NrIG9mIG1hdCBmb3JtIGZpZWxkcyAqL1xuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vcGVyYXRpb24tZXZlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9wZXJhdGlvbnMtYWNjb3JkaW9uIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubG9nLW1vbml0b3Ige1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmV4ZWN1dGUtYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/task-status-enum */ "E21b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_back_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/back.service */ "heAi");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/messages.service */ "Hzbo");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/notifications.service */ "KWWs");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/drag-drop.directive */ "AeJM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list-element/list-element.component */ "gQtF");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");











const _c0 = ["fileDropRef"];
function AppComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-progress-bar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Error reading file: ", ctx_r2.error_text, " ");
} }
class AppComponent {
    constructor(backService, storageService, messagesService, notificationsService) {
        this.backService = backService;
        this.storageService = storageService;
        this.messagesService = messagesService;
        this.notificationsService = notificationsService;
        this.files = [];
        this.models = [];
        this.error_text = '';
    }
    ngOnInit() {
        this.models = this.storageService.getModels();
        this.messagesService.modelsChanged$.subscribe(model_uuid => this.models = this.storageService.getModels());
        this.loading_file = false;
        // Initializa toast notificaitons
        // As this component is the parent component, it will hold and show
        // all received toast notifications that child component have published
        this.notificationsService.initComponent();
    }
    /**
     * on file drop handler
     */
    onFileDropped($event) {
        this.processFilesList($event);
    }
    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
        this.processFilesList(files);
    }
    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index) {
        if (this.files[index].progress < 100) {
            console.log('Upload in progress.');
            return;
        }
        this.storageService.popModel(this.models[index]);
        this.files.splice(index, 1);
    }
    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    processFilesList(files) {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
            this.loading_file = true;
            // restore error flag (i.e. 'error_reading_file') and error message prompted (i.e. 'error_text')
            // when a new file is submitted
            this.error_reading_file = false;
            this.error_text = '';
            this.backService.upload(item).subscribe((response) => {
                if (response.status == 200) {
                    // File and model read succesfully !
                    this.error_reading_file = false;
                    const new_model = {
                        file: item.name,
                        submitted: new Date(),
                        uuid: response.body.model_uuid,
                        file_html: '',
                        file_spreadsheet: '',
                        metabolites: response.body.metabolites,
                        reactions: response.body.reactions,
                        genes: response.body.genes,
                        tasks: [{
                                type: undefined,
                                uuid: undefined,
                                status: _interfaces_task_status_enum__WEBPACK_IMPORTED_MODULE_0__["TaskStatusEnum"].WAITING_OPERATION,
                                init_date: undefined
                            }],
                        pending_length: 0
                    };
                    this.storageService.pushModel(new_model);
                    this.models.push(new_model);
                    this.messagesService.notifyNewModel();
                    // Notify that the model has been read succesfully to show a toast notification
                    this.notificationsService.info(`File ${item.name} read successfully`);
                    console.log(this.models);
                }
                // Or any other header:
                console.log(response.headers.get('X-Custom-Header'));
                this.loading_file = false;
            }, (err) => {
                console.log('HTTP Error', err);
                this.error_reading_file = true;
                this.error_text = err.error.message;
                this.loading_file = false;
                // Notify that there was an error reading the file in a toast notification
                this.notificationsService.error(`Error reading file ${item.name}`);
            });
        }
        this.fileDropEl.nativeElement.value = '';
    }
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    popModel(index) {
        this.storageService.popModel(this.models[index]);
        this.models.splice(index, 1);
    }
    pushModel(model) {
        this.storageService.pushModel(model);
        this.models.push(model);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_back_service__WEBPACK_IMPORTED_MODULE_2__["BackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileDropEl = _t.first);
    } }, decls: 39, vars: 3, consts: [[1, "mat-typography"], [1, "nav-wrapper", "mat-elevation-z6"], ["href", "", "id", "model_name", 1, "brand-logo"], [1, "right"], ["href", "https://contrabass.readthedocs.io/en/latest/?badge=latest", 1, "header-link"], [1, "fa", "fa-file-alt", 2, "color", "white"], [1, "header-link-text", "hide-on-med-and-down"], ["href", "https://github.com/openCONTRABASS/CONTRABASS", 1, "header-link"], [1, "fab", "fa-github", 2, "color", "white"], [1, "drop-container-container"], [1, "drop-container-card", "mat-elevation-z6"], ["appDragDrop", "", 1, "drop-container", 3, "fileDropped"], ["type", "file", "id", "fileDropRef", "multiple", "", 3, "change"], ["fileDropRef", ""], ["src", "assets/img/ic-upload-file.svg", "alt", ""], ["for", "fileDropRef"], [4, "ngIf"], [3, "models"], [1, "page-footer"], [1, "footer-copyright", "darken-3"], [1, "container"], ["href", "https://github.com/openCONTRABASS", 1, "grey-text", "text-lighten-4", "right"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"], [1, "progress-container"], ["mode", "indeterminate"], [1, "error-card"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CONTRABASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileDropped", function AppComponent_Template_div_fileDropped_19_listener($event) { return ctx.onFileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_20_listener($event) { return ctx.fileBrowseHandler($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Drag and drop SBML model here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Browse for model");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AppComponent_div_29_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppComponent_div_30_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-list-element", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " \u00A9 2021 Alex Oarga <718123 at unizar.es> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " CONTRABASS organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "link", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading_file);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error_reading_file);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("models", ctx.models);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_7__["DragDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_9__["ListElementComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]], styles: ["body[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n}\n\nmain[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  background-color: rgba(0,0,0, 0.1);\n}\n\nnav[_ngcontent-%COMP%] {\n  background-color: #213c70;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #213c70;\n}\n\n.header-link[_ngcontent-%COMP%] {\n  display: flex;\n  vertical-align: central;\n}\n\n.header-link-text[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n.page-footer[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n#model_name[_ngcontent-%COMP%] {\n  padding-left: 0.5em;\n}\n\n.drop-container-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n\n.drop-container-card[_ngcontent-%COMP%] {\n  width: 462px;\n  height: 212px;\n  padding: 6px;\n  text-align: center;\n  position: relative;\n  margin: 0 auto;\n}\n\n.drop-container[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  label {\n    color: white;\n    width: 183px;\n    height: 44px;\n    border-radius: 21.5px;\n    background-color: #db202f;\n    padding: 8px 16px;\n  }\n\n  h3 {\n    font-size: 20px;\n    font-weight: 600;\n    color: #38424c;\n  }\n}\n\n.fileover[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n\n  .single-file {\n      display: flex;\n      padding: 0.5rem;\n      justify-content: space-between;\n      align-items: center;\n      border: dashed 1px #979797;\n      margin-bottom: 1rem;\n\n    img.delete {\n      margin-left: 0.5rem;\n      cursor: pointer;\n      align-self: flex-end;\n    }\n\n\n    display: flex;\n    flex-grow: 1;\n\n    .name {\n      font-size: 14px;\n      font-weight: 500;\n      color: #353f4a;\n      margin: 0;\n    }\n\n    .size {\n      font-size: 12px;\n      font-weight: 500;\n      color: #a4a4a4;\n      margin: 0;\n      margin-bottom: 0.25rem;\n    }\n\n    .info {\n      width: 100%\n    }\n  }\n}\n\n.error-card[_ngcontent-%COMP%] {\n  margin:2em;\n  color: white;\n  background-color: #db202f;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixjQUFjOztFQUVkO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztFQUNUOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEI7TUFDSSxhQUFhO01BQ2IsZUFBZTtNQUNmLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsMEJBQTBCO01BQzFCLG1CQUFtQjs7SUFFckI7TUFDRSxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLG9CQUFvQjtJQUN0Qjs7O0lBR0EsYUFBYTtJQUNiLFlBQVk7O0lBRVo7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxTQUFTO01BQ1Qsc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0U7SUFDRjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1haW4ge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC4xKTtcbn1cblxubmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2M3MDtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxM2M3MDtcbn1cblxuLmhlYWRlci1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRyYWw7XG59XG5cbi5oZWFkZXItbGluay10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5wYWdlLWZvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbiNtb2RlbF9uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbn1cblxuLmRyb3AtY29udGFpbmVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5kcm9wLWNvbnRhaW5lci1jYXJkIHtcbiAgd2lkdGg6IDQ2MnB4O1xuICBoZWlnaHQ6IDIxMnB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRyb3AtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDE4M3B4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMjAyZjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzM4NDI0YztcbiAgfVxufVxuXG4uZmlsZW92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5maWxlcy1saXN0IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuXG4gIC5zaW5nbGUtZmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgIGltZy5kZWxldGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cblxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMzNTNmNGE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnNpemUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjYTRhNGE0O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItY2FyZCB7XG4gIG1hcmdpbjoyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMjAyZjtcbn1cblxuLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG59XG5cblxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/drag-drop.directive */ "AeJM");
/* harmony import */ var _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-element/list-element.component */ "gQtF");
/* harmony import */ var _components_model_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/model/model.component */ "MicN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var ngx_log_monitor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-log-monitor */ "dpPO");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");


























const config = { url: _constants__WEBPACK_IMPORTED_MODULE_20__["Constants"].websocketEndpoint, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__["SocketIoModule"].forRoot(config),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"],
            ngx_log_monitor__WEBPACK_IMPORTED_MODULE_18__["LogMonitorModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_3__["DragDropDirective"],
        _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_4__["ListElementComponent"],
        _components_model_model_component__WEBPACK_IMPORTED_MODULE_5__["ModelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__["SocketIoModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__["A11yModule"],
        ngx_log_monitor__WEBPACK_IMPORTED_MODULE_18__["LogMonitorModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"]] }); })();


/***/ }),

/***/ "evuB":
/*!***********************************************!*\
  !*** ./src/app/interfaces/response-status.ts ***!
  \***********************************************/
/*! exports provided: ResponseStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseStatus", function() { return ResponseStatus; });
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["PENDING"] = "PENDING";
    ResponseStatus["STARTED"] = "STARTED";
    ResponseStatus["RETRY"] = "RETRY";
    ResponseStatus["FAILURE"] = "FAILURE";
    ResponseStatus["SUCCESS"] = "SUCCESS";
})(ResponseStatus || (ResponseStatus = {}));


/***/ }),

/***/ "gQtF":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-element/list-element.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListElementComponent", function() { return ListElementComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/messages.service */ "Hzbo");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/model.component */ "MicN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ListElementComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.file, " ");
} }
function ListElementComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Updated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r18.submitted, "shortDate"), " ");
} }
function ListElementComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Metabolites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.metabolites, " ");
} }
function ListElementComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.reactions, " ");
} }
function ListElementComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Genes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.genes, " ");
} }
function ListElementComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Model ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx_r12.models[i_r23]);
} }
function ListElementComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 14);
} }
function ListElementComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListElementComponent_td_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.deleteModel(ctx_r26.models[i_r25]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListElementComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
} }
function ListElementComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
class ListElementComponent {
    constructor(storageService, messagesService, changeDetectorRefs) {
        this.storageService = storageService;
        this.messagesService = messagesService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['file', 'date', 'metabolites', 'reactions', 'genes', 'model', 'delete'];
    }
    ngOnInit() {
        this.refresh();
    }
    deleteModel(model) {
        this.storageService.popModel(model);
        this.messagesService.notifyModelChange(model);
    }
    refresh() {
        this.messagesService.newModel$.subscribe((data) => {
            this.myTable.renderRows();
        });
    }
}
ListElementComponent.ɵfac = function ListElementComponent_Factory(t) { return new (t || ListElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
ListElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListElementComponent, selectors: [["app-list-element"]], viewQuery: function ListElementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myTable = _t.first);
    } }, inputs: { models: "models" }, decls: 26, vars: 3, consts: [[1, "table-container"], ["mat-table", "", 1, "mat-elevation-z8", "table-models", 3, "dataSource"], ["myTable", ""], ["matColumnDef", "file"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "metabolites"], ["matColumnDef", "reactions"], ["matColumnDef", "genes"], ["matColumnDef", "model"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["app-model", "", 3, "model"], ["mat-icon-button", "", 3, "click"], ["color", "basic"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListElementComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListElementComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListElementComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ListElementComponent_td_8_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ListElementComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListElementComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListElementComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ListElementComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListElementComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListElementComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ListElementComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListElementComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListElementComponent_th_22_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ListElementComponent_td_23_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ListElementComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ListElementComponent_tr_25_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.models);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _model_model_component__WEBPACK_IMPORTED_MODULE_4__["ModelComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".table-container[_ngcontent-%COMP%] {\n  padding-left: 2em;\n  padding-right: 2em;\n  padding-bottom: 2em;\n}\n\n\n\n.mat-column-file[_ngcontent-%COMP%] {\n  width: 14rem;\n}\n\n.mat-column-date[_ngcontent-%COMP%] {\n  width: 5rem;\n  text-align: center;\n}\n\n.mat-column-metabolites[_ngcontent-%COMP%] {\n  width: 5rem;\n  text-align: center;\n}\n\n.mat-column-reactions[_ngcontent-%COMP%] {\n  width: 5rem;\n  text-align: center;\n}\n\n.mat-column-genes[_ngcontent-%COMP%] {\n  width: 4rem;\n  text-align: center;\n}\n\n.mat-column-model[_ngcontent-%COMP%] {\n  width: 24rem;\n}\n\n.mat-column-delete[_ngcontent-%COMP%] {\n  width: 1rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFDRjs7OztDQUlDOztBQUVEOzs7O0NBSUMiLCJmaWxlIjoibGlzdC1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cblxuLypcbiAgRml4ZWQgY29sdW0gc2l6ZXNcbiovXG4ubWF0LWNvbHVtbi1maWxlIHtcbiAgd2lkdGg6IDE0cmVtO1xufVxuXG4ubWF0LWNvbHVtbi1kYXRlIHtcbiAgd2lkdGg6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1jb2x1bW4tbWV0YWJvbGl0ZXMge1xuICB3aWR0aDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1yZWFjdGlvbnMge1xuICB3aWR0aDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1nZW5lcyB7XG4gIHdpZHRoOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY29sdW1uLW1vZGVsIHtcbiAgd2lkdGg6IDI0cmVtO1xufVxuXG4ubWF0LWNvbHVtbi1kZWxldGUge1xuICB3aWR0aDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKlxuUmVtb3ZlIHJpZ2h0IG1hcmdpbiBmcm9tIHRhYmxlXG4gKi9cbi8qXG50ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xufVxuKi9cblxuLypcbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG4qL1xuXG4iXX0= */"] });


/***/ }),

/***/ "heAi":
/*!******************************************!*\
  !*** ./src/app/services/back.service.ts ***!
  \******************************************/
/*! exports provided: BackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackService", function() { return BackService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BackService {
    constructor(http) {
        this.http = http;
        // API url
        this.sumbitEndpoint = '/submit';
        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    // Returns an observable
    upload(file) {
        // Create form data
        const formData = new FormData();
        // Store form name as "file" with file data
        formData.append('file', file, file.name);
        // Make http post request over api
        // with formData as req
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].baseApiUrl + this.sumbitEndpoint, formData, { observe: 'response' });
    }
    computeGrowthDependent(formGrowthDependentValues) {
        console.log('Calling POST /growth_dependent_reactions');
        const url = `/models/${formGrowthDependentValues.uuid}/growth_dependent_reactions`;
        const formData = new FormData();
        formData.append('uuid', formGrowthDependentValues.uuid);
        if (formGrowthDependentValues.objective) {
            formData.append('objective', formGrowthDependentValues.objective);
        }
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].baseApiUrl + url, formData, { observe: 'response' });
    }
    computeReactionsSet(formReactions) {
        console.log('Calling POST /critical_reactions');
        const url = `/models/${formReactions.uuid}/critical_reactions`;
        const formData = new FormData();
        formData.append('uuid', formReactions.uuid);
        if (formReactions.fraction_of_optimum) {
            formData.append('fraction_of_optimum', formReactions.fraction_of_optimum.toString());
        }
        if (formReactions.objective) {
            formData.append('objective', formReactions.objective);
        }
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].baseApiUrl + url, formData, { observe: 'response' });
    }
    getGrowthDependentTasks(task_uuid) {
        const url = `/results/${task_uuid}/growth_dependent_reactions`;
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].baseApiUrl + url, { observe: 'response' });
    }
    getCriticalReactionTasks(task_uuid) {
        const url = `/results/${task_uuid}/critical_reactions`;
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].baseApiUrl + url, { observe: 'response' });
    }
    getTaskStatusObserver() {
        return this.taskObserver$;
    }
    stopCheckTasks() {
        this.stopPolling.next();
    }
    ngOnDestroy() {
        this.stopPolling.next();
    }
}
BackService.ɵfac = function BackService_Factory(t) { return new (t || BackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BackService, factory: BackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kXsz":
/*!************************************!*\
  !*** ./src/app/interfaces/task.ts ***!
  \************************************/
/*! exports provided: process_task_expiry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process_task_expiry", function() { return process_task_expiry; });
/* harmony import */ var _task_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-status-enum */ "E21b");

function process_task_expiry(task, expiry_hours, current_date) {
    let hours_difference = Math.abs(current_date.getTime() - new Date(task.init_date).getTime()) / 36e5;
    if (hours_difference > expiry_hours) {
        task.status = _task_status_enum__WEBPACK_IMPORTED_MODULE_0__["TaskStatusEnum"].EXPIRED;
    }
}


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");

class Constants {
}
Constants.websocketEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].websocketEndpoint;
Constants.baseApiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseApiUrl;
Constants.baseApiUrlStatic = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseApiUrlStatic;
Constants.EXPIRY_MODELS = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].EXPIRY_MODELS;
Constants.EXPIRY_TASKS = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].EXPIRY_TASKS;
Constants.localStorageItemTasks = 'tasks';
Constants.localStorageItemModels = 'models';
Constants.RESPONSE_TASK_NONE = 'none';
Constants.ERROR_KEY_FRACTION_OPTIMUM = 'Fraction error';
Constants.ERROR_FRACTION_OPTIMUM = 'Fraction of optimum must be between 0.0 and 1.0';
Constants.MIN_FRACTION_OPTIMUM = 0.0;
Constants.MAX_FRACTION_OPTIMUM = 1.0;


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StorageService {
    constructor() { }
    pushModel(model) {
        let models = this.getModels();
        models.push(model);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].localStorageItemModels, JSON.stringify(models));
    }
    popModel(modelInput) {
        let models = this.getModels();
        let index = -1;
        for (let i = 0; i < models.length; i++) {
            if (models[i].uuid === modelInput.uuid) {
                index = i;
                break;
            }
        }
        models.splice(index, 1);
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].localStorageItemModels, JSON.stringify(models));
    }
    updateModel(modelInput) {
        let models = this.getModels();
        const index = -1;
        for (let i = 0; i < models.length; i++) {
            if (models[i].uuid === modelInput.uuid) {
                models[i] = modelInput;
                break;
            }
        }
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].localStorageItemModels, JSON.stringify(models));
    }
    getModels() {
        let models = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].localStorageItemModels);
        if (models === undefined || models == null) {
            return [];
        }
        else {
            return JSON.parse(models);
        }
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oqRW":
/*!*******************************************************!*\
  !*** ./src/app/interfaces/forms/optimization-enum.ts ***!
  \*******************************************************/
/*! exports provided: OptimizationEnum, OptimizationEnumView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationEnum", function() { return OptimizationEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationEnumView", function() { return OptimizationEnumView; });
var OptimizationEnum;
(function (OptimizationEnum) {
    OptimizationEnum["FBA"] = "FBA";
    OptimizationEnum["pFBA"] = "pFBA";
})(OptimizationEnum || (OptimizationEnum = {}));
class OptimizationEnumView {
}
OptimizationEnumView.optimization = [
    { value: OptimizationEnum.FBA, viewValue: 'FBA' },
    { value: OptimizationEnum.pFBA, viewValue: 'pFBA' }
];


/***/ }),

/***/ "qZ4S":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ValidationService {
    constructor() {
        this.formGrowthDependentValidator = (control) => {
            return null;
        };
        this.formReactionsValidator = (control) => {
            const fraction_of_optimum = control.get('fraction_of_optimum');
            return fraction_of_optimum.invalid ? { invalidForm: true } : null;
        };
    }
    minMaxValidator(minimum, maximum) {
        return (control) => {
            let invalid = false;
            if (control.value < minimum || control.value > maximum) {
                invalid = true;
            }
            return invalid ? { invalidMinMax: { value: 'Fraction of optimum must be between 0.0 and 1.0' } } : null;
        };
    }
}
ValidationService.ɵfac = function ValidationService_Factory(t) { return new (t || ValidationService)(); };
ValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationService, factory: ValidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wthc":
/*!*************************************!*\
  !*** ./src/app/interfaces/model.ts ***!
  \*************************************/
/*! exports provided: process_model_expiry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process_model_expiry", function() { return process_model_expiry; });
/* harmony import */ var _task_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-status-enum */ "E21b");

function process_model_expiry(model, expiry_hours, current_date) {
    let hours_difference = Math.abs(current_date.getTime() - new Date(model.submitted).getTime()) / 36e5;
    if (hours_difference > expiry_hours) {
        for (let i = 0; i < model.tasks.length; i++) {
            model.tasks[i].status = _task_status_enum__WEBPACK_IMPORTED_MODULE_0__["TaskStatusEnum"].EXPIRED;
        }
    }
}


/***/ }),

/***/ "y9DB":
/*!*************************************************!*\
  !*** ./src/app/interfaces/forms/medium-enum.ts ***!
  \*************************************************/
/*! exports provided: MediumEnum, MediumEnumView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumEnum", function() { return MediumEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumEnumView", function() { return MediumEnumView; });
var MediumEnum;
(function (MediumEnum) {
    MediumEnum["DEFAULT"] = "DEFAULT";
    MediumEnum["COMPLETE"] = "COMPLETE";
})(MediumEnum || (MediumEnum = {}));
class MediumEnumView {
}
MediumEnumView.medium = [
    { value: MediumEnum.DEFAULT, viewValue: 'Default' },
    { value: MediumEnum.COMPLETE, viewValue: 'Complete' }
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map