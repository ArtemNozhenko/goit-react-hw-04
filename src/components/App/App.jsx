// import { useState } from 'react'

import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const handleSearch = (topic) => {
    console.log(topic);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
