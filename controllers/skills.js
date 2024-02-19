const Skill = require('../models/skill')

function index(req, res) {
    const skills = Skill.getAll()
    res.render('skills/index.ejs', {skills})
}

function show(req, res){
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show.ejs', {skill})
}

function newSkill(req, res){
    res.render('skills/new', { title: 'New Skill'})
}

function createSkill(req, res) {
    const { name, level } = req.body;
    const addSkill = { name, level };
    Skill.create(addSkill); 
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill
    })
}

module.exports = {
    index,
    show,
    new: newSkill,
    create: createSkill,
    delete: deleteSkill,

}