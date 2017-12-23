const PlayerTribe: DataFaction = {
  isPlayer: true,
  humanlikeFaction: true,
  hidden: false,
  autoFlee: true,
  canSiege: false,
  canStageAttacks: false,
  canUseAvoidGrid: true,
  earliestRaidDays: 0,
  allowedArrivalTemperatureRange: {
    min: -1000,
    max: 1000
  },
  basicMemberKind: 'Tribesperson',
  startingResearchTags: ['TribalStart'],
  recipePrerequisiteTags: ['Tribal'],
  rescueesCanJoin: false,
  maxPawnOptionCostFactor: 1,
  requiredCountAtGameStart: 0,
  maxCountAtGameStart: 9999,
  canMakeRandomly: false,
  baseSelectionWeight: 0,
  techLevel: TechLevel.Neolithic,
  backstoryCategory: 'Tribal',
  hairTags: ['Tribal'],
  geneticVariance: 1,
  startingGoodwill: {
    min: 0,
    max: 0
  },
  mustStartOneEnemy: false,
  naturalColonyGoodwill: {
    min: 0,
    max: 0
  },
  goodwillDailyGain: 2,
  goodwillDailyFall: 2,
  appreciative: true,
  homeIconPath: 'World/WorldObjects/TribalFactionBase',
  expandingIconTexture: 'World/WorldObjects/Expanding/Village',
  allMemberKinds: [],
  apparelStuffs: ['Cloth'],
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  colorSpectrum: ['rgba(0, 0, 0, 1)'],
  defName: 'PlayerTribe'
}

export default PlayerTribe;
