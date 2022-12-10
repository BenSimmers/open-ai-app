import React from 'react';
import MakePhoto from './components/MakePhoto';
import TextCompletions from './components/TextComplete';
import { BrowserRouter, Route, Link } from "react-router-dom";



const navItems = [
  { name: "Home", path: "/" },
  { name: "Make Photo", path: "/makephoto" },
  { name: "Text Completions", path: "/textcompletions" }
];



export default function App() {
  return (
    <div className="App">
      <MakePhoto />
      <TextCompletions />
    </div>
  );
}


