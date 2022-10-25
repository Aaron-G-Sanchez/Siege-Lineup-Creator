const { model } = require('mongoose')
const OperatorSchema = require('./Operator')
const TeamMemberSchema = require('./TeamMember')
const TeamSchema = require('./Team')

const Operator = model('Operator', OperatorSchema)
const TeamMember = model('TeamMember', TeamMemberSchema)
const Team = model('FinalTeam', TeamSchema)

module.exports = {
  Operator,
  TeamMember,
  Team
}
