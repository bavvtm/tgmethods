/**
 * This File is auto Generated
 * ================================================
 * API Version    : v5.3.0
 * Changelog      : 25/6/2021
 * ================================================
 * @see https://ark0f.github.io/tg-bot-api to access json file
 */

import { request } from './utils/request';
import * as Types from './types';

export class Methods {

   constructor(
      private readonly token: string
   ) {}

   public async getUpdates(params?: Types.getUpdates) {
      const response = await request('getUpdates', this.token, { ...params });
      return response;
   }

   public async setWebhook(params?: Types.setWebhook) {
      const response = await request('setWebhook', this.token, { ...params });
      return response;
   }

   public async deleteWebhook(params?: Types.deleteWebhook) {
      const response = await request('deleteWebhook', this.token, { ...params });
      return response;
   }

   public async getWebhookInfo(params?: Types.getWebhookInfo) {
      const response = await request('getWebhookInfo', this.token, { ...params });
      return response;
   }

   public async getMe(params?: Types.getMe) {
      const response = await request('getMe', this.token, { ...params });
      return response;
   }

   public async logOut(params?: Types.logOut) {
      const response = await request('logOut', this.token, { ...params });
      return response;
   }

   public async close(params?: Types.close) {
      const response = await request('close', this.token, { ...params });
      return response;
   }

   public async sendMessage(params?: Types.sendMessage) {
      const response = await request('sendMessage', this.token, { ...params });
      return response;
   }

   public async forwardMessage(params?: Types.forwardMessage) {
      const response = await request('forwardMessage', this.token, { ...params });
      return response;
   }

   public async copyMessage(params?: Types.copyMessage) {
      const response = await request('copyMessage', this.token, { ...params });
      return response;
   }

   public async sendPhoto(params?: Types.sendPhoto) {
      const response = await request('sendPhoto', this.token, { ...params });
      return response;
   }

   public async sendAudio(params?: Types.sendAudio) {
      const response = await request('sendAudio', this.token, { ...params });
      return response;
   }

   public async sendDocument(params?: Types.sendDocument) {
      const response = await request('sendDocument', this.token, { ...params });
      return response;
   }

   public async sendVideo(params?: Types.sendVideo) {
      const response = await request('sendVideo', this.token, { ...params });
      return response;
   }

   public async sendAnimation(params?: Types.sendAnimation) {
      const response = await request('sendAnimation', this.token, { ...params });
      return response;
   }

   public async sendVoice(params?: Types.sendVoice) {
      const response = await request('sendVoice', this.token, { ...params });
      return response;
   }

   public async sendVideoNote(params?: Types.sendVideoNote) {
      const response = await request('sendVideoNote', this.token, { ...params });
      return response;
   }

   public async sendMediaGroup(params?: Types.sendMediaGroup) {
      const response = await request('sendMediaGroup', this.token, { ...params });
      return response;
   }

   public async sendLocation(params?: Types.sendLocation) {
      const response = await request('sendLocation', this.token, { ...params });
      return response;
   }

   public async editMessageLiveLocation(params?: Types.editMessageLiveLocation) {
      const response = await request('editMessageLiveLocation', this.token, { ...params });
      return response;
   }

   public async stopMessageLiveLocation(params?: Types.stopMessageLiveLocation) {
      const response = await request('stopMessageLiveLocation', this.token, { ...params });
      return response;
   }

   public async sendVenue(params?: Types.sendVenue) {
      const response = await request('sendVenue', this.token, { ...params });
      return response;
   }

   public async sendContact(params?: Types.sendContact) {
      const response = await request('sendContact', this.token, { ...params });
      return response;
   }

   public async sendPoll(params?: Types.sendPoll) {
      const response = await request('sendPoll', this.token, { ...params });
      return response;
   }

   public async sendDice(params?: Types.sendDice) {
      const response = await request('sendDice', this.token, { ...params });
      return response;
   }

   public async sendChatAction(params?: Types.sendChatAction) {
      const response = await request('sendChatAction', this.token, { ...params });
      return response;
   }

