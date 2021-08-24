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
    const headers = {
        'content-type': 'application/json',
    };
    const body = JSON.stringify(params);
    const response = await node_fetch_1.default(POST_URL, {
        compress: false,
        method: 'POST',
        headers,
        body: body
    });
    if (response !== undefined) {
        const json = await response.json();
        if (json.ok)
            return json.result;
    }
    else {
        return "ERROR";
    }
}
exports.request = request;
