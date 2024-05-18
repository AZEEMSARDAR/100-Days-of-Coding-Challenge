"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = __importDefault(require("./export"));
const export_2 = require("./export");
(0, export_2.hello)();
console.log((0, export_2.sum)(4, 8));
console.log((0, export_1.default)(6, 4));
