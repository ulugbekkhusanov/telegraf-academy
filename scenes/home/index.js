const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('HOME_SCENE');


scene.enter(ctx => {
    ctx.reply('Welcome', Markup.keyboard([
        ['Faq']
    ]).extra());
});

scene.hears(('Faq'), ctx => ctx.scene.enter('FAQ_SCENE'));
// scene.command('/Faq', ctx => ctx.scene.enter('FAQ_SCENE'));

module.exports = scene;