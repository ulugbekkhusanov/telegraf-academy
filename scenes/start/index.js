const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('START_SCENE');

scene.enter(ctx => {
    
    ctx.reply('Hello, to continue in english please press English', Markup.inlineKeyboard([
        Markup.callbackButton('Uzbek', 'uz'),
        Markup.callbackButton('Русский', 'ru'),
        Markup.callbackButton('English', 'en')
    ]).extra());
});


scene.action('en', ctx => ctx.scene.enter('HOME_SCENE'));

module.exports = scene;