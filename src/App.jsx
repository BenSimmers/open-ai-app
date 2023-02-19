import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MakePhoto from "./components/MakePhoto.jsx";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <nav class="flex items-center justify-between flex-wrap bg-indigo-700 p-6">
          <a href="/" class="flex items-center flex-shrink-0 text-white mr-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <span class="font-semibold text-xl tracking-tight">
                Another Ai Image Generator
              </span>
            </div>
          </a>

          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="/makeaphoto"
                class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 border border-black rounded p-2 shadow-lg w-max"
              >
                Text to Image
              </a>
            </div>
            <div>
              <a
                href="https://github.com/BenSimmers/open-ai-app"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Github
              </a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<MakePhoto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <div className="justify-center items-center flex flex-col h-screen">
      <div
        class="flex flex-col items-center  border border-gray-200 shadow md:flex-row md:max-w-xl"
      >
        <img
          class="object-cover w-full h-96 md:h-auto md:w-48"
          src="logo.png"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Another Ai Image Generator
          </h5>
          <p class="mb-3 font-normal text-gray-300">
             Minimal application that uses the Open Ai API to generate images with more to come.
          </p>

          <Link to="/photo">
            <button class="bg-gray-800 text-white rounded p-2">
              Make a Photo
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-indigo-700">
      {/* <Navigation /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<MakePhoto />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}
