const express = require('express');
const router = express.Router();
const Team = require('../../models/Team');


router.post('/add-team', (req, res)=>{

    const team = new Team({
        'name' : req.body.name,
        'abbr' : req.body.abbr,
        'logo' : req.body.logo
    })
    Team.create(team)
    .then(team => res.json(team))
    .catch(err => res.json(err))

})

router.get('/all', (req, res)=>{
    Team.find()
    .then( team => res.json(team))
    .catch(err => res.json(err))
})

router.get('/team/:abbr', (req, res) => {
    Team.findOne({abbr:req.params.abbr}).
    then( team => res.json(team)).
    catch(err => res.json(err))
})



module.exports = router;