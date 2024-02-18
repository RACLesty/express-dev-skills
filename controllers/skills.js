const Skill = require('../models/skill')

function index(req, res) {
    const skills = Skill.getAll()
    res.render('skills/index.ejs', {skills})
}

function show(req, res){
    const skill = Skill.getOne(req.params.id)
    res.render('skills/show.ejs', {skill})
}

module.exports = {
    index,
    show,
}