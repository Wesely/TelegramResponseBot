const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5008698438:AAFQoEx73kqgeq4ya6NurOZcYYab_Iw2qIk';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/.*好耶.*/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/3BqyRpY.jpg');// 好耶
});

bot.onText(/不可以色色/, (msg, match) => {
    bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/zyfCvep.jpg'); // 不可以色色
});
bot.onText(/^(不可以色色)?可以色色/, (msg, match) => {
    bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/mwhsu3E.jpg'); // 可以色色
});
bot.onText(/大爆射/, (msg, match) => {
    bot.sendMessage(msg.chat.id, 'https://i.imgur.com/hofX9m9.gif');
});
bot.onText(/(我要色色)/, (msg, match) => {
    bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/Pdu9Y4k.jpg');
});


// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendPhoto(chatId, 'https://i.imgur.com/f39TdZe.jpg');
  
// });
