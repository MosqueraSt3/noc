import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PROD: env.get('PROD').required().asBool(),
    PORT: env.get('PORT').required().asPortNumber(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').required().asEmailString(),
    MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString(),
    MAILER_EMAIL_TO: env.get('MAILER_EMAIL_TO').required().asEmailString(),
    MONGO_PORT: env.get('MONGO_PORT').required().asPortNumber(),
    MONGO_URL: env.get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
    MONGO_DB_USER: env.get('MONGO_DB_USER').required().asString(),
    MONGO_DB_PASS: env.get('MONGO_DB_PASS').required().asString(),
}