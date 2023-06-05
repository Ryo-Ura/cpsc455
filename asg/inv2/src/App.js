import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";

import "./style/app.css"
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>My App</h1>
      <Form />
      <ItemList />
    </div>
  );
};

export default App;
