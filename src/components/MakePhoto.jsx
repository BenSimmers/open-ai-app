import React from "react";
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Link } from "react-router-dom";
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
    // <div className="">
    //   <h1 className="text-black">Make a Photo</h1>
    //   <input
    //     type="text"
    //     className="bg-gray-800 text-white rounded p-2"
    //     placeholder="Enter a prompt"
    //     value={prompt}
    //     onChange={(e) => setPrompt(e.target.value)}
    //   />
    //   <div className="py-2" />
    //   <button
    //     className="bg-gray-800 text-white rounded p-2"
    //     onClick={handleSubmit}
    //   >
    //     Generate Image
    //   </button>

    //   {/* map the images */}
    //   <img src={images} alt="Generated Image" />

    // </div>

    // make a nice form that looks like the home page
    <div>
      <div className="justify-center items-center flex flex-col h-screen">
      <div class="flex flex-col items-center  border border-gray-200 shadow md:flex-row md:max-w-xl">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Text to Image
          </h5>
          <p class="mb-3 font-normal text-gray-300">
            Enter a prompt and generate an image
          </p>
          <form onSubmit={handleSubmit}>
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
          </form>


        </div>
        {/* <img class="object-cover w-full h-96 md:h-auto md:w-48" src="logo.png" alt=""/> */}

        
        <img class="object-cover w-full h-96 md:h-auto md:w-48" src={images ? images : "logo.png"} alt=""/>


      </div>
    </div>




    </div>
  );
}
