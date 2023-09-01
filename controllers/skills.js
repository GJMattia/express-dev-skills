//connects the skill database file to this file so it can be used.
const Skill = require('../models/skill');


//This will let these functions be used by other modules if they are 'included'.
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function edit(req, res){
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Edit skill',
        skill
    });
};

function update(req, res){
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`)
};





function newSkill(req, res){
    res.render('skills/new',{
        title: 'New Skill'
    })
}

function create(req, res){
    Skill.create(req.body);
    res.redirect('/skills');
};


//This function 'show' is how the singular page of one particular skill is going to be displayed
//It takes in the request and the controller CONTROLS what is next. It will render the 'show' page
//if a single skill is clicked on, which uses the getOne method from the model's skill.js. It is then included on this page
//and you are able to grab information from it using the variable we defined at the top as if its a property 'Skill.getOne(argument)
//we put it in an object called skill
function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};



//This function will return a rendered page that will be an INDEX of all the skills, just a list, it uses the
//get all method we defined in the other module and we use this variable Skill to call it. we put it in an object called skills
function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills');
};
