"use strict";
/**
 * This File is auto Generated
 * ================================================
 * API Version    : v5.3.0
 * Changelog      : 25/6/2021
 * ================================================
 * @see https://ark0f.github.io/tg-bot-api to access json file
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
const request_1 = require("./utils/request");
class Methods {
    constructor(token) {
        this.token = token;
    }
    async getUpdates(params) {
        const response = await request_1.request('getUpdates', this.token, { ...params });
        return response;
    }
    async setWebhook(params) {
        const response = await request_1.request('setWebhook', this.token, { ...params });
        return response;
    }
    async deleteWebhook(params) {
        const response = await request_1.request('deleteWebhook', this.token, { ...params });
        return response;
    }
    async getWebhookInfo(params) {
        const response = await request_1.request('getWebhookInfo', this.token, { ...params });
        return response;
    }
    async getMe(params) {
        const response = await request_1.request('getMe', this.token, { ...params });
        return response;
    }
    async logOut(params) {
        const response = await request_1.request('logOut', this.token, { ...params });
        return response;
    }
    async close(params) {
        const response = await request_1.request('close', this.token, { ...params });
        return response;
    }
    async sendMessage(params) {
        const response = await request_1.request('sendMessage', this.token, { ...params });
        return response;
    }
    async forwardMessage(params) {
        const response = await request_1.request('forwardMessage', this.token, { ...params });
        return response;
    }
    async copyMessage(params) {
        const response = await request_1.request('copyMessage', this.token, { ...params });
        return response;
    }
    async sendPhoto(params) {
        const response = await request_1.request('sendPhoto', this.token, { ...params });
        return response;
    }
    async sendAudio(params) {
        const response = await request_1.request('sendAudio', this.token, { ...params });
        return response;
    }
    async sendDocument(params) {
        const response = await request_1.request('sendDocument', this.token, { ...params });
        return response;
    }
    async sendVideo(params) {
        const response = await request_1.request('sendVideo', this.token, { ...params });
        return response;
    }
    async sendAnimation(params) {
        const response = await request_1.request('sendAnimation', this.token, { ...params });
        return response;
    }
    async sendVoice(params) {
        const response = await request_1.request('sendVoice', this.token, { ...params });
        return response;
    }
    async sendVideoNote(params) {
        const response = await request_1.request('sendVideoNote', this.token, { ...params });
        return response;
    }
    async sendMediaGroup(params) {
        const response = await request_1.request('sendMediaGroup', this.token, { ...params });
        return response;
    }
    async sendLocation(params) {
        const response = await request_1.request('sendLocation', this.token, { ...params });
        return response;
    }
    async editMessageLiveLocation(params) {
        const response = await request_1.request('editMessageLiveLocation', this.token, { ...params });
        return response;
    }
    async stopMessageLiveLocation(params) {
        const response = await request_1.request('stopMessageLiveLocation', this.token, { ...params });
        return response;
    }
    async sendVenue(params) {
        const response = await request_1.request('sendVenue', this.token, { ...params });
        return response;
    }
    async sendContact(params) {
        const response = await request_1.request('sendContact', this.token, { ...params });
        return response;
    }
    async sendPoll(params) {
        const response = await request_1.request('sendPoll', this.token, { ...params });
        return response;
    }
    async sendDice(params) {
        const response = await request_1.request('sendDice', this.token, { ...params });
        return response;
    }
    async sendChatAction(params) {
        const response = await request_1.request('sendChatAction', this.token, { ...params });
        return response;
    }
    async getUserProfilePhotos(params) {
        const response = await request_1.request('getUserProfilePhotos', this.token, { ...params });
        return response;
    }
    async getFile(params) {
        const response = await request_1.request('getFile', this.token, { ...params });
        return response;
    }
    async banChatMember(params) {
        const response = await request_1.request('banChatMember', this.token, { ...params });
        return response;
    }
    async unbanChatMember(params) {
        const response = await request_1.request('unbanChatMember', this.token, { ...params });
        return response;
    }
    async restrictChatMember(params) {
        const response = await request_1.request('restrictChatMember', this.token, { ...params });
        return response;
    }
    async promoteChatMember(params) {
        const response = await request_1.request('promoteChatMember', this.token, { ...params });
        return response;
    }
    async setChatAdministratorCustomTitle(params) {
        const response = await request_1.request('setChatAdministratorCustomTitle', this.token, { ...params });
        return response;
    }
    async setChatPermissions(params) {
        const response = await request_1.request('setChatPermissions', this.token, { ...params });
        return response;
    }
    async exportChatInviteLink(params) {
        const response = await request_1.request('exportChatInviteLink', this.token, { ...params });
        return response;
    }
    async createChatInviteLink(params) {
        const response = await request_1.request('createChatInviteLink', this.token, { ...params });
        return response;
    }
    async editChatInviteLink(params) {
        const response = await request_1.request('editChatInviteLink', this.token, { ...params });
        return response;
    }
    async revokeChatInviteLink(params) {
        const response = await request_1.request('revokeChatInviteLink', this.token, { ...params });
        return response;
    }
    async setChatPhoto(params) {
        const response = await request_1.request('setChatPhoto', this.token, { ...params });
        return response;
    }
    async deleteChatPhoto(params) {
        const response = await request_1.request('deleteChatPhoto', this.token, { ...params });
        return response;
    }
    async setChatTitle(params) {
        const response = await request_1.request('setChatTitle', this.token, { ...params });
        return response;
    }
    async setChatDescription(params) {
        const response = await request_1.request('setChatDescription', this.token, { ...params });
        return response;
    }
    async pinChatMessage(params) {
        const response = await request_1.request('pinChatMessage', this.token, { ...params });
        return response;
    }
    async unpinChatMessage(params) {
        const response = await request_1.request('unpinChatMessage', this.token, { ...params });
        return response;
    }
    async unpinAllChatMessages(params) {
        const response = await request_1.request('unpinAllChatMessages', this.token, { ...params });
        return response;
    }
    async leaveChat(params) {
        const response = await request_1.request('leaveChat', this.token, { ...params });
        return response;
    }
    async getChat(params) {
        const response = await request_1.request('getChat', this.token, { ...params });
        return response;
    }
    async getChatAdministrators(params) {
        const response = await request_1.request('getChatAdministrators', this.token, { ...params });
        return response;
    }
    async getChatMemberCount(params) {
        const response = await request_1.request('getChatMemberCount', this.token, { ...params });
        return response;
    }
    async getChatMember(params) {
        const response = await request_1.request('getChatMember', this.token, { ...params });
        return response;
    }
    async setChatStickerSet(params) {
        const response = await request_1.request('setChatStickerSet', this.token, { ...params });
        return response;
    }
    async deleteChatStickerSet(params) {
        const response = await request_1.request('deleteChatStickerSet', this.token, { ...params });
        return response;
    }
    async answerCallbackQuery(params) {
        const response = await request_1.request('answerCallbackQuery', this.token, { ...params });
        return response;
    }
    async setMyCommands(params) {
        const response = await request_1.request('setMyCommands', this.token, { ...params });
        return response;
    }
    async deleteMyCommands(params) {
        const response = await request_1.request('deleteMyCommands', this.token, { ...params });
        return response;
    }
    async getMyCommands(params) {
        const response = await request_1.request('getMyCommands', this.token, { ...params });
        return response;
    }
    async editMessageText(params) {
        const response = await request_1.request('editMessageText', this.token, { ...params });
        return response;
    }
    async editMessageCaption(params) {
        const response = await request_1.request('editMessageCaption', this.token, { ...params });
        return response;
    }
    async editMessageMedia(params) {
        const response = await request_1.request('editMessageMedia', this.token, { ...params });
        return response;
    }
    async editMessageReplyMarkup(params) {
        const response = await request_1.request('editMessageReplyMarkup', this.token, { ...params });
        return response;
    }
    async stopPoll(params) {
        const response = await request_1.request('stopPoll', this.token, { ...params });
        return response;
    }
    async deleteMessage(params) {
        const response = await request_1.request('deleteMessage', this.token, { ...params });
        return response;
    }
    async sendSticker(params) {
        const response = await request_1.request('sendSticker', this.token, { ...params });
        return response;
    }
    async getStickerSet(params) {
        const response = await request_1.request('getStickerSet', this.token, { ...params });
        return response;
    }
    async uploadStickerFile(params) {
        const response = await request_1.request('uploadStickerFile', this.token, { ...params });
        return response;
    }
    async createNewStickerSet(params) {
        const response = await request_1.request('createNewStickerSet', this.token, { ...params });
        return response;
    }
    async addStickerToSet(params) {
        const response = await request_1.request('addStickerToSet', this.token, { ...params });
        return response;
    }
    async setStickerPositionInSet(params) {
        const response = await request_1.request('setStickerPositionInSet', this.token, { ...params });
        return response;
    }
    async deleteStickerFromSet(params) {
        const response = await request_1.request('deleteStickerFromSet', this.token, { ...params });
        return response;
    }
    async setStickerSetThumb(params) {
        const response = await request_1.request('setStickerSetThumb', this.token, { ...params });
        return response;
    }
    async answerInlineQuery(params) {
        const response = await request_1.request('answerInlineQuery', this.token, { ...params });
        return response;
    }
    async sendInvoice(params) {
        const response = await request_1.request('sendInvoice', this.token, { ...params });
        return response;
    }
    async answerShippingQuery(params) {
        const response = await request_1.request('answerShippingQuery', this.token, { ...params });
        return response;
    }
    async answerPreCheckoutQuery(params) {
        const response = await request_1.request('answerPreCheckoutQuery', this.token, { ...params });
        return response;
    }
    async setPassportDataErrors(params) {
        const response = await request_1.request('setPassportDataErrors', this.token, { ...params });
        return response;
    }
    async sendGame(params) {
        const response = await request_1.request('sendGame', this.token, { ...params });
        return response;
    }
    async setGameScore(params) {
        const response = await request_1.request('setGameScore', this.token, { ...params });
        return response;
    }
    async getGameHighScores(params) {
        const response = await request_1.request('getGameHighScores', this.token, { ...params });
        return response;
    }
}
exports.Methods = Methods;
