## @mousegram/methods
> Telegram Bot API Methods Build With Typescript 

| 📖 [See Docs Here](docs/modules.md) |
|-------------------------------------|

### Features
- Use Telegram API 5.3.0
- Auto Generated

### Usage
```js
const { Methods } = require("@mousegram/methods");
const token = "YOUR-BOT-TOKEN"; // get in @botfather
const bot = new Methods(token);

bot.getMe();
// and other method
```

### Special Thanks
- [node-fetch](https://github.com/node-fetch/node-fetch)
- [tg-bot-api](https://ark0f.github.io/tg-bot-api)