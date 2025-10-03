import express from 'express'; // Imports Express.js.

const app = express() // Creates an Express application instance. app variable is a server. Will accept users and respond to their requests.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
}) // tells us what to do when the user requests something with GET. If someone comes to our homepage with a GET request (/), send them 'Hello World!'.

app.get('/profile', (req, res) => {
  res.send('Hello developer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Starts the server on port 3000 and logs a confirmation message. Now the server is constantly listening for that door.