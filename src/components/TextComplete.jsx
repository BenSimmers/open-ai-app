import React, { useState } from 'react';

export default function TextCompletions(){
  const [response, setResponse] = useState(null);
  const [prompt, setPrompt] = useState('');

  //tokens
  const [temperature, setTemperature] = useState(0);
  const [max_tokens, setMax_tokens] = useState(7);
  const [top_p, setTop_p] = useState(1);
  const [frequency_penalty, setFrequency_penalty] = useState(0);
  const [presence_penalty, setPresence_penalty] = useState(0);

  const Request = async () => {
    try {
      const apiKey = '';
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: temperature,
          max_tokens: max_tokens,
          top_p: top_p,
          frequency_penalty: frequency_penalty,
          presence_penalty: presence_penalty,
          stop: ['\n', '###'],
        }),
      });
      const responseJson = await response.json();
      setResponse(responseJson);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>

      <h1>Text Completion</h1>
      <p>Click the button to generate a text completion</p>
      {/* make a form */}
      <form>
        <label htmlFor="prompt">Prompt</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <label htmlFor="temperature">Temperature</label>
        <input
          type="number"
          id="temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <label htmlFor="max_tokens">Max Tokens</label>
        <input
          type="number"
          id="max_tokens"
          value={max_tokens}
          onChange={(e) => setMax_tokens(e.target.value)}
        />

        <label htmlFor="top_p">Top P</label>
        <input
          type="number"
          id="top_p"
          value={top_p}
          onChange={(e) => setTop_p(e.target.value)}
        />

        <label htmlFor="frequency_penalty">Frequency Penalty</label>
        <input
          type="number"
          id="frequency_penalty"
          value={frequency_penalty}
          onChange={(e) => setFrequency_penalty(e.target.value)}
        />

        <label htmlFor="presence_penalty">Presence Penalty</label>
        <input
          type="number"
          id="presence_penalty"
          value={presence_penalty}
          onChange={(e) => setPresence_penalty(e.target.value)}
        />
      </form>

      <button onClick={Request}>Request</button>
      <p>{response && response.choices[0].text}</p>
    </div>
  );
}
