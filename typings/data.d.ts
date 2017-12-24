// Declaration for data types.

declare interface DataBiome extends EData {
  readonly animalDensity: number;
  readonly plantDensity: number;
  readonly diseaseMtbDays: number;
  readonly factionBaseSelectionWeight: number;
  readonly impassable: boolean;
  readonly hasVirtualPlants: boolean;
  readonly pathCost_spring: number;
  readonly pathCost_summer: number;
  readonly pathCost_fall: number;
  readonly pathCost_winter: number;
  readonly texture: string | null;
  readonly wildAnimals: ReadonlyArray<FloatDefValue> | null;
  readonly wildPlants: ReadonlyArray<FloatDefValue> | null;
  readonly diseases: ReadonlyArray<FloatDefValue> | null;
}

declare interface DataDamage extends EData {
  readonly makesBlood: boolean;
  readonly armorCategory: string | null;
  readonly spreadOut: boolean;
  readonly isExplosive: boolean;
  readonly explosionDamage: number;
  readonly explosionBuildingDamageFactor: number;
  readonly explosionColorCenter: string | null;
  readonly explosionColorEdge: string | null;
  readonly hediff: string | null;
  readonly hediffSkin: string | null;
  readonly hediffSolid: string | null;
}

declare interface DataDamageArmorCategory extends EData {
  readonly multStat: string | null;
  readonly deflectionStat: string | null;
}

declare interface DataDifficulty extends EData {
  readonly difficulty: number;
  readonly threatScale: number;
  readonly allowBigThreats: boolean;
  readonly allowIntroThreats: boolean;
  readonly allowCaveHives: boolean;
  readonly peacefulTemples: boolean;
  readonly colonistMoodOffset: number;
  readonly tradePriceFactorLoss: number;
  readonly cropYieldFactor: number;
  readonly diseaseIntervalFactor: number;
  readonly enemyReproductionRateFactor: number;
  readonly playerPawnInfectionChanceFactor: number;
  readonly manhunterChanceOnDamageFactor: number;
}

declare interface DataFaction extends EData {
  readonly isPlayer: boolean;
  readonly humanlikeFaction: boolean;
  readonly hidden: boolean;
  readonly autoFlee: boolean;
  readonly canSiege: boolean;
  readonly canStageAttacks: boolean;
  readonly canUseAvoidGrid: boolean;
  readonly earliestRaidDays: number;
  readonly allowedArrivalTemperatureRange: FloatRange;
  readonly basicMemberKind: string | null;
  readonly startingResearchTags: ReadonlyArray<string | null> | null;
  readonly recipePrerequisiteTags: ReadonlyArray<string | null> | null;
  readonly rescueesCanJoin: boolean;
  readonly maxPawnOptionCostFactor: number;
  readonly requiredCountAtGameStart: number;
  readonly maxCountAtGameStart: number;
  readonly canMakeRandomly: boolean;
  readonly baseSelectionWeight: number;
  readonly techLevel: TechLevel;
  readonly backstoryCategory: string | null;
  readonly hairTags: ReadonlyArray<string | null> | null;
  readonly geneticVariance: number;
  readonly startingGoodwill: FloatRange;
  readonly mustStartOneEnemy: boolean;
  readonly naturalColonyGoodwill: FloatRange;
  readonly goodwillDailyGain: number;
  readonly goodwillDailyFall: number;
  readonly appreciative: boolean;
  readonly homeIconPath: string | null;
  readonly expandingIconTexture: string | null;
  readonly colorSpectrum: ReadonlyArray<string | null> | null;
  readonly allMemberKinds: ReadonlyArray<string | null> | null;
  readonly apparelStuffs: ReadonlyArray<string | null> | null;
  readonly caravanTraderKinds: ReadonlyArray<string | null> | null;
  readonly visitorTraderKinds: ReadonlyArray<string | null> | null;
  readonly baseTraderKinds: ReadonlyArray<string | null> | null;
}

declare interface DataHair extends EData {
  readonly texPath: string | null;
  readonly hairGender: HairGender;
  readonly hairTags: ReadonlyArray<string | null> | null;
}