   public async getUserProfilePhotos(params?: Types.getUserProfilePhotos) {
      const response = await request('getUserProfilePhotos', this.token, { ...params });
      return response;
   }

   public async getFile(params?: Types.getFile) {
      const response = await request('getFile', this.token, { ...params });
      return response;
   }

   public async banChatMember(params?: Types.banChatMember) {
      const response = await request('banChatMember', this.token, { ...params });
      return response;
   }

   public async unbanChatMember(params?: Types.unbanChatMember) {
      const response = await request('unbanChatMember', this.token, { ...params });
      return response;
   }

   public async restrictChatMember(params?: Types.restrictChatMember) {
      const response = await request('restrictChatMember', this.token, { ...params });
      return response;
   }

   public async promoteChatMember(params?: Types.promoteChatMember) {
      const response = await request('promoteChatMember', this.token, { ...params });
      return response;
   }

   public async setChatAdministratorCustomTitle(params?: Types.setChatAdministratorCustomTitle) {
      const response = await request('setChatAdministratorCustomTitle', this.token, { ...params });
      return response;
   }

   public async setChatPermissions(params?: Types.setChatPermissions) {
      const response = await request('setChatPermissions', this.token, { ...params });
      return response;
   }

   public async exportChatInviteLink(params?: Types.exportChatInviteLink) {
      const response = await request('exportChatInviteLink', this.token, { ...params });
      return response;
   }

   public async createChatInviteLink(params?: Types.createChatInviteLink) {
      const response = await request('createChatInviteLink', this.token, { ...params });
      return response;
   }

   public async editChatInviteLink(params?: Types.editChatInviteLink) {
      const response = await request('editChatInviteLink', this.token, { ...params });
      return response;
   }

   public async revokeChatInviteLink(params?: Types.revokeChatInviteLink) {
      const response = await request('revokeChatInviteLink', this.token, { ...params });
      return response;
   }

   public async setChatPhoto(params?: Types.setChatPhoto) {
      const response = await request('setChatPhoto', this.token, { ...params });
      return response;
   }

   public async deleteChatPhoto(params?: Types.deleteChatPhoto) {
      const response = await request('deleteChatPhoto', this.token, { ...params });
      return response;
   }

   public async setChatTitle(params?: Types.setChatTitle) {
      const response = await request('setChatTitle', this.token, { ...params });
      return response;
   }

   public async setChatDescription(params?: Types.setChatDescription) {
      const response = await request('setChatDescription', this.token, { ...params });
      return response;
   }

   public async pinChatMessage(params?: Types.pinChatMessage) {
      const response = await request('pinChatMessage', this.token, { ...params });
      return response;
   }

   public async unpinChatMessage(params?: Types.unpinChatMessage) {
      const response = await request('unpinChatMessage', this.token, { ...params });
      return response;
   }

   public async unpinAllChatMessages(params?: Types.unpinAllChatMessages) {
      const response = await request('unpinAllChatMessages', this.token, { ...params });
      return response;
   }

   public async leaveChat(params?: Types.leaveChat) {
      const response = await request('leaveChat', this.token, { ...params });
      return response;
   }

   public async getChat(params?: Types.getChat) {
      const response = await request('getChat', this.token, { ...params });
      return response;
   }

   public async getChatAdministrators(params?: Types.getChatAdministrators) {
      const response = await request('getChatAdministrators', this.token, { ...params });
      return response;
   }

   public async getChatMemberCount(params?: Types.getChatMemberCount) {
      const response = await request('getChatMemberCount', this.token, { ...params });
      return response;
   }

   public async getChatMember(params?: Types.getChatMember) {
      const response = await request('getChatMember', this.token, { ...params });
      return response;
   }

   public async setChatStickerSet(params?: Types.setChatStickerSet) {
      const response = await request('setChatStickerSet', this.token, { ...params });
      return response;
   }

   public async deleteChatStickerSet(params?: Types.deleteChatStickerSet) {
      const response = await request('deleteChatStickerSet', this.token, { ...params });
      return response;
   }

