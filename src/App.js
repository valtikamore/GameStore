
import {Header} from "./components/header/Header";
import {Main} from "./components/Main/Main";
import React from "react";

function App() {
  return (
    <div>
        <Header/>
        <div style={{height:'600px',width:'100%'}}>
            slider
        </div>
        <Main/>
        <footer>

        </footer>
    </div>
  );
}

export default App;
