const { Operator } = require('../models')

const findAllOperators = async (req, res) => {
  try {
    const operators = await Operator.find()
    return res.status(200).json({ operators })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

module.exports = {
  findAllOperators
}
