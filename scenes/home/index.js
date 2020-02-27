const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('HOME_SCENE');

scene.enter(ctx => {
    ctx.reply('Welcome', Markup.keyboard([
        ['/contact']
    ]).extra());
});

scene.command('contact', ctx => ctx.scene.enter('CONTACT_SCENE'));
module.exports = scene;