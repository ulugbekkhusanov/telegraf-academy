const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');

const scene = new Scene('COURSE_SCENE');

scene.enter(async ctx => {
    ctx.replyWithPhoto('https://picsum.photos/200/300/', Markup.inlineKeyboard([
        Markup.callbackButton('Join this course', 'foo')

    ]).extra()), 
    ctx.replyWithPhoto('https://www.google.com/imgres?imgurl=https%3A%2F%2Fitea.uz%2Fwp-content%2Fuploads%2F2015%2F04%2Fjs-3-min.png&imgrefurl=https%3A%2F%2Fitea.uz%2Fcourses-itea%2Fjavascript%2Fjavascript-professional%2F&tbnid=V1BpdoLqyBR12M&vet=12ahUKEwiS9fW1yOrnAhXXzSoKHWx6DkoQMygWegQIARAv..i&docid=toIGQpK8QpJh7M&w=1080&h=612&q=JAVASCRIPT&ved=2ahUKEwiS9fW1yOrnAhXXzSoKHWx6DkoQMygWegQIARAv', Markup.inlineKeyboard([
        Markup.callbackButton('Join this course', 'foo')

    ]).extra()), 
    ctx.replyWithPhoto('https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.proglib.io%2Fwp-uploads%2F2019%2F08%2Fcss-libs.jpg&imgrefurl=https%3A%2F%2Fproglib.io%2Fp%2Fcss-frameworks&tbnid=dhgg9jumYu4OpM&vet=12ahUKEwiUpbzyyOrnAhVM6CoKHVU1CpYQMygbegQIARA9..i&docid=nQ1smxNkdVqWqM&w=1200&h=600&q=css&ved=2ahUKEwiUpbzyyOrnAhVM6CoKHVU1CpYQMygbegQIARA9', Markup.inlineKeyboard([
        Markup.callbackButton('Join this course', 'foo')

    ]).extra()), 
    await ctx.reply('Click /back button to go to the previous page',Markup.keyboard([
        ['/back']
    ]).extra());
    
    

});

scene.command('back', ctx => ctx.scene.enter('HOME_SCENE'));
scene.action('foo', async ctx  => {
    await ctx.replyWithPhoto('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fba%2Fee%2F7d%2Fbaee7d789ce0a5724025683d7eb99ce1.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F839076974300640509%2F&tbnid=c5WIor1dZ0sgIM&vet=12ahUKEwitlZKWtufnAhXDPpoKHfbwCeYQMygBegUIARDcAQ..i&docid=bQL4fwfijX4e4M&w=600&h=462&q=congratulations&ved=2ahUKEwitlZKWtufnAhXDPpoKHfbwCeYQMygBegUIARDcAQ'),
    ctx.reply('Congrats you have joined the course!!!')
});
module.exports = scene;