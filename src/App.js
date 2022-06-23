import React from "react";
import Navbar from "./components/Navbar";
import ListContextProvider from "./contexts/ListContext";
import List from "./components/List";
import NewListForm from "./components/ListForm";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar />
        <List />
        <NewListForm />
      </ListContextProvider>
    </div>
  );
}

export default App;
