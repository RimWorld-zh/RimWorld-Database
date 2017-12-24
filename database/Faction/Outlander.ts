const Outlander: DataFaction = {
  isPlayer: false,
  humanlikeFaction: true,
  hidden: false,
  autoFlee: true,
  canSiege: true,
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
  techLevel: TechLevel.Industrial,
  backstoryCategory: 'Civil',
  hairTags: ['Rural'],
  geneticVariance: 0.8,
  startingGoodwill: {
    min: 10,
    max: 40
  },
  mustStartOneEnemy: false,
  naturalColonyGoodwill: {
    min: -60,
    max: 0
  },
  goodwillDailyGain: 2,
  goodwillDailyFall: 2,
  appreciative: true,
  homeIconPath: 'World/WorldObjects/DefaultFactionBase',
  expandingIconTexture: 'World/WorldObjects/Expanding/Town',
  colorSpectrum: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
  allMemberKinds: ['Villager', 'GrenadierDestructive', 'MercenarySlasher', 'TownGuard', 'TownCouncilman', 'MercenaryGunner', 'MercenaryElite', 'TownTrader'],
  apparelStuffs: null,
  caravanTraderKinds: ['Caravan_Outlander_BulkGoods', 'Caravan_Outlander_CombatSupplier', 'Caravan_Outlander_Exotic', 'Caravan_Outlander_PirateMerchant'],
  visitorTraderKinds: ['Visitor_Outlander_Standard'],
  baseTraderKinds: ['Base_Outlander_Standard'],
  defName: 'Outlander'
}

export default Outlander;
