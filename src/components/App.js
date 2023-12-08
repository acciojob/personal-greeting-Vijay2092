

import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("")
  function handle(event){
    setText("Hello "+event.target.value+"!");
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label><br></br>
        <input type="text" id="name" onChange={handle}></input>
        <p>{text}</p>
    </div>
  )
}

export default App;
