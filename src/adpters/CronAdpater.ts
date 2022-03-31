import cron from "node-cron"

import { sendMessageUseCase } from "../useCases/SendMessages";

var task = cron.schedule('*/1 * * * *', async () => {
   await sendMessageUseCase.execute()
}, {
    scheduled: true
});

export default task