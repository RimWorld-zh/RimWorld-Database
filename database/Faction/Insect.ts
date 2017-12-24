const Insect: DataFaction = {
  isPlayer: false,
  humanlikeFaction: false,
  hidden: true,
  autoFlee: false,
  canSiege: false,
  canStageAttacks: false,
  canUseAvoidGrid: false,
  earliestRaidDays: 0,
  allowedArrivalTemperatureRange: {
    min: 0,
    max: 45
  },
  basicMemberKind: null,
  startingResearchTags: null,
  recipePrerequisiteTags: null,
  rescueesCanJoin: false,
  maxPawnOptionCostFactor: 1,
  requiredCountAtGameStart: 1,
  maxCountAtGameStart: 9999,
  canMakeRandomly: false,
  baseSelectionWeight: 0,
  techLevel: TechLevel.Animal,
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
  allMemberKinds: null,
  apparelStuffs: null,
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  defName: 'Insect'
}

export default Insect;
