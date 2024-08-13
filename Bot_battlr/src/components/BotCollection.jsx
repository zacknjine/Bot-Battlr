import { useState } from 'react';

const BotCollection = ({ data, dischargeBot, enlistBot }) => {

  const deleteBot = async (botId) => {
    try {
      await fetch(`http://localhost:3000/bots/${botId}`, {
        method: 'DELETE',
      });
      
      dischargeBot(botId);
    } catch (error) {
      console.error('Failed to delete the bot:', error);
    }
  };

  return (
    <div className= "collection">
      {data.map((bot, i) => (
        <div
          onClick={() => enlistBot(bot)}
          key={i}
          className= "bot-card"
        >
          <img src={bot.avatar_url} alt="" />
          <p>{bot.name}</p>
          <p>{bot.bot_class}</p>
          <small>{bot.catchphrase}</small>
          <div>
            <div>Damage: {bot.damage}</div>
            <div>Armor: {bot.armor}</div>
            <div>Health: {bot.health}</div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteBot(bot.id); 
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
