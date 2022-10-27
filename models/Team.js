const { Schema } = require('mongoose')

const FinalTeam = new Schema(
  {
    teamName: { type: String, require: true },
    operators: [
      {
        name: { type: String, require: true },
        primary: { type: String, require: true },
        secondary: { type: String, require: true },
        utility: { type: String, require: true },
        abillity: { type: String, require: true },
        icon: { type: String, require: true },
        image: { type: String, require: true }
      }
    ]
  },
  { timestamps: true }
)

module.exports = FinalTeam
