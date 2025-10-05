import express from 'express';
import reminderRoutes from './routes/remindersRoutes.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

const app = express() // Creates an Express application instance.
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/reminders', reminderRoutes)

app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})