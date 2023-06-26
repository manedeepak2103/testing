const express = require('express');
const app = express();
const router = express.Router();
// Handle incoming POST requests to the '/webhook' endpoint
app.post('/webhook', (req, res) => {
  // Process the webhook payload
  // Add your webhook handling logic here
    console.log(req.body)
  // Send a response back to the webhook sender
  res.sendStatus(200);
});
router.get("/", (req, res) => {
    res.json({
      hello: "hi!"
    });
  });
  
  app.use(`/.netlify/functions/api`, router);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
