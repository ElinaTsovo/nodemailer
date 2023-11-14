
import nodemailer from 'nodemailer';

const port: any = process.env.PORTSMTP
const host  = process.env.HOST
const user = process.env.USER
const pass =  process.env.PASSWORD

console.log(port, host, user, pass)
export const transporter = nodemailer.createTransport({
    port: port,
    host: `${host}`,
    auth: {
        user: user,
        pass: pass
    }
})