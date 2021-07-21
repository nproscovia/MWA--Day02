




const games_Data= require("../datas/games.json"); 
module.exports.getGames= function(req, res) {
   
    res.status(200).json(games_Data);
    }

