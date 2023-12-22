import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}

interface Attachment {
    filename: string;
    path: string;
}

export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });


    constructor() {}

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            })

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email Sent',
                origin: 'email.service.ts',
            })

            return true;
        } catch (error) {
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email Not Sent',
                origin: 'email.service.ts',
            })
            return false;
        }
    }

    sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Server Logs';
        const htmlBody = `
            <h3>NOC</h3>
            <p>lorem ipsum dolor rae</p>
        `;

        const attachments:Attachment[] = [
            { filename: 'logs-low.log', path: './logs/logs-low.log'},
            { filename: 'logs-medium.log', path: './logs/logs-medium.log'},
            { filename: 'logs-high.log', path: './logs/logs-high.log'},
        ];

        this.sendEmail({
            to,
            subject,
            htmlBody,
            attachments,
        })

        return true;

    }
}