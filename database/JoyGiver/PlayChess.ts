const PlayChess: DataJoyGiver = {
  baseChance: 1.5,
  thingDefs: [
    'ChessTable'
  ],
  jobDef: 'PlayChess',
  joyKind: 'GamingCerebral',
  desireSit: true,
  pctPawnsEverDo: 1,
  unroofedOnly: false,
  requiredCapacities: [
    'Sight',
    'Manipulation'
  ],
  canDoWhileInBed: false,
  defName: 'PlayChess'
}

export default PlayChess;
