const { Operator } = require('../models')
const { TeamMember } = require('../models')

const findAllOperators = async (req, res) => {
  try {
    const operators = await Operator.find()
    return res.status(200).json({ operators })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findAttackOps = async (req, res) => {
  try {
    const attackers = await Operator.find({ team: 'Attack' })
    return res.status(200).json({ attackers })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findDefenseOps = async (req, res) => {
  try {
    const defenders = await Operator.find({ team: 'Defense' })
    return res.status(200).json({ defenders })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findAttackOpById = async (req, res) => {
  try {
    const { id } = req.params
    const attackerId = await Operator.findById(id)
    if (attackerId) {
      return res.status(200).json({ attackerId })
    }
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const findDefenseOpById = async (req, res) => {
  try {
    const { id } = req.params
    const defenseId = await Operator.findById(id)
    if (defenseId) {
      return res.status(200).json({ defenseId })
    }
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const addTeamMember = async (req, res) => {
  try {
    const op = await new TeamMember(req.body)
    await op.save()
    return res.status(201).json({ op })
  } catch (err) {
    return res.status(500).json(err.message)
  }
}

const getTeamMember = async (req, res) => {
  try {
    const teamMember = await TeamMember.find()
    return res.status(200).json({ teamMember })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const deleteTeamMemberById = async (req, res) => {
  try {
    const { id } = req.params
    const teamMemberId = await TeamMember.findByIdAndDelete(id)
    if (teamMemberId) {
      return res.status(200).send('TeamMember was deleted')
    }
  } catch (err) {
    return res.status(500).json(err.message)
  }
}

module.exports = {
  findAllOperators,
  findAttackOps,
  findDefenseOps,
  findAttackOpById,
  findDefenseOpById,
  addTeamMember,
  getTeamMember,
  deleteTeamMemberById
}
