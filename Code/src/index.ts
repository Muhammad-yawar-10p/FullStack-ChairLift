import config from '../config';

var app = require('./app');

const bootstrap = async () => {

    app.use(async ctx => {

        ctx.body = 'Welcome to server';
    });

    console.log(config.server.port);
    
    app.listen(config.server.port);
};
bootstrap();