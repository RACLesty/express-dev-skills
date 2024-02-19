const skills = [
    { id: 125362, name: 'HTML', level: 'Jr', qualified: true},
    { id: 256489, name: 'CSS', level: 'Jr', qualified: true}, 
    { id: 358794, name: 'JavaScript', level: 'Jr', qualified: true},
    { id: 445178, name: 'React.js', level: 'Jr', qualified: true},
    { id: 558967, name: 'MongoDB', level: 'Entry', qualified: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    const skill = skills.find((s) => s.id === parseInt(id))
    return skill
}

function create(skill){
    skill.id = Date.now() % 1000000
    if (skill.level === 'Entry') {
        skill.qualified = false;
    } else {
        skill.qualified = true;
    }
    skills.push(skill)
}

function deleteOne(id) {
    const idx = skills.findIndex((s) => s.id === parseInt(id));
    if (idx !== -1) {
        skills.splice(idx, 1);
        return true; 
    }
    return false;
}
