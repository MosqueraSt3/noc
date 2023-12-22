import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron.service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
);

export class Server {
    public static start() {
        console.log("Server running...!");

        const emailService = new EmailService();
        emailService.sendEmail({
            to: envs.MAILER_EMAIL_TO,
            subject: 'System Logs',
            htmlBody: `
                <h3>NOC</h3>
                <p>lorem ipsum dolor rae</p>
            `,
        });

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    ( error ) => console.log( error )
                ).execute(url);
            },
        );
    }
}