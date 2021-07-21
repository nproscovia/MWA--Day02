const express= require("express");
const router= express.Router(); 
const controllerGames= require("../controllers/games_controllers.js"); 

router.route('/games').get(controllerGames.getGames); 
      
module.exports = router;


