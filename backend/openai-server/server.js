const express = require('express');
const cors = require('cors');
const OpenAI = require('openai-api');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

const app = express();

app.use(cors());  // This line enables CORS

app.use(express.json());

app.post('/api/completion', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const gptResponse = await openai.complete({
      engine: 'text-davinci-003', // replace 'davinci' with 'text-davinci-003'
      prompt: prompt,
      maxTokens: 150
    });

    res.json(gptResponse.data);
  } catch (err) {
    console.error(err.response.data.error); // This should print the actual error message from OpenAI
    res.status(500).json({ error: err.toString() });
  }
});


app.listen(3001, () => console.log('Server listening on port 3001'));
