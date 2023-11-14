import Router from 'express';
import {sendEmail} from '../service/nodemailer'

export const router = Router()

router.post ('/email', sendEmail)