const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('HOME_SCENE');

scene.enter(async ctx => {
    ctx.replyWithPhoto('https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fchristitze%2Fchristitze1611%2Fchristitze161122399%2F66736620-homepage-red-text-on-typography-background-3d-rendered-royalty-free-stock-image-this-image-can-be-us.jpg&imgrefurl=https%3A%2F%2Fru.123rf.com%2Fphoto_66736620_homepage---red-text-on-typography-background---3d-rendered-royalty-free-stock-image.-this-image-can-.html&tbnid=KcCB4zfQCK-WXM&vet=12ahUKEwiuktbOyernAhWPuioKHU07C4gQMygNegUIARDmAQ..i&docid=sC12FG1YWunwiM&w=1300&h=650&itg=1&q=homepage%20text&ved=2ahUKEwiuktbOyernAhWPuioKHU07C4gQMygNegUIARDmAQ', Markup.inlineKeyboard([
       Markup.callbackButton('This is homepage', 'foo')

    ]).extra()), 
    await ctx.reply('Welcome to the main page', Markup.keyboard([
        ['/courses'],
        ['/start']
    ]).extra());
});

scene.command('courses', ctx => ctx.scene.enter('COURSE_SCENE'));
scene.command('start', ctx => ctx.scene.enter('START_SCENE'));

scene.enter(ctx => {
    ctx.reply('Welcome', Markup.keyboard([
        ['/contact']
    ]).extra());
});

scene.command('contact', ctx => ctx.scene.enter('CONTACT_SCENE'));

        ['Faq']
    ]).extra());
});

scene.hears(('Faq'), ctx => ctx.scene.enter('FAQ_SCENE'));
module.exports = scene;