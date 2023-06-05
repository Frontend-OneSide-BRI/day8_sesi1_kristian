import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FormInput from "./components/InputForm";
import ListUser from "./components/ListUser";

function App() {
  return (
    <div className="App">
      <FormInput />
      <ListUser />
    </div>
  );
}

export default App;
