import React from "react";
import './App.css';
import Chatbot from './components/chatbot';// Ensure this is the correct import
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Chatbot />  {/* Use the imported component */}
    </div>
  );
}

export default App;