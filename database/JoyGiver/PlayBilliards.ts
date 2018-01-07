const PlayBilliards: DataJoyGiver = {
  baseChance: 2,
  thingDefs: [
    'BilliardsTable'
  ],
  jobDef: 'PlayBilliards',
  joyKind: 'GamingDexterity',
  desireSit: true,
  pctPawnsEverDo: 1,
  unroofedOnly: false,
  requiredCapacities: [
    'Sight',
    'Manipulation'
  ],
  canDoWhileInBed: false,
  defName: 'PlayBilliards'
}

export default PlayBilliards;
