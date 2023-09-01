var express = require('express');
var router = express.Router();

//This adds the information from the controllers folder for us to use inside of this module,
//specfically it tells us what route we are about to take when we click
var skillsCtrl = require('../controllers/skills');


//This will route us to / (which means /skills because its there but invisible in this folder)
//will basically take us to the list of skills (the index)
router.get('/', skillsCtrl.index);


//like the get id, this one gets an id but sends you to another page after for editing the skill
router.get('/:id/edit', skillsCtrl.edit);


router.get('/new', skillsCtrl.new);


router.post('/', skillsCtrl.create);

//This will route us to a SPECIFIC SKILL it will display as /skill/id. The id is a variable, will be an argument
//depending on what is clicked/entered in the URL.
//Will route us to a specific skill (the SHOW)
router.get('/:id', skillsCtrl.show);


router.delete('/:id', skillsCtrl.delete);


// the put request will update based on the edit page
router.put('/:id', skillsCtrl.update);



module.exports = router;
