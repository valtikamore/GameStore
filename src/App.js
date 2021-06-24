import {Header} from "./components/header/Header";
import React from "react";
import {Footer} from "./components/footer/footer";
import {Slider} from "./components/slider/slider";
import {Main} from "./components/Main/Main";
function App({data}) {

  return (
    <div>
        <Header menuItems={data.menuItems}/>
        <Slider/>
        <Main  posts={data.posts} friends={data.friends}
               channels={data.channels} cards={data.cards}/>
        <Footer/>
    </div>
  );
}

export default App;
