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
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var CreateUser = /** @class */ (function () {
    function CreateUser() {
    }
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateUser.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateUser.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateUser.prototype, "nickName", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateUser.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], CreateUser.prototype, "password", void 0);
    CreateUser = __decorate([
        type_graphql_1.InputType()
    ], CreateUser);
    return CreateUser;
}());
exports.default = CreateUser;
