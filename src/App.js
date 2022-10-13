import './App.css';
import {useEffect, useState} from "react";

function App() {

    const[text, setText] = useState("");

    useEffect(()=>{
        getText().then(t=>setText(t));
    },[])

    async function getText(){
        return await window.fetch("/test")
            .then(resp=>resp.text())
            .then(val=>{return val});
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
