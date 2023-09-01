//This exports our functions in this module
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };


//This is our 'database' of skills
const skills = [
    {id: 115, skill: 'HTML', level: 8, startDate: 'April 2014'},
    {id: 116, skill: 'CSS', level: 7, startDate: 'March 2023'},
    {id: 117, skill: 'JAVASCRIPT', level: 6, startDate: 'March 2023'},
    {id: 118, skill: 'EXPRESS', level: 3, startDate: 'June 2023'},
    {id: 119, skill: 'REACT', level: 1, startDate: 'June 2023'},
    {id: 120, skill: 'NODE', level: 4, startDate: 'June 2023'},
    {id: 121, skill: 'MONGODB', level: 0, startDate: `Haven't started yet`}
  ];

//This function is for updating a skill

function update(id, updatedSkill){
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill)
}


//This function is for creating a new skill

function create(skill){
  skill.id = Math.floor(Math.random() * (999 - 122 + 1)) + 122;
  skill.level = Math.floor(Math.random() * 10) + 1;
  skill.startDate = 'August 2023';
  skills.push(skill);
};



// This function grabs one singular skill based on its ID property as stated in the parameter
  function getOne(id){
    id = parseInt(id); 
    return skills.find(skill => skill.id === id);
  };



  //This function returns the entire skills array.
  function getAll(){
    return skills;
  };

  function deleteOne(id){
    id = parseInt(id);
    const index = skills.findIndex(skill => skill.id === id);
    skills.splice(index, 1);
  }