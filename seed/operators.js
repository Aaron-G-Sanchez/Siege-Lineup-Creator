const db = require('../db')
const { Operator } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const operators = [
    {
      name: 'Mira',
      primary: ['Vector .45 ACP', 'ITA12L'],
      secondary: ['ITA12S', 'USP40'],
      utility: ['Proximity Alarm ', 'Nitro Cell'],
      ability: 'Black Mirror',
      isAttacker: false
    }
    // {
    //   name: 'Jackel',
    //   primary: ['C7E', 'PDW9', 'ITA12L'],
    //   secondary: ['ITA12S', 'USP40'],
    //   utility: ['Claymore', 'Smoke Grenade'],
    //   ability: 'Eyenox Model III',
    //   isAttacker: true
    // },
    // {
    //   name: 'Buck',
    //   primary: ['C8-SFW', 'CAMRS'],
    //   secondary: ['Mk19mm', 'GONNE-6'],
    //   utility: ['Stun Grenade', 'Hard Breach Charge'],
    //   ability: 'Skeleton Key',
    //   isAttacker: true
    // },
    // {
    //   name: 'Goyo',
    //   primary: ['Vector .45 ACO', 'TCSG12'],
    //   secondary: 'P229',
    //   utility: ['Nitro Cell', 'Proximity Alarm'],
    //   ability: 'Volcan Canister',
    //   isAttacker: false
    // },
    // {
    //   name: 'Iana',
    //   primary: ['ARX200', 'G36C'],
    //   secondary: 'Mk19mm',
    //   utility: ['Frag Grenade', 'Smoke Grenade'],
    //   ability: 'Gemini Replicator',
    //   isAttacker: true
    // },
    // {
    //   name: 'Finka',
    //   primary: ['Spear .308', '6P41', 'SASG-12'],
    //   secondary: ['PMM', 'Gsh-18', 'GONNE-6'],
    //   utility: ['Smoke Grenade', 'Stun Grenade'],
    //   ability: 'Adrenal Surge',
    //   isAttacker: true
    // },
    // {
    //   name: 'Smoke',
    //   primary: ['FMG-9', 'M590A1'],
    //   secondary: ['P226 Mk 25', 'SMG-11'],
    //   utility: ['Deployable Shiled', 'Barbed Wire'],
    //   ability: 'Remote Gas Grenade',
    //   isAttacker: false
    // }
  ]

  await Operator.insertMany(operators)
  console.log('Created the operators!')

  console.log(operators)
}

const run = async () => {
  await main()
  db.close()
}

run()
