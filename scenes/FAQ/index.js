const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');
const scene = new Scene('FAQ_SCENE');

// 
scene.enter(async ctx =>{
    ctx.replyWithHTML("<b>savol : Academiyada necha yoshdan o`qish mumkin?  </b>                        JAVOB : imkon qadar 16-17 yosh chegarasida bo`lgan ma`qulroq" )    
    ctx.replyWithHTML('<b>Savol : O`quvchilarga qo`yiladigan talablar qanday?</b>"                             JAVOB : Kompyuter tehnologiyalari bilan ishlash ko`nikmasi, intizomga rioya qilish, ingliz tilini o`rtacha-mukammal bilish(agar ingliz tilini bilmasangiz qo`shimcha mashg`ulot mavjud)');
       
        await ctx.reply('Click back button to go to the previous page',Markup.keyboard([
            ['Back'] 
        ]).extra());    
    });
    
    scene.hears('Back', ctx => ctx.scene.enter('HOME_SCENE'));


    
module.exports = scene;

// 

