// import dotenv from 'dotenv';
// dotenv.config()
// import express from 'express';
// import {router} from './routes/router.routes'


// const app = express()
// app.use(express.json())
// app.use('/', router)
// const port = 3000

// app.listen(port, () =>{
//     console.log(`the server is running on http://localhost:${port}`)
// })


import nodemailer from 'nodemailer';

let transr = nodemailer.createTransport({
    port: 465,
    host: 'premium291.web-hosting.com',
    auth: {
        user: 'elinatsovo@savanapoint.com',
        pass: 'elinatsovo'
    }
})

const sendEmail = async() => {
    try {
        const res = await transr.sendMail({
            from: 'Elina <elinatsovo@savanapoint.com>',
            to: 'franciscoinoque@savanapoint.com',
            subject: 'Helloworld',
            text: 'Text to many pl'
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

sendEmail()

