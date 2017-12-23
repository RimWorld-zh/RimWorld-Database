const Tribe: DataFaction = {
  isPlayer: false,
  humanlikeFaction: true,
  hidden: false,
  autoFlee: true,
  canSiege: false,
  canStageAttacks: true,
  canUseAvoidGrid: true,
  earliestRaidDays: 0,
  allowedArrivalTemperatureRange: {
    min: -40,
    max: 45
  },
  basicMemberKind: null,
  startingResearchTags: null,
  recipePrerequisiteTags: null,
  rescueesCanJoin: false,
  maxPawnOptionCostFactor: 1,
  requiredCountAtGameStart: 1,
  maxCountAtGameStart: 9999,
  canMakeRandomly: true,
  baseSelectionWeight: 1,
  techLevel: TechLevel.Neolithic,
  backstoryCategory: 'Tribal',
  hairTags: ['Tribal'],
  geneticVariance: 0.1,
  startingGoodwill: {
    min: 10,
    max: 30
  },
  mustStartOneEnemy: true,
  naturalColonyGoodwill: {
    min: -100,
    max: 10
  },
  goodwillDailyGain: 2,
  goodwillDailyFall: 2,
  appreciative: true,
  homeIconPath: 'World/WorldObjects/TribalFactionBase',
  expandingIconTexture: 'World/WorldObjects/Expanding/Village',
  allMemberKinds: ['TribalWarrior', 'TribalArcher', 'TribalHunter', 'TribalHeavyArcher', 'TribalBerserker', 'TribalChief', 'TribalTrader'],
  apparelStuffs: [],
  caravanTraderKinds: ['Caravan_Neolithic_BulkGoods', 'Caravan_Neolithic_WarMerchant', 'Caravan_Neolithic_Slaver', 'Caravan_Neolithic_ShamanMerchant'],
  visitorTraderKinds: ['Visitor_Neolithic_Standard'],
  baseTraderKinds: ['Base_Neolithic_Standard'],
  colorSpectrum: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(255, 255, 0, 1)'],
  defName: 'Tribe'
}

export default Tribe;