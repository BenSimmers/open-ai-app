import React from "react";

import { useState, useEffect } from "react";

const MakePhoto = (props) => {
  const [images, setImages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [n, setN] = useState(1);

  const apiKey = '';

  const generateImages = () => {
    const url = 'https://api.openai.com/v1/images/generations';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };
    const data = {
      prompt: prompt,
      n: 1,
      size: '512x512',
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setImages(data.data));
  };

  return (
    <div>

        <h1 className="text-4xl lg:max-w-3xl tracking-tight font-bold text-white sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
        <span className="block xl:inline">Create an Image</span>
        </h1>

        <p>
          <span className="block text-gray-500 text-xl lg:max-w-3xl">
            Create an image with the help of Open AI
          </span>
        </p>

      <form>
        <label htmlFor="prompt" className="mt-2 text-white">Prompt</label>
        <input
          className="bg-gray-50 text-gray-900 text-sm rounded-lg outline-none focus:ring-purple-500 focus:outline-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        {/* <label htmlFor="n" className="mt-2 text-white">Number of Images</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="number"
          id="n"
          value={n}
          onChange={(e) => setN(e.target.value)}
        /> */}
      </form>
      <button onClick={generateImages} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2">Click to Generate Image</button>
      {
        images?.length === 0 ? <p className="text-white">Waiting for a Prompt...</p> : 
        images?.map((image) => (
        <div>
          <div className="py-2"/>
        <img src={image.url} alt="A nice Photos"/>
        </div>
      ))
      }
      <br/>
      <hr/>

    </div>
  );
};
export default MakePhoto;