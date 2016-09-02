"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var user_detail_guard_1 = require("./user/user-detail.guard");
var user_edit_guard_1 = require("./user/user-edit.guard");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./user/user.component");
var user_detail_component_1 = require("./user/user-detail.component");
var user_edit_component_1 = require("./user/user-edit.component");
var home_component_component_1 = require("./home-component.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                user_detail_component_1.UserDetailComponent,
                user_edit_component_1.UserEditComponent,
                home_component_component_1.HomeComponent
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_detail_guard_1.UserDetailGuard, user_edit_guard_1.UserEditGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map