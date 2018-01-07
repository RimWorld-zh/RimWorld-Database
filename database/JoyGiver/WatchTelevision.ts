const WatchTelevision: DataJoyGiver = {
  baseChance: 2,
  thingDefs: [
    'TubeTelevision',
    'FlatscreenTelevision',
    'MegascreenTelevision'
  ],
  jobDef: 'WatchTelevision',
  joyKind: 'Passive',
  desireSit: true,
  pctPawnsEverDo: 1,
  unroofedOnly: false,
  requiredCapacities: [
    'Sight'
  ],
  canDoWhileInBed: true,
  defName: 'WatchTelevision'
}

export default WatchTelevision;
