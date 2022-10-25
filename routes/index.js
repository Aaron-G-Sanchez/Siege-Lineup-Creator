const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/home', (req, res) => {
  res.send('This is the root.')
})

router.get('/operators', controllers.findAllOperators)

router.get('/operators/attack', controllers.findAttackOps)

router.get('/operators/defense', controllers.findDefenseOps)

router.get('/operators/attack/:id', controllers.findAttackOpById)

router.get('/operators/defense/:id', controllers.findDefenseOpById)

router.post('/operators/opSave', controllers.addTeamMember)

router.get('/teamMembers', controllers.getTeamMember)

router.delete('/teamMembers/delete/:id', controllers.deleteTeamMemberById)

router.post('/saveTeam', controllers.saveTeam)

module.exports = router
