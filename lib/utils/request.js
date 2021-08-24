"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.API_URL = void 0;
const got_1 = __importDefault(require("got"));
exports.API_URL = 'https://api.telegram.org/bot';
async function request(action, token, params) {
    const POST_URL = `${exports.API_URL + token}/${action}`;
    const response = await got_1.default.post(POST_URL, {
        json: params
    }).json();
    return response;
}
exports.request = request;
