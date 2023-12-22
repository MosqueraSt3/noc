import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute: (too: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements SendLogEmailUseCase {
    
    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository,
    ) {}

    async execute(to: string | string[]) {
        try {
            const sent = await this.emailService.sendEmailWithFileSystemLogs(to);
            if (!sent) throw new Error('Email log was not sent');
            this.logRepository.saveLog(new LogEntity({
                level: LogSeverityLevel.low,
                message: `Log Email Sent`,
                origin: 'send-email-logs.ts',
            }));

            return true;
        } catch (error) {
            this.logRepository.saveLog(new LogEntity({
                level: LogSeverityLevel.high,
                message: `Email Not Sent. ${error}`,
                origin: 'send-email-logs.ts',
            }));
            return false;
        }
    }
}