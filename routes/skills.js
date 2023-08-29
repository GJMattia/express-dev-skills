var express = require('express');
var router = express.Router();

//This adds the information from the controllers folder for us to use inside of this module,
//specfically it tells us what route we are about to take when we click
var skillsCtrl = require('../controllers/skills');


//This will route us to / (which means /skills because its there but invisible in this folder)
//will basically take us to the list of skills (the index)
router.get('/', skillsCtrl.index);


//This will route us to a SPECIFIC SKILL it will display as /skill/id. The id is a variable, will be an argument
//depending on what is clicked/entered in the URL.
//Will route us to a specific skill (the SHOW)
router.get('/:id', skillsCtrl.show);



module.exports = router;
