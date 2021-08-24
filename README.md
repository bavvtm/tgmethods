## @callmeumm/tgmethods
> Telegram Bot API Methods Build With Typescript 

| 📖 [Default Docs](https://core.telegram.org/bots/api#available-methods)|
|------------------------------------------------------------------------|
| 📖 [See Docs Here](docs/modules.md) |

### Features
- Use Telegram API 5.3.0
- Auto Generated

### Usage
```js
const { Methods } = require("@callmeumm/tgmethods");
const token = "YOUR-BOT-TOKEN"; // get in @botfather
const bot = new Methods(token);

bot.getMe();
// and other method
```

### Special Thanks
- [got](https://github.com/sindresorhus/got)
- [tg-bot-api](https://ark0f.github.io/tg-bot-api)