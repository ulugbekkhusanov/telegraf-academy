require('dotenv').config();

const Telegraf = require('telegraf');
const session = require('telegraf/session');
const Stage = require('telegraf/stage');
const startScene = require('./scenes/start');
const homeScene = require('./scenes/home');
const courseScene = require('./scenes/course');



const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Stage([startScene, homeScene, courseScene], { default: 'START_SCENE' });
bot.use(session());
bot.use(stage.middleware());

bot.start(ctx => ctx.scene.enter('START_SCENE'))

bot.launch();