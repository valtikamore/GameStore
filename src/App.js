import {Header} from "./components/header/Header";
import {GameHub} from "./components/Main/GameHub/GameHub";
import React from "react";
import {UpcomingGames} from "./components/Main/UpcommingGames/upcomingGames";
import {Mail} from "./components/Main/Mail/Mail";
import {SubFooter} from "./components/Main/subFooter/subFooter";
import {Footer} from "./components/footer/footer";
import {Slider} from "./components/slider/slider";
function App({data}) {

  return (
    <div>
        <Header/>
        <Slider/>
        <main>
            <GameHub posts={data.posts} channels={data.channels}
                     friends={data.friends}/>
            <UpcomingGames cards={data.cards}/>
            <Mail/>
            <SubFooter/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
