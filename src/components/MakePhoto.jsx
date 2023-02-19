import React from "react";
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

/**
 * config is the configuration object for the API client.
 */
const config = new Configuration({
  //REACT_APP_OPENAI_API_KEY
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

// Create an instance of the API class
const openai = new OpenAIApi(config);

export default function MakePhoto() {
  const [images, setImages] = useState([]);
  const [prompt, setPrompt] = useState("");

  const generateImage = async (prompt) => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });


    return response.data.data[0].url;
  };
  useEffect(() => {
    const getImages = async () => {
      const imagesFromServer = await generateImage(prompt);
      setImages(imagesFromServer);
    };
    getImages();
  }, [prompt]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt) {
      alert("Please add a prompt");
      return;
    }
    generateImage(prompt);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-700">
      <h1 className="text-black">Make a Photo</h1>
      <input
        type="text"
        className="bg-gray-800 text-white rounded p-2"
        placeholder="Enter a prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="py-2" />
      <button
        className="bg-gray-800 text-white rounded p-2"
        onClick={handleSubmit}
      >
        Generate Image
      </button>

      {/* map the images */}
      <img src={images} alt="Generated Image" />

    </div>
  );
};