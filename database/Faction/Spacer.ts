const Spacer: DataFaction = {
  isPlayer: false,
  humanlikeFaction: true,
  hidden: true,
  autoFlee: false,
  canSiege: false,
  canStageAttacks: false,
  canUseAvoidGrid: true,
  earliestRaidDays: 0,
  allowedArrivalTemperatureRange: {
    min: -1000,
    max: 1000
  },
  basicMemberKind: null,
  startingResearchTags: null,
  recipePrerequisiteTags: null,
  rescueesCanJoin: true,
  maxPawnOptionCostFactor: 1,
  requiredCountAtGameStart: 1,
  maxCountAtGameStart: 9999,
  canMakeRandomly: false,
  baseSelectionWeight: 0,
  techLevel: TechLevel.Spacer,
  backstoryCategory: 'Civil',
  hairTags: ['Urban'],
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
  homeIconPath: null,
  expandingIconTexture: null,
  colorSpectrum: null,
  allMemberKinds: null,
  apparelStuffs: ['Synthread', 'Hyperweave'],
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  defName: 'Spacer'
}

export default Spacer;
