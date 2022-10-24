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
      team: 'Defense',
      image: 'https://i.imgur.com/ec6w6IX.png'
    },
    {
      name: 'Jackel',
      primary: ['C7E', 'PDW9', 'ITA12L'],
      secondary: ['ITA12S', 'USP40'],
      utility: ['Claymore', 'Smoke Grenade'],
      ability: 'Eyenox Model III',
      team: 'Attack',
      image: 'https://i.imgur.com/cwJEfZp.png'
    },
    {
      name: 'Buck',
      primary: ['C8-SFW', 'CAMRS'],
      secondary: ['Mk19mm', 'GONNE-6'],
      utility: ['Stun Grenade', 'Hard Breach Charge'],
      ability: 'Skeleton Key',
      team: 'Attack',
      image: 'https://i.imgur.com/0S5wttn.png'
    },
    {
      name: 'Goyo',
      primary: ['Vector .45 ACP', 'TCSG12'],
      secondary: 'P229',
      utility: ['Nitro Cell', 'Proximity Alarm'],
      ability: 'Volcan Canister',
      team: 'Defense',
      image: 'https://i.imgur.com/8VztGhy.png'
    },
    {
      name: 'Iana',
      primary: ['ARX200', 'G36C'],
      secondary: 'Mk19mm',
      utility: ['Frag Grenade', 'Smoke Grenade'],
      ability: 'Gemini Replicator',
      team: 'Attack',
      image: 'https://i.imgur.com/iQfA9uE.png'
    },
    {
      name: 'Finka',
      primary: ['Spear .308', '6P41', 'SASG-12'],
      secondary: ['PMM', 'Gsh-18', 'GONNE-6'],
      utility: ['Smoke Grenade', 'Stun Grenade'],
      ability: 'Adrenal Surge',
      team: 'Attack',
      image: 'https://i.imgur.com/hgmkFOn.png'
    },
    {
      name: 'Smoke',
      primary: ['FMG-9', 'M590A1'],
      secondary: ['P226 Mk 25', 'SMG-11'],
      utility: ['Deployable Shiled', 'Barbed Wire'],
      ability: 'Remote Gas Grenade',
      team: 'Defense',
      image: 'https://i.imgur.com/sQuJLvo.png'
    },
    {
      name: 'Thorn',
      primary: ['UZK50GL', 'M870'],
      secondary: ['1911 TACOPS, C75 Auto'],
      utility: ['Barbed Wire', 'Deployable Shield'],
      ability: 'Razorbloom Shell',
      team: 'Defense',
      image: 'https://i.imgur.com/iROFohg.png'
    }
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
