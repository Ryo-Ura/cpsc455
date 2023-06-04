import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import ItemDetails from "./components/ItemDetails";

const App = () => {
  return (
    <div className="App">
      <h1>My App</h1>
      <Form />
      <ItemList />
      {/* <ItemDetails /> */}
    </div>
  );
};

export default App;
