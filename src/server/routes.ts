import * as express from 'express';
import { sendEmail } from './utils/mailgun'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.post('/api/contact', async (req, res, next) => {
    try {
        await sendEmail('zishanali06@gmail.com', 'no-reply@test.com', 'Zishan is the Best', req.body.message);
        res.send(`Message has been Sent with body of ${req.body.message}`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;