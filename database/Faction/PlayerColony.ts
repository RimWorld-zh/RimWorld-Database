const PlayerColony: DataFaction = {
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
  basicMemberKind: 'Colonist',
  startingResearchTags: ['ClassicStart'],
  recipePrerequisiteTags: null,
  rescueesCanJoin: false,
  maxPawnOptionCostFactor: 1,
  requiredCountAtGameStart: 0,
  maxCountAtGameStart: 9999,
  canMakeRandomly: false,
  baseSelectionWeight: 0,
  techLevel: TechLevel.Industrial,
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
  homeIconPath: 'World/WorldObjects/DefaultFactionBase',
  expandingIconTexture: 'World/WorldObjects/Expanding/Town',
  allMemberKinds: [],
  apparelStuffs: ['Synthread'],
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  colorSpectrum: ['rgba(0, 0, 0, 1)'],
  defName: 'PlayerColony'
}

export default PlayerColony;
