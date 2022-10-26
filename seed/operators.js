const db = require('../db')
const { Operator } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const operators = [
    {
      name: 'Kapkan',
      primary: ['9X19VSN', 'SASG-12'],
      secondary: ['PMM', 'GSH-18'],
      utility: ['Impact Grenade', 'Nitro Cell'],
      ability: 'Entry Denail Device',
      team: 'Defense',
      image: 'https://i.imgur.com/37hNJP9.png'
    },
    {
      name: 'Tachanka',
      primary: ['DP27', '9X19VSN'],
      secondary: ['PMM', 'GSH-18'],
      utility: ['Barbed Wire', 'Proximity Alarm'],
      ability: 'Shumikha Launcher',
      team: 'Defense',
      image: 'https://i.imgur.com/9ZwgSmq.png'
    },
    {
      name: 'Glaz',
      primary: ['OTS-03'],
      secondary: ['PMM', 'GONE-6'],
      utility: ['Smoke Grenade', 'Frag Grenade'],
      ability: 'Flip Sight',
      team: 'Attack',
      image: 'https://i.imgur.com/aA0jz46.png'
    },
    {
      name: 'Fuze',
      primary: ['AK-12', '6P41', 'Ballistic Shield'],
      secondary: ['PMM', 'GSH-18'],
      utility: ['Breach Charge', 'Hard Breach Charge'],
      ability: 'Cluster Charge',
      team: 'Attack',
      image: 'https://i.imgur.com/efuPduQ.png'
    },
    {
      name: 'IQ',
      primary: ['AUG A2', '552 Commando', 'G8A1'],
      secondary: ['P12'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Electronics Detector',
      team: 'Attack',
      image: 'https://i.imgur.com/KJb0a9b.png'
    },
    {
      name: 'Blitz',
      primary: ['G52-Tactical Shield'],
      secondary: ['P12'],
      utility: ['Breach Charge', 'Smoke Grenade'],
      ability: 'Flash Shield',
      team: 'Attack',
      image: 'https://i.imgur.com/WNQnl7R.png'
    },
    {
      name: 'Bandit',
      primary: ['MP7', 'M870'],
      secondary: ['P12'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Shock Wire',
      team: 'Defense',
      image: 'https://i.imgur.com/UydOYkn.png'
    },
    {
      name: 'Jager',
      primary: ['M870', '416-C Carbine'],
      secondary: ['P12'],
      utility: ['Barbed Wire', 'Bulletproof Camera'],
      ability: 'Active Defense System',
      team: 'Defense',
      image: 'https://i.imgur.com/n0SpZER.png'
    },
    {
      name: 'Rook',
      primary: ['MP5', 'P90', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Armor Pack',
      team: 'Defense',
      image: 'https://i.imgur.com/9jaeFQz.png'
    },
    {
      name: 'Doc',
      primary: ['MP5', 'P90', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Bulletproof Camera', 'Barbed Wire'],
      ability: 'Stim Pistol',
      team: 'Defense',
      image: 'https://i.imgur.com/XxOsarG.png'
    },
    {
      name: 'Twitch',
      primary: ['F5', '417', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Smoke Grenade', 'Claymore'],
      ability: 'Shock Drones',
      team: 'Attacker',
      image: 'https://i.imgur.com/Z331jVv.png'
    },
    {
      name: 'Montagne',
      primary: ['Extendable Shield'],
      secondary: ['P9', 'LFP586'],
      utility: ['Smoke Grenade', 'Hard Breach Charge', 'Impact Grenade'],
      ability: 'Extendable Shield',
      team: 'Attack',
      image: 'https://i.imgur.com/jxoVTxM.png'
    },
    {
      name: 'Thermite',
      primary: ['M1014', '556XI'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Smoke Grenade', 'Stun Grenade'],
      ability: 'Exothermic Charge',
      team: 'Attack',
      image: 'https://i.imgur.com/EgsXROS.png'
    },
    {
      name: 'Pulse',
      primary: ['UMP45', 'M1014'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Heartbeat Sensor',
      team: 'Defense',
      image: 'https://i.imgur.com/Tcd0RBx.png'
    },
    {
      name: 'Castle',
      primary: ['UMP45', 'M1014'],
      secondary: ['5.7 USG', 'Super Shorty'],
      utility: ['Proximity Alarm', 'Bulletproof Camera'],
      ability: 'Armor Panel',
      team: 'Defense',
      image: 'https://i.imgur.com/JDsAFcN.png'
    },
    {
      name: 'Ash',
      primary: ['G36C', 'R4-C'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Breaching Rounds',
      team: 'Attack',
      image: 'https://i.imgur.com/Dm1wVna.png'
    },
    {
      name: 'Thatcher',
      primary: ['AR33', 'L85A2', 'M590A1'],
      secondary: ['P226 MK 25'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'EMP Grenade',
      team: 'Attack',
      image: 'https://i.imgur.com/OSscCJV.png'
    },
    {
      name: 'Sledge',
      primary: ['L85A2', 'M590A1'],
      secondary: ['P226 MK 25'],
      utility: ['Frag Grenade', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Tactical Breaching Hammer',
      team: 'Attack',
      image: 'https://i.imgur.com/wis3SqC.png'
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
      name: 'Mute',
      primary: ['MP5K', 'M590A1'],
      secondary: ['P226 Mk 25', 'SMG-11'],
      utility: ['Bulletproof Camera', 'Nitro Cell'],
      ability: 'Signal Disrupter',
      team: 'Defense',
      image: 'https://i.imgur.com/koTobd2.png'
    },
    {
      name: 'Frost',
      primary: ['Super 90', '9MM C1'],
      secondary: ['MK1 9MM', 'ITA12S'],
      utility: ['Bulletproof Camera', 'Deployable Shield'],
      ability: 'Welcome Mat',
      team: 'Defense',
      image: 'https://i.imgur.com/CeDresh.png'
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
      name: 'Valkyrie',
      primary: ['MPX', 'SPAS-12'],
      secondary: ['D-50'],
      utility: ['Impact Grenade', 'Nitro Cell'],
      ability: 'Black Eye',
      team: 'Defense',
      image: 'https://i.imgur.com/tt6r2K9.png'
    },
    {
      name: 'Blackbeard',
      primary: ['MK17 CQB', 'SR-25'],
      secondary: ['D-50'],
      utility: ['Breach Charge', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Rifle Shield',
      team: 'Attack',
      image: 'https://i.imgur.com/ZftuPfG.png'
    },
    {
      name: 'Capitao',
      primary: ['PARA-308', 'M249'],
      secondary: ['PRB92'],
      utility: ['Breach Charge', 'Stun Grenade'],
      ability: 'Rifle Shield',
      team: 'Attack',
      image: 'https://i.imgur.com/i0Ud9NO.png'
    },
    {
      name: 'Caveira',
      primary: ['M12', 'SPAS-15'],
      secondary: ['Luison'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Silent Step',
      team: 'Defense',
      image: 'https://i.imgur.com/fG4REAS.png'
    },
    {
      name: 'Echo',
      primary: ['MP5SD', 'Supernova'],
      secondary: ['P229', 'Bearing 9'],
      utility: ['Impact Grenade', 'Proximity Alarm'],
      ability: 'Yokai',
      team: 'Defense',
      image: 'https://i.imgur.com/oDKto2g.png'
    },
    {
      name: 'Echo',
      primary: ['MP5SD', 'Supernova'],
      secondary: ['P229', 'Bearing 9'],
      utility: ['Impact Grenade', 'Proximity Alarm'],
      ability: 'Yokai',
      team: 'Defense',
      image: 'https://i.imgur.com/oDKto2g.png'
    },
    {
      name: 'Hibana',
      primary: ['TYPE-89', 'Supernova'],
      secondary: ['P229', 'Bearing 9'],
      utility: ['Stun Grenade', 'Breach Charge'],
      ability: 'X-Kairos',
      team: 'Attack',
      image: 'https://i.imgur.com/XwpvHHY.png'
    },
    {
      name: 'Jackal',
      primary: ['C7E', 'PDW9', 'ITA12L'],
      secondary: ['ITA12S', 'USP40'],
      utility: ['Claymore', 'Smoke Grenade'],
      ability: 'Eyenox Model III',
      team: 'Attack',
      image: 'https://i.imgur.com/cwJEfZp.png'
    },
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
      name: 'Lesion',
      primary: ['SX12SD', 'T-5 SMG'],
      secondary: ['Q-929'],
      utility: ['Impact Grenade', 'Bulletproof Camera'],
      ability: 'GU Mines',
      team: 'Defense',
      image: 'https://i.imgur.com/RcVwNag.png'
    },
    {
      name: 'Ying',
      primary: ['T-95 LSW', 'SX12'],
      secondary: ['Q-929'],
      utility: ['Smoke Grenade', 'EMP Grenade'],
      ability: 'Candela',
      team: 'Attack',
      image: 'https://i.imgur.com/ZuPzm8g.png'
    },
    {
      name: 'Ela',
      primary: ['Scorpion EVO 3 A1', 'FO-12'],
      secondary: ['RG15'],
      utility: ['Barbed Wire', 'Deployable Shield'],
      ability: 'GRZMOT Mine',
      team: 'Defense',
      image: 'https://i.imgur.com/JQByPKL.png'
    },
    {
      name: 'Zofia',
      primary: ['LMG-E', 'M762'],
      secondary: ['RG15'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'KS70 Lifeline',
      team: 'Attack',
      image: 'https://i.imgur.com/Bi9KhFE.png'
    },
    {
      name: 'Dokkaebi',
      primary: ['MK 14 EBR', 'BOSG. 12.2'],
      secondary: ['GONNE-6', 'SMG-12'],
      utility: ['Smoke Grenade', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Logic Bomb',
      team: 'Attack',
      image: 'https://i.imgur.com/0CKsnQd.png'
    },
    {
      name: 'Vigil',
      primary: ['K1A', 'BOSG. 12.2'],
      secondary: ['C75 Auto', 'SMG-12'],
      utility: ['Bulletproof Camera', 'Impact Grenade'],
      ability: 'ERC-7',
      team: 'Defense',
      image: 'https://i.imgur.com/sa2j6Rm.png'
    },
    {
      name: 'Lion',
      primary: ['V308', '417', 'SG-CQB'],
      secondary: ['GONNE-6', 'LFP586'],
      utility: ['Stun Grenade', 'Claymore'],
      ability: 'EE-ONE-D',
      team: 'Attack',
      image: 'https://i.imgur.com/wUWCkHb.png'
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
      name: 'Alibi',
      primary: ['MX4 Storm', 'ACS12'],
      secondary: ['Keratos .357', 'Baliff 410'],
      utility: ['Impact Grenade', 'Deployable Shield'],
      ability: 'Prisma',
      team: 'Defense',
      image: 'https://i.imgur.com/GmGQecX.png'
    },
    {
      name: 'Maestro',
      primary: ['Alda 5.56', 'ACS12'],
      secondary: ['Keratos .357', 'Baliff 410'],
      utility: ['Barbed Wire', 'Impact Grenade'],
      ability: 'Evil Eye',
      team: 'Defense',
      image: 'https://i.imgur.com/dgj79sS.png'
    },
    {
      name: 'Maverick',
      primary: ['AR-15.50', 'M4 GS'],
      secondary: ['1911 TACOPS'],
      utility: ['Claymore', 'Stun Grenade'],
      ability: 'Breaching Torch',
      team: 'Attack',
      image: 'https://i.imgur.com/naWjgHj.png'
    },
    {
      name: 'Clash',
      primary: ['CCE Shield'],
      secondary: ['P-10C', 'SPSMG9'],
      utility: ['Barbed Wire', 'Impact Grenade'],
      ability: 'CCE Shield',
      team: 'Defense',
      image: 'https://i.imgur.com/Fx4aBya.png'
    },
    {
      name: 'Kaid',
      primary: ['Aug A3', 'TCSG12'],
      secondary: ['.44 MAG Semi-Autio', 'LFP587'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: '"RTILA" Electroclaw',
      team: 'Defense',
      image: 'https://i.imgur.com/2Vd07Ak.png'
    },
    {
      name: 'Nomad',
      primary: ['AK-74M', 'ARX200'],
      secondary: ['.44 MAG Semi-Autio', 'PRB92'],
      utility: ['Breach Charge', 'Stun Grenade'],
      ability: 'Airjab Launcher',
      team: 'Attack',
      image: 'https://i.imgur.com/cz8lRnN.png'
    },
    {
      name: 'Gridlock',
      primary: ['F90', 'M249 SAW'],
      secondary: ['Super Shorty', 'SDP 9MM', 'GONNE-6'],
      utility: ['Smoke Grenade', 'Breach Charge'],
      ability: 'Trax Stingers',
      team: 'Attack',
      image: 'https://i.imgur.com/D9JHzT2.png'
    },
    {
      name: 'Mozzie',
      primary: ['Commando 9', 'P10 RONI'],
      secondary: ['SDP 9MM'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Pest Launcher',
      team: 'Defense',
      image: 'https://i.imgur.com/y8ZnaXb.png'
    },
    {
      name: 'Warden',
      primary: ['M590A1', 'MPX'],
      secondary: ['P-10C', 'SMG-12'],
      utility: ['Deployable Shield', 'Nitro Cell'],
      ability: 'Glance Smart Glasses',
      team: 'Defense',
      image: 'https://i.imgur.com/0RkSB9Z.png'
    },
    {
      name: 'Nokk',
      primary: ['FMG-9', 'SIX12 SD'],
      secondary: ['5.7 USG', 'D-50'],
      utility: ['Frag Grenade', 'Hard Breach Charge'],
      ability: 'Hel Presence Reduction',
      team: 'Attack',
      image: 'https://i.imgur.com/eZ90vAg.png'
    },
    {
      name: 'Amaru',
      primary: ['G8A1', 'Supernova'],
      secondary: ['GONNE-6', 'SMG-11'],
      utility: ['Stun Grenade', 'Hard Breach Charge'],
      ability: 'Garra Hook',
      team: 'Attack',
      image: 'https://i.imgur.com/oHsfBW8.png'
    },
    {
      name: 'Goyo',
      primary: ['Vector .45 ACP', 'TCSG12'],
      secondary: ['P229'],
      utility: ['Nitro Cell', 'Proximity Alarm'],
      ability: 'Volcan Canister',
      team: 'Defense',
      image: 'https://i.imgur.com/8VztGhy.png'
    },
    {
      name: 'Kali',
      primary: ['CSRX 300'],
      secondary: ['SPSMG9', 'C75 Auto'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'LV Explosive Lance',
      team: 'Attack',
      image: 'https://i.imgur.com/NIIFJQZ.png'
    },
    {
      name: 'Wamai',
      primary: ['AUG A2', 'MP5K'],
      secondary: ['D-40', 'P12'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Mag-Net System',
      team: 'Defense',
      image: 'https://i.imgur.com/cZHCIvR.png'
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
      name: 'Oryx',
      primary: ['SPAS-12', 'T-5 SMG'],
      secondary: ['BALIF 410', 'USP40'],
      utility: ['Barbed Wire', 'Proximity Alarm'],
      ability: 'Remah Dash',
      team: 'Defense',
      image: 'https://i.imgur.com/5GHFArC.png'
    },
    {
      name: 'Melusi',
      primary: ['MP5', 'Super 90'],
      secondary: ['RG15'],
      utility: ['Impact Grenade', 'Bulletproof Camera'],
      ability: 'Banshee Sonic Defense',
      team: 'Defense',
      image: 'https://i.imgur.com/IpApSF7.png'
    },
    {
      name: 'Ace',
      primary: ['AK-12', 'M1014'],
      secondary: ['P9'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'S.E.L.M.A Aqua Breacher',
      team: 'Attack',
      image: 'https://i.imgur.com/CwJwYsn.png'
    },
    {
      name: 'Zero',
      primary: ['SC3000K', 'MP7'],
      secondary: ['5.7 USG', 'GONE-6'],
      utility: ['Claymore', 'EMP Grenade'],
      ability: 'Argus Launcher',
      team: 'Attack',
      image: 'https://i.imgur.com/85Pkh7V.png'
    },
    {
      name: 'Aruni',
      primary: ['P10 Roni', 'MK 14 EBR'],
      secondary: ['PRB92'],
      utility: ['Bulletproof Camera', 'Barbed Wire'],
      ability: 'Surya Gate',
      team: 'Defense',
      image: 'https://i.imgur.com/RFyZfRH.png'
    },
    {
      name: 'Flores',
      primary: ['AR33', 'SR-25'],
      secondary: ['GSH-18'],
      utility: ['Stun Grenade', 'Claymore'],
      ability: 'RCE-Ratero Charge',
      team: 'Attack',
      image: 'https://i.imgur.com/iLTDT0U.png'
    },
    {
      name: 'Thunderbird',
      primary: ['Spear .308', 'SPAS-15'],
      secondary: ['Bearing 9', 'Q-929'],
      utility: ['Impact Grenade', 'Nitro Cell'],
      ability: 'Kona Station',
      team: 'Defense',
      image: 'https://i.imgur.com/LGEtGC6.png'
    },
    {
      name: 'Osa',
      primary: ['556XI', 'PDW9'],
      secondary: ['PMM'],
      utility: ['Smoke Grenade', 'Claymore'],
      ability: 'Talon-8 Clear Shield',
      team: 'Attack',
      image: 'https://i.imgur.com/UJ8o1aG.png'
    },
    {
      name: 'Thorn',
      primary: ['UZK50GL', 'M870'],
      secondary: ['1911 TACOPS', 'C75 Auto'],
      utility: ['Barbed Wire', 'Deployable Shield'],
      ability: 'Razorbloom Shell',
      team: 'Defense',
      image: 'https://i.imgur.com/iROFohg.png'
    },
    {
      name: 'Azami',
      primary: ['9X19SVN', 'ACS12'],
      secondary: ['D-50'],
      utility: ['Impact Grenade', 'Barbed Wire'],
      ability: 'Kiba Barrier',
      team: 'Defense',
      image: 'https://i.imgur.com/amNnlRf.png'
    },
    {
      name: 'Sens',
      primary: ['POF9', '417'],
      secondary: ['SDP 9MM', 'GONNE-6'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'R.O.U. Projector System',
      team: 'Attack',
      image: 'https://i.imgur.com/515O0b0.png'
    },
    {
      name: 'Grim',
      primary: ['552 Commando', 'SG-CQB'],
      secondary: ['P229'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Kawan Hive Launcher',
      team: 'Attack',
      image: 'https://i.imgur.com/qSZJjBT.png'
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
