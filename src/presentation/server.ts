import { envs } from "../config/plugins/envs.plugin";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailService } from "./email/email.service";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDataSource(),
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDataSource(),
);

const emailService = new EmailService();

export class Server {
    public static start() {
        console.log("Server running...!");

        new SendEmailLogs(emailService, fsLogRepository)
            .execute(envs.MAILER_EMAIL_TO);


        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckServiceMultiple(
                    [fsLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log(`${url} is ok`),
                    ( error ) => console.log( error )
                ).execute(url);
            },
        );
    }
}