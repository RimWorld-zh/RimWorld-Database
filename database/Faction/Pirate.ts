const Pirate: DataFaction = {
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
  maxCountAtGameStart: 2,
  canMakeRandomly: true,
  baseSelectionWeight: 1,
  techLevel: TechLevel.Spacer,
  backstoryCategory: 'Raider',
  hairTags: ['Punk'],
  geneticVariance: 0.8,
  startingGoodwill: {
    min: -100,
    max: -90
  },
  mustStartOneEnemy: true,
  naturalColonyGoodwill: {
    min: -100,
    max: -80
  },
  goodwillDailyGain: 2,
  goodwillDailyFall: 2,
  appreciative: false,
  homeIconPath: 'World/WorldObjects/DefaultFactionBase',
  expandingIconTexture: 'World/WorldObjects/Expanding/PirateOutpost',
  allMemberKinds: ['Drifter', 'GrenadierEMP', 'GrenadierDestructive', 'Thrasher', 'MercenarySlasher', 'MercenaryHeavy', 'MercenarySniper', 'Scavenger', 'Pirate', 'MercenaryGunner', 'MercenaryElite', 'PirateBoss'],
  apparelStuffs: [],
  caravanTraderKinds: [],
  visitorTraderKinds: [],
  baseTraderKinds: [],
  colorSpectrum: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
  defName: 'Pirate'
}

export default Pirate;