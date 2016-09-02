"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./user/user.component");
var home_component_component_1 = require("./home-component.component");
var user_routes_1 = require("./user/user.routes");
var APP_ROUTES = [
    { path: 'user/:id', component: user_component_1.UserComponent },
    { path: 'user/:id', component: user_component_1.UserComponent, children: user_routes_1.USER_ROUTES },
    { path: '', component: home_component_component_1.HomeComponent },
    { path: '**', redirectTo: '/user/1', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map