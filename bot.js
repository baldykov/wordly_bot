require('dotenv').config();

const { Telegraf } = require('telegraf');

// Вставьте токен вашего бота, который вы получили от BotFather
const bot = new Telegraf(process.env.BOT_TOKEN);
console.log('Ваш токен:', process.env.BOT_TOKEN);
// Команда для запуска игры
bot.start((ctx) => {
  ctx.reply('Добро пожаловать в игру! Нажмите на кнопку ниже, чтобы начать играть.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Запустить игру", web_app: { url: 'https://baldykov.github.io/wordly?tgWebApp=true' } }]
      ]
    }
  });
});

// Запуск бота
bot.launch();

// Обработка завершения процесса (например, при нажатии Ctrl + C)
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
