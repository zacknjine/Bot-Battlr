import { useEffect, useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [data, setData] = useState([]);
  const [myBots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // todo make a delete request
  const dischargeBot = (id) => {
    releaseBot(id);
    // make a delete request
    console.log("remove from db");
  };

  // enlist bot
  const enlistBot = (bot) => {
    const findBot = myBots.find((b) => b.id === bot.id);
    if (findBot === undefined) {
      setBots([...myBots, bot]);
    }
  };

  // todo release a bot
  const releaseBot = (id) => {
    // filter
    console.log("release from army");
  };

  return (
    <main>
      <h1>My bot army</h1>
      <BotArmy myBots={myBots} releaseBot={releaseBot} />
      <h1>Bot collection</h1>
      <BotCollection
        data={data}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </main>
  );
}

export default App;
