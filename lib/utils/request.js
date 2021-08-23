"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.API_URL = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.API_URL = 'https://api.telegram.org/bot';
async function request(action, token, params) {
    const POST_URL = `${exports.API_URL + token}/${action}`;
    const response = await node_fetch_1.default(POST_URL, {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    return result;
}
exports.request = request;
