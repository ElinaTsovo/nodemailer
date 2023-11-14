import nodemailer from 'nodemailer';
import{Request, Response} from 'express'
import { transporter } from '../config/smtp';

export const sendEmail = async (request:Request, response:Response) =>{
        const {email, firstName, body} = request.body;
        console.log(request.body)
        try {
            const sendingMail = await transporter.sendMail({
                from: 'Tsovita <elinatsovo@savanapoint.com>',
                subject: 'Welcome to my Github',
                to:email,
                text:`Hello, ${firstName} ${body}`
            })
            return response.status(200).json(true)
        } catch (error) {
            console.log(error)
            return response.status(500).json(error)
            
        }
}
