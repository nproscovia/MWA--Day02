

const express= require("express");

const numsController= require("../controller/number.controller");

 const router= express.Router();

 router.route('/:num1').get(numsController.summingNumbers);
 
 module.exports= router;






