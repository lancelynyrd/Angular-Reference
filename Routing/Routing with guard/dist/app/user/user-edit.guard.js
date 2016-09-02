"use strict";
var UserEditGuard = (function () {
    function UserEditGuard() {
    }
    UserEditGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return UserEditGuard;
}());
exports.UserEditGuard = UserEditGuard;
//# sourceMappingURL=user-edit.guard.js.map