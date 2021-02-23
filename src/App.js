import React from "react";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
   
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    
  );
}

export default App;
