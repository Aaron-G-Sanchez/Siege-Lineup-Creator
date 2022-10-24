const { model } = require('mongoose')
const OperatorSchema = require('./Operator')
const TeamMemberSchema = require('./TeamMember')

const Operator = model('Operator', OperatorSchema)
const TeamMember = model('TeamMember', TeamMemberSchema)

module.exports = {
  Operator,
  TeamMember
}