declare interface DataTerrain extends EData {
  readonly passability: Traversability;
  readonly pathCost: number;
  readonly pathCostIgnoreRepeat: boolean;
  readonly fertility: number;
  readonly terrainAffordanceNeeded: TerrainAffordance;
  readonly researchPrerequisites: ReadonlyArray<string | null> | null;
  readonly constructionSkillPrerequisite: number;
  readonly resourcesFractionWhenDeconstructed: number;
  readonly designationCategory: string | null;
  readonly designationHotKey: string | null;
  readonly minTechLevelToBuild: TechLevel;
  readonly maxTechLevelToBuild: TechLevel;
  readonly texturePath: string | null;
  readonly color: string | null;
  readonly affordances: ReadonlyArray<TerrainAffordance> | null;
  readonly takeFootprints: boolean;
  readonly takeSplashes: boolean;
  readonly avoidWander: boolean;
  readonly holdSnow: boolean;
  readonly extinguishesFire: boolean;
  readonly changeable: boolean;
  readonly smoothedTerrain: string | null;
  readonly driesTo: string | null;
  readonly burnedDef: string | null;
  readonly terrainFilthDef: string | null;
  readonly acceptTerrainSourceFilth: boolean;
  readonly acceptFilth: boolean;
  readonly stats: ReadonlyArray<FloatDefValue> | null;
  readonly costList: ReadonlyArray<IntDefValue> | null;
  readonly walkSpeed: number;
  readonly removable: boolean;
  readonly isCarpet: boolean;
}

declare interface DatabaseBiome {
  readonly AridShrubland: DataBiome;
  readonly BorealForest: DataBiome;
  readonly ColdBog: DataBiome;
  readonly Desert: DataBiome;
  readonly ExtremeDesert: DataBiome;
  readonly IceSheet: DataBiome;
  readonly Lake: DataBiome;
  readonly Ocean: DataBiome;
  readonly SeaIce: DataBiome;
  readonly TemperateForest: DataBiome;
  readonly TemperateSwamp: DataBiome;
  readonly TropicalRainforest: DataBiome;
  readonly TropicalSwamp: DataBiome;
  readonly Tundra: DataBiome;
}


declare interface DatabaseDamage {
  readonly Arrow: DataDamage;
  readonly ArrowHighVelocity: DataDamage;
  readonly Bite: DataDamage;
  readonly Blunt: DataDamage;
  readonly Bomb: DataDamage;
  readonly Bullet: DataDamage;
  readonly Burn: DataDamage;
  readonly Crush: DataDamage;
  readonly Cut: DataDamage;
  readonly Deterioration: DataDamage;
  readonly EMP: DataDamage;
  readonly ExecutionCut: DataDamage;
  readonly Extinguish: DataDamage;
  readonly Flame: DataDamage;
  readonly Frostbite: DataDamage;
  readonly Mining: DataDamage;
  readonly Poke: DataDamage;
  readonly RangedStab: DataDamage;
  readonly Rotting: DataDamage;
  readonly Scratch: DataDamage;
  readonly Smoke: DataDamage;
  readonly Stab: DataDamage;
  readonly Stun: DataDamage;
  readonly SurgicalCut: DataDamage;
  readonly TornadoScratch: DataDamage;
  readonly ToxicBite: DataDamage;
}


declare interface DatabaseDamageArmorCategory {
  readonly Blunt: DataDamageArmorCategory;
  readonly Electric: DataDamageArmorCategory;
  readonly Heat: DataDamageArmorCategory;
  readonly Sharp: DataDamageArmorCategory;
}


declare interface DatabaseDifficulty {
  readonly Easy: DataDifficulty;
  readonly Hard: DataDifficulty;
  readonly Medium: DataDifficulty;
  readonly Peaceful: DataDifficulty;
  readonly VeryEasy: DataDifficulty;
  readonly VeryHard: DataDifficulty;
}


declare interface DatabaseFaction {
  readonly Insect: DataFaction;
  readonly Mechanoid: DataFaction;
  readonly Outlander: DataFaction;
  readonly Pirate: DataFaction;
  readonly PlayerColony: DataFaction;
  readonly PlayerTribe: DataFaction;
  readonly Spacer: DataFaction;
  readonly SpacerHostile: DataFaction;
  readonly Tribe: DataFaction;
}


