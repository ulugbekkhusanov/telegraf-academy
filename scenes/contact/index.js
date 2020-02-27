const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('CONTACT_SCENE');

scene.enter(ctx => {
    ctx.reply('CONTACT SAHIFASI Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id vel dolorum, facere corrupti laudantium ea praesentium asperiores repellendus quod enim nesciunt corporis deleniti iste quis perspiciatis laborum illum esse!', Markup.inlineKeyboard([
        Markup.callbackButton('academy', 'uz'),
        Markup.callbackButton('email:itsbootcamp@gmail.coml', 'ru'),
        Markup.callbackButton('phone number:+998912820415', 'en')
    ]).extra())
    ctx.reply("q",Markup.keyboard([
        ['qaytish']
    ]).extra());
})

scene.hears('qaytish', ctx => ctx.scene.enter('HOME_SCENE'));
scene.action('en', ctx => ctx.scene.enter('CONTACT_SCENE'));

module.exports = scene;