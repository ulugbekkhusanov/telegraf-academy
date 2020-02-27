const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('HOME_SCENE');

scene.enter(ctx => {
    ctx.reply('Welcome', Markup.keyboard([
        ['Register'],
        ['Event']
    ]).extra());
});

scene.hears('Event', ctx => ctx.scene.enter('EVENT_SCENE'));

module.exports = scene;