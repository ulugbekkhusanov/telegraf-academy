const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('EVENT_SCENE');

let img = [
    "https://cdn.pixabay.com/photo/2020/02/20/20/55/snowdrop-4865866_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/07/22/14/12/bike-1534902_960_720.jpg",
    "https://picsum.photos/200/300/"
]


scene.enter(async ctx => {
    for(let i=0; i<=2; i++){
        await ctx.replyWithPhoto(img[i]),
        ctx.reply('Lorem lorem lorem lorem lorem', Markup.inlineKeyboard([
            Markup.callbackButton("Views", 'aa'),
        ]).extra())
    }
    ctx.reply("qaytish",Markup.keyboard([
        ['qaytish']
    ]).extra());
})

scene.hears('qaytish', ctx => ctx.scene.enter('HOME_SCENE'));

module.exports = scene;