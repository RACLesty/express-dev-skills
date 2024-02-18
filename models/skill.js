const skills = [
    { id: 1, name: 'HTML', level: 'Jr', qualified: true},
    { id: 2, name: 'CSS', level: 'Jr', qualified: true}, 
    { id: 3, name: 'JavaScript', level: 'Jr', qualified: true},
    { id: 4, name: 'React.js', level: 'Jr', qualified: true},
    { id: 5, name: 'MongoDB', level: 'Entry', qualified: false},
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    const skill = skills.find((s) => s.id === parseInt(id))
    return skill
}

