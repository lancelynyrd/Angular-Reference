"use strict";
var user_detail_component_1 = require("./user-detail.component");
var user_edit_component_1 = require("./user-edit.component");
var user_detail_guard_1 = require("./user-detail.guard");
var user_edit_guard_1 = require("./user-edit.guard");
exports.USER_ROUTES = [
    { path: 'detail', component: user_detail_component_1.UserDetailComponent, canActivate: [user_detail_guard_1.UserDetailGuard] },
    { path: 'edit', component: user_edit_component_1.UserEditComponent, canDeactivate: [user_edit_guard_1.UserEditGuard] }
];
//# sourceMappingURL=user.routes.js.map