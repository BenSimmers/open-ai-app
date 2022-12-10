import React from "react";

import { useState, useEffect } from "react";

const MakePhoto = (props) => {
  const [images, setImages] = useState([]);
  const [prompt, setPrompt] = React.useState('');
  const [n, setN] = React.useState(1);

  const apiKey = 'YOUR_API_KEY';

  const generateImages = () => {
    const url = 'https://api.openai.com/v1/images/generations';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };
    const data = {
      prompt: prompt,
      n: n,
      size: '1024x1024',
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

      <h1>Make a Photo</h1>
      <p>Click the button to generate a photo</p>
      {/* make a form */}
      <form>
        <label htmlFor="prompt">Prompt</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <label htmlFor="n">Number of Images</label>
        <input
          type="number"
          id="n"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </form>
      {/* make a button */}

      <button onClick={generateImages}>Generate Images</button>


      {
        images.length === 0 ? <p>Loading...</p> : 
        images.map((image) => (
        <img src={image.url} alt="A nice Photos" />
      ))

      }


    </div>
  );
};

export default MakePhoto;