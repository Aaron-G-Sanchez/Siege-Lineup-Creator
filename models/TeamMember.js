const { Schema } = require('mongoose')

const TeamMember = new Schema(
  {
    name: { type: String, require: true },
    primary: { type: String, require: true },
    secondary: { type: String, require: true },
    utility: { type: String, require: true },
    ability: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = TeamMember
