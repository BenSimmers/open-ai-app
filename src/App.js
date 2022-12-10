import React from 'react';
import MakePhoto from './components/MakePhoto';

import { BrowserRouter, Route, Link } from "react-router-dom";



const navItems = [
  { name: "Home", path: "/" },
  { name: "Make Photo", path: "/makephoto" },
];



export default function App() {
  return (
    <div className="App">
      <MakePhoto />
    </div>
  );
}