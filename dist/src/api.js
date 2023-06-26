const express = require('express');
const app = express();

const router = express.Router();

// Handle incoming POST requests to the '/api/webhook' endpoint
router.post('/webhook', (req, res) => {
  // Process the webhook payload
  // Add your webhook handling logic here
  console.log(req.body);

  // Send a response back to the webhook sender
  res.json({ message: 'Webhook received successfully' });
});

// Mount the router on the '/api' base URL
app.use('/api', router);

// Serve static files from the 'public' directory (optional)
app.use(express.static('public'));

// Handle all other requests
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
