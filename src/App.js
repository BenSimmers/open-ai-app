import React from 'react';
import MakePhoto from './components/MakePhoto';
import TextCompletions from './components/TextComplete';
import { BrowserRouter, Route, Link } from "react-router-dom";



const navItems = [
  { name: "Home", path: "/" },
  { name: "Make Photo", path: "/makephoto" },
  { name: "Text Completions", path: "/textcompletions" }
];


const Home = () => (
  <div>
    <section className="bg-white dark:bg-gray-900 h-100% py-[13rem]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Open AI Tool</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">An easy to use Open AI Tool using the Open AI API, built using React and Tailwind Css</p>
            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://venturebeat.com/wp-content/uploads/2019/08/openai-logo-vertical-dimensional-purple-e1588267015132.png?w=1200&strip=all" alt="mockup"/>
        </div>                
    </div>
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <MakePhoto />
      {/* <TextCompletions /> */}
      <p className="text-white">More to come!</p>
    </main>
    </section>
  </div>
);




export default function App() {
  return (
    <div classNameName="App">
      <div>
      <Home />
      </div>
    </div>
  );
}


