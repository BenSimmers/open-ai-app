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

        <div className="py-6"/>
        <h1 className="text-4xl lg:max-w-3xl tracking-tight font-bold text-white sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
          <span className="block xl:inline">Text Completions</span>
        </h1>

        <p>
          <span className="block text-gray-500 text-xl lg:max-w-3xl">
            Generate text with the help of Open AI
          </span>
        </p>

      <form>
        <label htmlFor="prompt" className="mt-2 text-white">Prompt</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <label htmlFor="temperature" className="mt-2 text-white">Temperature</label>
        <input
          type="number"
          id="temperature"
          value={temperature}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setTemperature(e.target.value)}
        />
        <label htmlFor="max_tokens" className="mt-2 text-white">Max Tokens</label>
        <input
          type="number"
          id="max_tokens"
          value={max_tokens}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setMax_tokens(e.target.value)}
        />
        <label htmlFor="top_p" className="mt-2 text-white">Top P</label>
        <input
          type="number"
          id="top_p"
          value={top_p}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setTop_p(e.target.value)}

        />

        <label htmlFor="frequency_penalty" className="mt-2 text-white">Frequency Penalty</label>
        <input
          type="number"
          id="frequency_penalty"
          value={frequency_penalty}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setFrequency_penalty(e.target.value)}
        />

        <label htmlFor="presence_penalty" className="mt-2 text-white">Presence Penalty</label>
        <input
          type="number"
          id="presence_penalty"
          value={presence_penalty}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          onChange={(e) => setPresence_penalty(e.target.value)}
        />
      </form>

      <button onClick={Request} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2">Request</button>
      <p className="text-white">{response && response.choices[0].text}</p>
    </div>
  );
}
