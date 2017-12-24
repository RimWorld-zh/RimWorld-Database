const Mechanoid: DataFaction = {
  isPlayer: false,
  humanlikeFaction: false,
  hidden: true,
  autoFlee: false,
  canSiege: false,
  canStageAttacks: false,
  canUseAvoidGrid: false,
  earliestRaidDays: 45,
  allowedArrivalTemperatureRange: {
    min: -100,
    max: 200
  },
  basicMemberKind: null,
  startingResearchTags: null,
  recipePrerequisiteTags: null,
  rescueesCanJoin: false,
  maxPawnOptionCostFactor: 3,
  requiredCountAtGameStart: 1,
  maxCountAtGameStart: 9999,
  canMakeRandomly: false,
  baseSelectionWeight: 0,
  techLevel: TechLevel.Ultra,
  backstoryCategory: null,
  hairTags: [],
  geneticVariance: 1,
  startingGoodwill: {
    min: -100,
    max: -100
  },
  mustStartOneEnemy: true,
  naturalColonyGoodwill: {
    min: -100,
    max: -100
  },
  goodwillDailyGain: 2,
  goodwillDailyFall: 2,
  appreciative: true,
  homeIconPath: 'World/WorldObjects/DefaultFactionBase',
  expandingIconTexture: null,
  colorSpectrum: null,
  allMemberKinds: ['Centipede', 'Scyther'],
  apparelStuffs: null,
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  defName: 'Mechanoid'
}

export default Mechanoid;
