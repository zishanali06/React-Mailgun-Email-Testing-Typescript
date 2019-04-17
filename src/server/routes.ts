import * as express from 'express';
import { sendEmail } from './utils/mailgun'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.post('/api/contact', async (req, res, next) => {
    try {
        await sendEmail(req.body.to , 'no-reply@test.com', req.body.subject, req.body.message);
        res.send(`Message has been Sent with body of ${req.body.message}`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;