declare interface DatabaseHair {
  readonly Afro: DataHair;
  readonly Bob: DataHair;
  readonly BraidedKnot: DataHair;
  readonly BriefPonytail: DataHair;
  readonly Burgundy: DataHair;
  readonly Curly: DataHair;
  readonly Firestarter: DataHair;
  readonly Flowy: DataHair;
  readonly GreasySwoop: DataHair;
  readonly Long: DataHair;
  readonly Messy: DataHair;
  readonly Mohawk: DataHair;
  readonly Mop: DataHair;
  readonly Pigtails: DataHair;
  readonly Princess: DataHair;
  readonly Scatman: DataHair;
  readonly ScorpionTail: DataHair;
  readonly Senorita: DataHair;
  readonly Shaved: DataHair;
  readonly Spikes: DataHair;
  readonly Topdog: DataHair;
  readonly Troubadour: DataHair;
  readonly Tuft: DataHair;
  readonly Wavy: DataHair;
}


declare interface DatabaseTerrain {
  readonly BrokenAsphalt: DataTerrain;
  readonly BurnedCarpet: DataTerrain;
  readonly BurnedWoodPlankFloor: DataTerrain;
  readonly CarpetBlue: DataTerrain;
  readonly CarpetCream: DataTerrain;
  readonly CarpetDark: DataTerrain;
  readonly CarpetGreen: DataTerrain;
  readonly CarpetRed: DataTerrain;
  readonly Concrete: DataTerrain;
  readonly FlagstoneGranite: DataTerrain;
  readonly FlagstoneLimestone: DataTerrain;
  readonly FlagstoneMarble: DataTerrain;
  readonly FlagstoneSandstone: DataTerrain;
  readonly FlagstoneSlate: DataTerrain;
  readonly GoldTile: DataTerrain;
  readonly Granite_Rough: DataTerrain;
  readonly Granite_RoughHewn: DataTerrain;
  readonly Granite_Smooth: DataTerrain;
  readonly Gravel: DataTerrain;
  readonly Ice: DataTerrain;
  readonly Limestone_Rough: DataTerrain;
  readonly Limestone_RoughHewn: DataTerrain;
  readonly Limestone_Smooth: DataTerrain;
  readonly Marble_Rough: DataTerrain;
  readonly Marble_RoughHewn: DataTerrain;
  readonly Marble_Smooth: DataTerrain;
  readonly Marsh: DataTerrain;
  readonly MarshyTerrain: DataTerrain;
  readonly MetalTile: DataTerrain;
  readonly MossyTerrain: DataTerrain;
  readonly Mud: DataTerrain;
  readonly PackedDirt: DataTerrain;
  readonly PavedTile: DataTerrain;
  readonly Sand: DataTerrain;
  readonly Sandstone_Rough: DataTerrain;
  readonly Sandstone_RoughHewn: DataTerrain;
  readonly Sandstone_Smooth: DataTerrain;
  readonly SilverTile: DataTerrain;
  readonly Slate_Rough: DataTerrain;
  readonly Slate_RoughHewn: DataTerrain;
  readonly Slate_Smooth: DataTerrain;
  readonly Soil: DataTerrain;
  readonly SoilRich: DataTerrain;
  readonly SterileTile: DataTerrain;
  readonly TileGranite: DataTerrain;
  readonly TileLimestone: DataTerrain;
  readonly TileMarble: DataTerrain;
  readonly TileSandstone: DataTerrain;
  readonly TileSlate: DataTerrain;
  readonly Underwall: DataTerrain;
  readonly WaterDeep: DataTerrain;
  readonly WaterMovingDeep: DataTerrain;
  readonly WaterMovingShallow: DataTerrain;
  readonly WaterOceanDeep: DataTerrain;
  readonly WaterOceanShallow: DataTerrain;
  readonly WaterShallow: DataTerrain;
  readonly WoodPlankFloor: DataTerrain;
}

