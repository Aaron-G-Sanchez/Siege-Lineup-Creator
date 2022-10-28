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
      icon: 'https://i.imgur.com/37hNJP9.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MofnDHeL1uwsenBVjxplQ/1e5af8fe9cf6f36516c7f6e5d56fcac0/r6-operators-list-kapkan.png'
    },
    {
      name: 'Tachanka',
      primary: ['DP27', '9X19VSN'],
      secondary: ['PMM', 'GSH-18'],
      utility: ['Barbed Wire', 'Proximity Alarm'],
      ability: 'Shumikha Launcher',
      team: 'Defense',
      icon: 'https://i.imgur.com/9ZwgSmq.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5P9kGyOrnsu7lRyr9xC71t/53981da03fa36adf99adf61bc098bd4a/r6s-operators-list-tachanka.png'
    },
    {
      name: 'Glaz',
      primary: ['OTS-03'],
      secondary: ['PMM', 'GONE-6'],
      utility: ['Smoke Grenade', 'Frag Grenade'],
      ability: 'Flip Sight',
      team: 'Attack',
      icon: 'https://i.imgur.com/aA0jz46.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6R6uQlUmkh7KYoFYeeGpvj/fb92cfe1a0501d63a0ffa417c004e84e/r6-operators-list-glaz.png'
    },
    {
      name: 'Fuze',
      primary: ['AK-12', '6P41', 'Ballistic Shield'],
      secondary: ['PMM', 'GSH-18'],
      utility: ['Breach Charge', 'Hard Breach Charge'],
      ability: 'Cluster Charge',
      team: 'Attack',
      icon: 'https://i.imgur.com/efuPduQ.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/BsiNYFp7htro1mOEgiKf1/eef48a78d9a7c1cb2dcac07e1d06edb1/r6-operators-list-fuze.png'
    },
    {
      name: 'IQ',
      primary: ['AUG A2', '552 Commando', 'G8A1'],
      secondary: ['P12'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Electronics Detector',
      team: 'Attack',
      icon: 'https://i.imgur.com/KJb0a9b.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3lP88YKPk0boUyisZD0LT7/6b3ef86531c459ef9e573f056d6eddf5/r6-operators-list-iq.png'
    },
    {
      name: 'Blitz',
      primary: ['G52-Tactical Shield'],
      secondary: ['P12'],
      utility: ['Breach Charge', 'Smoke Grenade'],
      ability: 'Flash Shield',
      team: 'Attack',
      icon: 'https://i.imgur.com/WNQnl7R.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4NZvCtXwtcCq1s65H7mK5y/8d70872df8319e1d162a31bbf404ed2c/r6-operators-list-blitz.png'
    },
    {
      name: 'Bandit',
      primary: ['MP7', 'M870'],
      secondary: ['P12'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Shock Wire',
      team: 'Defense',
      icon: 'https://i.imgur.com/UydOYkn.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2cFHG0Xk93uoGrm5nTjDPE/2211339df9b36c1b0d9873e480d03fad/r6-operators-list-bandit.png'
    },
    {
      name: 'Jager',
      primary: ['M870', '416-C Carbine'],
      secondary: ['P12'],
      utility: ['Barbed Wire', 'Bulletproof Camera'],
      ability: 'Active Defense System',
      team: 'Defense',
      icon: 'https://i.imgur.com/n0SpZER.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4kMW2lcoewGifRWbvQVjKy/8f974b5d26db81dc823ea602e31d6273/r6-operators-list-jager.png'
    },
    {
      name: 'Rook',
      primary: ['MP5', 'P90', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Armor Pack',
      team: 'Defense',
      icon: 'https://i.imgur.com/9jaeFQz.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1aFTx0BJYAKAnS1vyNA7w6/b4fc6421d382c677aa0197f84131eaa5/r6-operators-list-rook.png'
    },
    {
      name: 'Doc',
      primary: ['MP5', 'P90', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Bulletproof Camera', 'Barbed Wire'],
      ability: 'Stim Pistol',
      team: 'Defense',
      icon: 'https://i.imgur.com/XxOsarG.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2sCxLIpS9I19PKRz44Phj9/4f96411a556cc41597b8b3e83260cd21/r6-operators-list-doc.png'
    },
    {
      name: 'Twitch',
      primary: ['F5', '417', 'SG-CQB'],
      secondary: ['P9', 'LFP586'],
      utility: ['Smoke Grenade', 'Claymore'],
      ability: 'Shock Drones',
      team: 'Attack',
      icon: 'https://i.imgur.com/Z331jVv.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/Z9R1Anc8MHwbG5iyPoOf2/69fe9aee30e03322a4e09d4b87de15aa/r6-operators-list-twitch.png'
    },
    {
      name: 'Montagne',
      primary: ['Extendable Shield'],
      secondary: ['P9', 'LFP586'],
      utility: ['Smoke Grenade', 'Hard Breach Charge', 'Impact Grenade'],
      ability: 'Extendable Shield',
      team: 'Attack',
      icon: 'https://i.imgur.com/jxoVTxM.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1hxlGxmToB93urkgbIzUvW/fa894cd6ab38358284a3a1858cabbeee/r6-operators-list-montagne.png'
    },
    {
      name: 'Thermite',
      primary: ['M1014', '556XI'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Smoke Grenade', 'Stun Grenade'],
      ability: 'Exothermic Charge',
      team: 'Attack',
      icon: 'https://i.imgur.com/EgsXROS.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NQW8lJVslVSaYSiBlAleU/09fd8e3e946f2e71f39182b9ff18dd77/r6-operators-list-thermite.png'
    },
    {
      name: 'Pulse',
      primary: ['UMP45', 'M1014'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Heartbeat Sensor',
      team: 'Defense',
      icon: 'https://i.imgur.com/Tcd0RBx.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1YQb5phSD3uYbWrqhCBJRU/06e5f689777224bf8ca6c7c5cad9db9d/r6-operators-list-pulse.png'
    },
    {
      name: 'Castle',
      primary: ['UMP45', 'M1014'],
      secondary: ['5.7 USG', 'Super Shorty'],
      utility: ['Proximity Alarm', 'Bulletproof Camera'],
      ability: 'Armor Panel',
      team: 'Defense',
      icon: 'https://i.imgur.com/JDsAFcN.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ETv9XcrmgbAdYWDJ2ZIh0/3f5ad7d030ee411c041c524880176603/r6-operators-list-castle.png'
    },
    {
      name: 'Ash',
      primary: ['G36C', 'R4-C'],
      secondary: ['5.7 USG', 'M4 MEUSOC'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Breaching Rounds',
      team: 'Attack',
      icon: 'https://i.imgur.com/Dm1wVna.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QOEBDfqjtUxVBc31l8L9f/4d9b112565baf81d56d69279b95cd463/r6-operators-list-ash_317253.png'
    },
    {
      name: 'Thatcher',
      primary: ['AR33', 'L85A2', 'M590A1'],
      secondary: ['P226 MK 25'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'EMP Grenade',
      team: 'Attack',
      icon: 'https://i.imgur.com/OSscCJV.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5QGPM6l25ybaINnaIaLgvm/d018abc75d44758d666ad6bea0a38a9b/r6-operators-list-thatcher.png'
    },
    {
      name: 'Sledge',
      primary: ['L85A2', 'M590A1'],
      secondary: ['P226 MK 25'],
      utility: ['Frag Grenade', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Tactical Breaching Hammer',
      team: 'Attack',
      icon: 'https://i.imgur.com/wis3SqC.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6eIdbZWLBIdtCygNAu9uue/8856e29f0e9ebc3b6ed996223586ebce/r6-operators-list-sledge.png'
    },
    {
      name: 'Smoke',
      primary: ['FMG-9', 'M590A1'],
      secondary: ['P226 Mk 25', 'SMG-11'],
      utility: ['Deployable Shiled', 'Barbed Wire'],
      ability: 'Remote Gas Grenade',
      team: 'Defense',
      icon: 'https://i.imgur.com/sQuJLvo.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Tm9rzdq6j9cpdW9qjnnrw/10d42d14755002e1056d1a940841482c/r6-operators-list-smoke.png'
    },
    {
      name: 'Mute',
      primary: ['MP5K', 'M590A1'],
      secondary: ['P226 Mk 25', 'SMG-11'],
      utility: ['Bulletproof Camera', 'Nitro Cell'],
      ability: 'Signal Disrupter',
      team: 'Defense',
      icon: 'https://i.imgur.com/koTobd2.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4BWoDVmdDsgrI071YJwqyF/4bcf11da1e22bda96d130a0f0d4d5b48/r6-operators-list-mute.png'
    },
    {
      name: 'Frost',
      primary: ['Super 90', '9MM C1'],
      secondary: ['MK1 9MM', 'ITA12S'],
      utility: ['Bulletproof Camera', 'Deployable Shield'],
      ability: 'Welcome Mat',
      team: 'Defense',
      icon: 'https://i.imgur.com/CeDresh.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/33qvDwvWy7y9VGw9k1RYWi/73c4b6e46575b2b649058e2e626c223a/r6-operators-list-frost.png'
    },
    {
      name: 'Buck',
      primary: ['C8-SFW', 'CAMRS'],
      secondary: ['Mk19mm', 'GONNE-6'],
      utility: ['Stun Grenade', 'Hard Breach Charge'],
      ability: 'Skeleton Key',
      team: 'Attack',
      icon: 'https://i.imgur.com/0S5wttn.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3k68pZu62GPbCAFOSCej9a/3c3d3da1f7109a396fb59dcf06c5c4c8/r6-operators-list-buck.png'
    },
    {
      name: 'Valkyrie',
      primary: ['MPX', 'SPAS-12'],
      secondary: ['D-50'],
      utility: ['Impact Grenade', 'Nitro Cell'],
      ability: 'Black Eye',
      team: 'Defense',
      icon: 'https://i.imgur.com/tt6r2K9.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7xN3HJXPLVEmWA9PDnQzTV/613b19a897503161f2cf6fe7bbe3408e/r6-operators-list-valkyrie.png'
    },
    {
      name: 'Blackbeard',
      primary: ['MK17 CQB', 'SR-25'],
      secondary: ['D-50'],
      utility: ['Breach Charge', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Rifle Shield',
      team: 'Attack',
      icon: 'https://i.imgur.com/ZftuPfG.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5u6Ak7dkTb4yOjaP1hlGuT/0cdd45963fd8c83c62f609c7319bbf05/r6-operators-list-blackbeard.png'
    },
    {
      name: 'Capitao',
      primary: ['PARA-308', 'M249'],
      secondary: ['PRB92'],
      utility: ['Breach Charge', 'Stun Grenade'],
      ability: 'Rifle Shield',
      team: 'Attack',
      icon: 'https://i.imgur.com/i0Ud9NO.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3AZlhNFA21aKL2MdAIEwa8/abfce9018a7a08c120d707fbc28ae709/r6-operators-list-capitao.png'
    },
    {
      name: 'Caveira',
      primary: ['M12', 'SPAS-15'],
      secondary: ['Luison'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Silent Step',
      team: 'Defense',
      icon: 'https://i.imgur.com/fG4REAS.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RZ2Vwk7HozKMCtS5gFMp7/e1b930e3c80590a316939d9df0d88660/r6-operators-list-caveira.png'
    },
    {
      name: 'Echo',
      primary: ['MP5SD', 'Supernova'],
      secondary: ['P229', 'Bearing 9'],
      utility: ['Impact Grenade', 'Proximity Alarm'],
      ability: 'Yokai',
      team: 'Defense',
      icon: 'https://i.imgur.com/oDKto2g.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MdVMpafww11MfSVMEzyTK/4d4c5d92585c7cf11a28cbf9456e3d9e/r6-operators-list-echo.png'
    },
    {
      name: 'Hibana',
      primary: ['TYPE-89', 'Supernova'],
      secondary: ['P229', 'Bearing 9'],
      utility: ['Stun Grenade', 'Breach Charge'],
      ability: 'X-Kairos',
      team: 'Attack',
      icon: 'https://i.imgur.com/XwpvHHY.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7mAs4mz2zA4wjPZsNg6tys/e4fbdbfe20406c2655b56ba420b839aa/r6-operators-list-hibana.png'
    },
    {
      name: 'Jackal',
      primary: ['C7E', 'PDW9', 'ITA12L'],
      secondary: ['ITA12S', 'USP40'],
      utility: ['Claymore', 'Smoke Grenade'],
      ability: 'Eyenox Model III',
      team: 'Attack',
      icon: 'https://i.imgur.com/cwJEfZp.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/kbyJly2JDRxFrjFSrptiy/ebbdae24cdfed025b0872742bb6c2a96/r6-operators-list-jackal.png'
    },
    {
      name: 'Mira',
      primary: ['Vector .45 ACP', 'ITA12L'],
      secondary: ['ITA12S', 'USP40'],
      utility: ['Proximity Alarm ', 'Nitro Cell'],
      ability: 'Black Mirror',
      team: 'Defense',
      icon: 'https://i.imgur.com/ec6w6IX.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q9Y4UXzkQfECOw5fX3QrI/bfd6532c840cb06a22e0196f2acfc462/r6-operators-list-mira.png'
    },
    {
      name: 'Lesion',
      primary: ['SX12SD', 'T-5 SMG'],
      secondary: ['Q-929'],
      utility: ['Impact Grenade', 'Bulletproof Camera'],
      ability: 'GU Mines',
      team: 'Defense',
      icon: 'https://i.imgur.com/RcVwNag.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3woPDn0yMuXfkr2RYoymFj/964dfe9277e5299b0125c33b39e165d1/r6-operators-list-lesion.png'
    },
    {
      name: 'Ying',
      primary: ['T-95 LSW', 'SX12'],
      secondary: ['Q-929'],
      utility: ['Smoke Grenade', 'EMP Grenade'],
      ability: 'Candela',
      team: 'Attack',
      icon: 'https://i.imgur.com/ZuPzm8g.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/36BxtuVTQFrNh2OPyJ2px3/6db32fa8151b9a925acdd65d289bcf0f/r6-operators-list-ying.png'
    },
    {
      name: 'Ela',
      primary: ['Scorpion EVO 3 A1', 'FO-12'],
      secondary: ['RG15'],
      utility: ['Barbed Wire', 'Deployable Shield'],
      ability: 'GRZMOT Mine',
      team: 'Defense',
      icon: 'https://i.imgur.com/JQByPKL.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6110n4X8KghHzBtPrksrKD/28e78ce725b3d1cd35c6f0967c0524b8/r6-operators-list-ela.png'
    },
    {
      name: 'Zofia',
      primary: ['LMG-E', 'M762'],
      secondary: ['RG15'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'KS70 Lifeline',
      team: 'Attack',
      icon: 'https://i.imgur.com/Bi9KhFE.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/z60t1OJxJoHqm2zp0t5dL/4acc0904444f43b12a17f6a578322cf9/r6-operators-list-zofia.png'
    },
    {
      name: 'Dokkaebi',
      primary: ['MK 14 EBR', 'BOSG. 12.2'],
      secondary: ['GONNE-6', 'SMG-12'],
      utility: ['Smoke Grenade', 'Stun Grenade', 'EMP Grenade'],
      ability: 'Logic Bomb',
      team: 'Attack',
      icon: 'https://i.imgur.com/0CKsnQd.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fjUupLXClpcdTyqdvPv24/e4492917c18682ef09f9b0445176b2f2/r6-operators-list-dokkaebi.png'
    },
    {
      name: 'Vigil',
      primary: ['K1A', 'BOSG. 12.2'],
      secondary: ['C75 Auto', 'SMG-12'],
      utility: ['Bulletproof Camera', 'Impact Grenade'],
      ability: 'ERC-7',
      team: 'Defense',
      icon: 'https://i.imgur.com/sa2j6Rm.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/48ebOPwZWlyktdhawglqlI/819d0565c7f545e97526e4dda0a2f129/r6-operators-list-vigil.png'
    },
    {
      name: 'Lion',
      primary: ['V308', '417', 'SG-CQB'],
      secondary: ['GONNE-6', 'LFP586'],
      utility: ['Stun Grenade', 'Claymore'],
      ability: 'EE-ONE-D',
      team: 'Attack',
      icon: 'https://i.imgur.com/wUWCkHb.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4wYSIOO4AKq0nw1GbulGns/fcd32bda72facd7062a25ad3764f21e9/r6-operators-list-lion.png'
    },
    {
      name: 'Finka',
      primary: ['Spear .308', '6P41', 'SASG-12'],
      secondary: ['PMM', 'Gsh-18', 'GONNE-6'],
      utility: ['Smoke Grenade', 'Stun Grenade'],
      ability: 'Adrenal Surge',
      team: 'Attack',
      icon: 'https://i.imgur.com/hgmkFOn.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6VkZ60XV4HWhbQaoMpfjnw/1bd7667a572622371627e90e5e572455/r6-operators-list-finka.png'
    },
    {
      name: 'Alibi',
      primary: ['MX4 Storm', 'ACS12'],
      secondary: ['Keratos .357', 'Baliff 410'],
      utility: ['Impact Grenade', 'Deployable Shield'],
      ability: 'Prisma',
      team: 'Defense',
      icon: 'https://i.imgur.com/GmGQecX.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/11nzEgSwdAXLow3kPl0wom/3fdf2b0aa1c1af7ef785d28cf5d80114/r6-operators-list-alibi.png'
    },
    {
      name: 'Maestro',
      primary: ['Alda 5.56', 'ACS12'],
      secondary: ['Keratos .357', 'Baliff 410'],
      utility: ['Barbed Wire', 'Impact Grenade'],
      ability: 'Evil Eye',
      team: 'Defense',
      icon: 'https://i.imgur.com/dgj79sS.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6QNXf9qRkqzOdsprj2SWgI/0c4cc3b9423cada4fed0ba5ae2c9c722/r6-operators-list-maestro.png'
    },
    {
      name: 'Maverick',
      primary: ['AR-15.50', 'M4 GS'],
      secondary: ['1911 TACOPS'],
      utility: ['Claymore', 'Stun Grenade'],
      ability: 'Breaching Torch',
      team: 'Attack',
      icon: 'https://i.imgur.com/naWjgHj.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1MmaEupq7KOe6it1trqIWP/3f4246349a36e28f4d9299f9368612c1/r6-operators-list-maverick.png'
    },
    {
      name: 'Clash',
      primary: ['CCE Shield'],
      secondary: ['P-10C', 'SPSMG9'],
      utility: ['Barbed Wire', 'Impact Grenade'],
      ability: 'CCE Shield',
      team: 'Defense',
      icon: 'https://i.imgur.com/Fx4aBya.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3tTgRbA9GdeLTmI1mPObsp/5b490d1e9021c37ffa59f3e6bc6f8c7e/r6-operators-list-clash.png'
    },
    {
      name: 'Kaid',
      primary: ['Aug A3', 'TCSG12'],
      secondary: ['.44 MAG Semi-Autio', 'LFP587'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: '"RTILA" Electroclaw',
      team: 'Defense',
      icon: 'https://i.imgur.com/2Vd07Ak.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/9ATWPlasUTzxyJMNlV9SM/16dd669d06990b12088660ffc77bd6b3/r6-operators-list-kaid.png'
    },
    {
      name: 'Nomad',
      primary: ['AK-74M', 'ARX200'],
      secondary: ['.44 MAG Semi-Autio', 'PRB92'],
      utility: ['Breach Charge', 'Stun Grenade'],
      ability: 'Airjab Launcher',
      team: 'Attack',
      icon: 'https://i.imgur.com/cz8lRnN.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3VHhiyMOUkBOW1u1Zh5eGH/9e603d3e6926fc26ebee494b3040eba7/r6-operators-list-nomad.png'
    },
    {
      name: 'Gridlock',
      primary: ['F90', 'M249 SAW'],
      secondary: ['Super Shorty', 'SDP 9MM', 'GONNE-6'],
      utility: ['Smoke Grenade', 'Breach Charge'],
      ability: 'Trax Stingers',
      team: 'Attack',
      icon: 'https://i.imgur.com/D9JHzT2.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/27gUsHtPmP86NRs4cPug1o/31ea0005ad1afc68a8ebcc477934ded6/r6-operators-list-gridlock.png'
    },
    {
      name: 'Mozzie',
      primary: ['Commando 9', 'P10 RONI'],
      secondary: ['SDP 9MM'],
      utility: ['Barbed Wire', 'Nitro Cell'],
      ability: 'Pest Launcher',
      team: 'Defense',
      icon: 'https://i.imgur.com/y8ZnaXb.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5NwXzotdPIQuvWugaam4JA/eaf8febf1432c5f2f015318c83890d93/r6-operators-list-mozzie_343537.png'
    },
    {
      name: 'Warden',
      primary: ['M590A1', 'MPX'],
      secondary: ['P-10C', 'SMG-12'],
      utility: ['Deployable Shield', 'Nitro Cell'],
      ability: 'Glance Smart Glasses',
      team: 'Defense',
      icon: 'https://i.imgur.com/0RkSB9Z.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/72pEJEYxwPGoW221XvdmAJ/ea79dbd58064cbc99a1514e1b1641586/r6-operators-list-warden.png'
    },
    {
      name: 'Nokk',
      primary: ['FMG-9', 'SIX12 SD'],
      secondary: ['5.7 USG', 'D-50'],
      utility: ['Frag Grenade', 'Hard Breach Charge'],
      ability: 'Hel Presence Reduction',
      team: 'Attack',
      icon: 'https://i.imgur.com/eZ90vAg.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/VeXso9iKMqBDrSmuJ2kBx/b8020ed099ddbdcb31ec809b9d7da152/r6-operators-list-nokk.png'
    },
    {
      name: 'Amaru',
      primary: ['G8A1', 'Supernova'],
      secondary: ['GONNE-6', 'SMG-11'],
      utility: ['Stun Grenade', 'Hard Breach Charge'],
      ability: 'Garra Hook',
      team: 'Attack',
      icon: 'https://i.imgur.com/oHsfBW8.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5jumFHxGXFA7HehPNn0uGD/e00f3d67802944d0c7aba72455e1ba6a/r6-operators-list-amaru.png'
    },
    {
      name: 'Goyo',
      primary: ['Vector .45 ACP', 'TCSG12'],
      secondary: ['P229'],
      utility: ['Nitro Cell', 'Proximity Alarm'],
      ability: 'Volcan Canister',
      team: 'Defense',
      icon: 'https://i.imgur.com/8VztGhy.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ylXIr2TxRcFMSKfRhXJXh/5202b0fdfbf43545e8c40a8232a438c3/r6-operators-list-goyo.png'
    },
    {
      name: 'Kali',
      primary: ['CSRX 300'],
      secondary: ['SPSMG9', 'C75 Auto'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'LV Explosive Lance',
      team: 'Attack',
      icon: 'https://i.imgur.com/NIIFJQZ.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/41NACeIbkdnIWgnwq0HzD4/9713f8e58b9a8c253b7507b59169bb3c/r6-operators-list-kali_358317.png'
    },
    {
      name: 'Wamai',
      primary: ['AUG A2', 'MP5K'],
      secondary: ['D-40', 'P12'],
      utility: ['Proximity Alarm', 'Impact Grenade'],
      ability: 'Mag-Net System',
      team: 'Defense',
      icon: 'https://i.imgur.com/cZHCIvR.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2ZSUcKWczIo1w2WwzNan5B/98938e59a958117b46901c57fce98ae7/r6-operators-list-wamai_358318.png'
    },
    {
      name: 'Iana',
      primary: ['ARX200', 'G36C'],
      secondary: 'Mk19mm',
      utility: ['Frag Grenade', 'Smoke Grenade'],
      ability: 'Gemini Replicator',
      team: 'Attack',
      icon: 'https://i.imgur.com/iQfA9uE.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6vES8lEllMwW9OaBYRT7YX/39b5fe90684d7ce637a7d025cdd1ec96/r6s-operator-list-iana.png'
    },
    {
      name: 'Oryx',
      primary: ['SPAS-12', 'T-5 SMG'],
      secondary: ['BALIF 410', 'USP40'],
      utility: ['Barbed Wire', 'Proximity Alarm'],
      ability: 'Remah Dash',
      team: 'Defense',
      icon: 'https://i.imgur.com/5GHFArC.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3JBOp3MXgGeuEwyoYrkuMi/b7aa3c4a3fa6f165135954aa30252838/r6s-operator-list-oryx.png'
    },
    {
      name: 'Melusi',
      primary: ['MP5', 'Super 90'],
      secondary: ['RG15'],
      utility: ['Impact Grenade', 'Bulletproof Camera'],
      ability: 'Banshee Sonic Defense',
      team: 'Defense',
      icon: 'https://i.imgur.com/IpApSF7.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1yoVAGw5rEQ8zPPHoQSDJb/b16a570fadb3342416c5c44847cc651a/r6s-operator-list-melusi.png'
    },
    {
      name: 'Ace',
      primary: ['AK-12', 'M1014'],
      secondary: ['P9'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'S.E.L.M.A Aqua Breacher',
      team: 'Attack',
      icon: 'https://i.imgur.com/CwJwYsn.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5snW47tH4a5VuPhidr61sm/40b812d32eb85b5c3390865541578bea/r6s-operator-list-ace.png'
    },
    {
      name: 'Zero',
      primary: ['SC3000K', 'MP7'],
      secondary: ['5.7 USG', 'GONE-6'],
      utility: ['Claymore', 'EMP Grenade'],
      ability: 'Argus Launcher',
      team: 'Attack',
      icon: 'https://i.imgur.com/85Pkh7V.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/24jDQIfDdVMLX5K54pKNe5/58dec3b1e7d32a637bc76560e0cf0385/r6s-operator-list-zero.png'
    },
    {
      name: 'Aruni',
      primary: ['P10 Roni', 'MK 14 EBR'],
      secondary: ['PRB92'],
      utility: ['Bulletproof Camera', 'Barbed Wire'],
      ability: 'Surya Gate',
      team: 'Defense',
      icon: 'https://i.imgur.com/RFyZfRH.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4yfuWCW8O4ja2VqR9tXqaE/c8dd123a6405959cf4f091c3854c9d96/r6s-operators-list-aruni.png'
    },
    {
      name: 'Flores',
      primary: ['AR33', 'SR-25'],
      secondary: ['GSH-18'],
      utility: ['Stun Grenade', 'Claymore'],
      ability: 'RCE-Ratero Charge',
      team: 'Attack',
      icon: 'https://i.imgur.com/iLTDT0U.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3hXRjYHsrlFOocJjyxyYZY/29eb8f1ad9eab150518a053b775c336f/r6s-operators-list-flores.png'
    },
    {
      name: 'Thunderbird',
      primary: ['Spear .308', 'SPAS-15'],
      secondary: ['Bearing 9', 'Q-929'],
      utility: ['Impact Grenade', 'Nitro Cell'],
      ability: 'Kona Station',
      team: 'Defense',
      icon: 'https://i.imgur.com/LGEtGC6.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gadEIZqtSfsHstfPMe3bz/424c7e4c21276e99f41a8c75478aa5e5/r6s-operators-list-thunderbird.png'
    },
    {
      name: 'Osa',
      primary: ['556XI', 'PDW9'],
      secondary: ['PMM'],
      utility: ['Smoke Grenade', 'Claymore'],
      ability: 'Talon-8 Clear Shield',
      team: 'Attack',
      icon: 'https://i.imgur.com/UJ8o1aG.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3Dg95rvyhPtw588r60vIPM/75e609068a0b205cc4dbc7bf3e517f51/r6s-operators-list-osa.png'
    },
    {
      name: 'Thorn',
      primary: ['UZK50GL', 'M870'],
      secondary: ['1911 TACOPS', 'C75 Auto'],
      utility: ['Barbed Wire', 'Deployable Shield'],
      ability: 'Razorbloom Shell',
      team: 'Defense',
      icon: 'https://i.imgur.com/iROFohg.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7LbjnSD3wKQXWhoxSXv3vu/238defac906026c3763e93041e3d96f9/r6s-operators-list-thorn.png'
    },
    {
      name: 'Azami',
      primary: ['9X19SVN', 'ACS12'],
      secondary: ['D-50'],
      utility: ['Impact Grenade', 'Barbed Wire'],
      ability: 'Kiba Barrier',
      team: 'Defense',
      icon: 'https://i.imgur.com/amNnlRf.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5M7OGhXfAf5Q0Cdo1YJkRE/2e4c141357cf97d54c6840ee38f6bf76/r6s-operators-list-azami.png'
    },
    {
      name: 'Sens',
      primary: ['POF9', '417'],
      secondary: ['SDP 9MM', 'GONNE-6'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'R.O.U. Projector System',
      team: 'Attack',
      icon: 'https://i.imgur.com/515O0b0.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ieRqIy6e47QH48sTp1W4a/59f8188d94ae610bf76da26b4fef0b92/r6s-operators-list-sens.png'
    },
    {
      name: 'Grim',
      primary: ['552 Commando', 'SG-CQB'],
      secondary: ['P229'],
      utility: ['Breach Charge', 'Claymore'],
      ability: 'Kawan Hive Launcher',
      team: 'Attack',
      icon: 'https://i.imgur.com/qSZJjBT.png',
      image:
        'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png'
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
