import * as convict from 'convict';


interface IConfig {

    env: string;
    server: {

        port: number;
    };
    api: {

        baseURL: string
    };
    database: {

    };
}

const config = convict<IConfig>({
    env: {
        format: ['local', 'development', 'production'],
        default:'local',
        env:'NODE_ENV',
        arg: 'node-env'
    },
    server: {
        port: {
            format: 'port',
            env: 'NODE_PORT',
            default: 4001
        },
    },
    api: {
        baseURL: {
          format: String,
          env: 'API_BASEURL',
          default: '/api/v1',
        },
      },
      database: {}
});

config.validate({ allowed: 'strict'});

module.exports.config = config;