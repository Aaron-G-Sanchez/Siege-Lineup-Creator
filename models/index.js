const { model } = require('mongoose')
const OperatorSchema = require('./Operator')

const Operator = model('Operator', OperatorSchema)

module.exports = {
  Operator
}
