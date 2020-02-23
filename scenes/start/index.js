const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('START_SCENE');

scene.enter(ctx => {
    ctx.reply('This is start scene', Markup.inlineKeyboard([
        Markup.callbackButton('Uzbek', 'uz'),
        Markup.callbackButton('Ruskiy', 'ru'),
        Markup.callbackButton('English', 'en')
    ]).extra());
})

scene.action('en', ctx => ctx.scene.enter('HOME_SCENE'));

module.exports = scene;