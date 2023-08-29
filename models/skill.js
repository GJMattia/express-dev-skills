//This exports our functions in this module
module.exports = {
    getAll,
    getOne
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


// This function grabs one singular skill based on its ID property as stated in the parameter
  function getOne(id){
    id = parseInt(id); 
    return skills.find(skill => skill.id === id);
  };



  //This function returns the entire skills array.
  function getAll(){
    return skills;
  };