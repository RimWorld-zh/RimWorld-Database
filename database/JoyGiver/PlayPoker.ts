const PlayPoker: DataJoyGiver = {
  baseChance: 1.5,
  thingDefs: [
    'PokerTable'
  ],
  jobDef: 'PlayPoker',
  joyKind: 'GamingCerebral',
  desireSit: true,
  pctPawnsEverDo: 1,
  unroofedOnly: false,
  requiredCapacities: [
    'Sight',
    'Manipulation'
  ],
  canDoWhileInBed: false,
  defName: 'PlayPoker'
}

export default PlayPoker;