   public async answerCallbackQuery(params?: Types.answerCallbackQuery) {
      const response = await request('answerCallbackQuery', this.token, { ...params });
      return response;
   }

   public async setMyCommands(params?: Types.setMyCommands) {
      const response = await request('setMyCommands', this.token, { ...params });
      return response;
   }

   public async deleteMyCommands(params?: Types.deleteMyCommands) {
      const response = await request('deleteMyCommands', this.token, { ...params });
      return response;
   }

   public async getMyCommands(params?: Types.getMyCommands) {
      const response = await request('getMyCommands', this.token, { ...params });
      return response;
   }

   public async editMessageText(params?: Types.editMessageText) {
      const response = await request('editMessageText', this.token, { ...params });
      return response;
   }

   public async editMessageCaption(params?: Types.editMessageCaption) {
      const response = await request('editMessageCaption', this.token, { ...params });
      return response;
   }

   public async editMessageMedia(params?: Types.editMessageMedia) {
      const response = await request('editMessageMedia', this.token, { ...params });
      return response;
   }

   public async editMessageReplyMarkup(params?: Types.editMessageReplyMarkup) {
      const response = await request('editMessageReplyMarkup', this.token, { ...params });
      return response;
   }

   public async stopPoll(params?: Types.stopPoll) {
      const response = await request('stopPoll', this.token, { ...params });
      return response;
   }

   public async deleteMessage(params?: Types.deleteMessage) {
      const response = await request('deleteMessage', this.token, { ...params });
      return response;
   }

   public async sendSticker(params?: Types.sendSticker) {
      const response = await request('sendSticker', this.token, { ...params });
      return response;
   }

   public async getStickerSet(params?: Types.getStickerSet) {
      const response = await request('getStickerSet', this.token, { ...params });
      return response;
   }

   public async uploadStickerFile(params?: Types.uploadStickerFile) {
      const response = await request('uploadStickerFile', this.token, { ...params });
      return response;
   }

   public async createNewStickerSet(params?: Types.createNewStickerSet) {
      const response = await request('createNewStickerSet', this.token, { ...params });
      return response;
   }

   public async addStickerToSet(params?: Types.addStickerToSet) {
      const response = await request('addStickerToSet', this.token, { ...params });
      return response;
   }

   public async setStickerPositionInSet(params?: Types.setStickerPositionInSet) {
      const response = await request('setStickerPositionInSet', this.token, { ...params });
      return response;
   }

   public async deleteStickerFromSet(params?: Types.deleteStickerFromSet) {
      const response = await request('deleteStickerFromSet', this.token, { ...params });
      return response;
   }

   public async setStickerSetThumb(params?: Types.setStickerSetThumb) {
      const response = await request('setStickerSetThumb', this.token, { ...params });
      return response;
   }

   public async answerInlineQuery(params?: Types.answerInlineQuery) {
      const response = await request('answerInlineQuery', this.token, { ...params });
      return response;
   }

   public async sendInvoice(params?: Types.sendInvoice) {
      const response = await request('sendInvoice', this.token, { ...params });
      return response;
   }

   public async answerShippingQuery(params?: Types.answerShippingQuery) {
      const response = await request('answerShippingQuery', this.token, { ...params });
      return response;
   }

   public async answerPreCheckoutQuery(params?: Types.answerPreCheckoutQuery) {
      const response = await request('answerPreCheckoutQuery', this.token, { ...params });
      return response;
   }

   public async setPassportDataErrors(params?: Types.setPassportDataErrors) {
      const response = await request('setPassportDataErrors', this.token, { ...params });
      return response;
   }

   public async sendGame(params?: Types.sendGame) {
      const response = await request('sendGame', this.token, { ...params });
      return response;
   }

   public async setGameScore(params?: Types.setGameScore) {
      const response = await request('setGameScore', this.token, { ...params });
      return response;
   }

   public async getGameHighScores(params?: Types.getGameHighScores) {
      const response = await request('getGameHighScores', this.token, { ...params });
      return response;
   }

}