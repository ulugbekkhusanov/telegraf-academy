const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('CONTACT_SCENE');

scene.enter(ctx => {
    ctx.replyWithHTML('<b>E-mail:</b> IT_academy@gmail.com\n\n<b>Tel:</b>  +99891 396-64-87 \n         +99891 282-04-15\n<b>Fax:</b> +99873 244-01-01 \n\n<b>Address:</b>   Fergana region, Rishtan district, Ar-Roshidoniy street, 201',Markup.keyboard([
        ['/qaytish']
    ]).extra());
});
//     ctx.reply('qaytish',Markup.keyboard([
//         ['/qaytish']
//     ]).extra());

scene.command('qaytish', ctx => ctx.scene.enter('HOME_SCENE'));
module.exports = scene