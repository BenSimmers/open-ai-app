import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MakePhoto from "./components/MakePhoto.jsx";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <nav class="px-2 sm:px-4 py-2.5 bg-indigo-700 fixed w-full z-20 top-0 left-0 border-b border-indigo-700">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white drop-shadow">
                Another AI tool
              </span>
            </a>
            <div class="flex md:order-2">
              <a href="https://github.com/BenSimmers/open-ai-app">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow"
              >
                Github
              </button>
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                  <a
                    href="/makeaphoto"
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Make a photo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Text Generation - coming soon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makeaphoto" element={<MakePhoto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <div class="h-screen w-screen">
      <div class="bg-indigo-700 w-full h-full p-28 flex items-center justify-center">
        <div class="max-w-3xl flex h-full m-4 md:m-6">
          <div class="relative group sm:w-full md:w-1/2 hover:bg-indigo-800 border-t border-l border-b border-r md:border-r-0 bg-opacity-5">
            <h1 class="pl-2 pr-2 md:pl-8 mt-6 md:mt-8 text-2xl text-white font-serif transform duration-300 uppercase leading-snug">
              Another AI Image Tool
            </h1>
            <p class="pl-2 pr-2 md:pl-8 mt-2 md:mt-4 text-white text-sm md:text-base leading-relaxed">
              An easy to use image generator using Open AI's GPT-3 API built
              with React and TailwindCSS
            </p>
            <p class="absolute bottom-1 p-4 md:pl-8 text-white text-xs">
              More to come!
            </p>
          </div>
          <div class="md:w-1/2 hidden md:block bg-indigo-700">
            <img src="logo.png" alt="logo" class="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-indigo-700">
      <Navigation />
    </div>
  );
}
