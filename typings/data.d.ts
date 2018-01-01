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

declare interface DataSkill extends EData {
  readonly workTags: ReadonlyArray<WorkTags> | null;
}

declare interface DataStuffCategory extends EData {
  readonly stuffs: ReadonlyArray<string | null> | null;
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
  readonly BorealForest: DataBiome;
  readonly Tundra: DataBiome;
  readonly ColdBog: DataBiome;
  readonly IceSheet: DataBiome;
  readonly SeaIce: DataBiome;
  readonly TemperateForest: DataBiome;
  readonly TemperateSwamp: DataBiome;
  readonly Ocean: DataBiome;
  readonly Lake: DataBiome;
  readonly TropicalRainforest: DataBiome;
  readonly TropicalSwamp: DataBiome;
  readonly AridShrubland: DataBiome;
  readonly Desert: DataBiome;
  readonly ExtremeDesert: DataBiome;
}


declare interface DatabaseDamage {
  readonly Flame: DataDamage;
  readonly Burn: DataDamage;
  readonly Frostbite: DataDamage;
  readonly TornadoScratch: DataDamage;
  readonly SurgicalCut: DataDamage;
  readonly ExecutionCut: DataDamage;
  readonly Cut: DataDamage;
  readonly Crush: DataDamage;
  readonly Blunt: DataDamage;
  readonly Poke: DataDamage;
  readonly Stab: DataDamage;
  readonly Scratch: DataDamage;
  readonly Bite: DataDamage;
  readonly ToxicBite: DataDamage;
  readonly Deterioration: DataDamage;
  readonly Mining: DataDamage;
  readonly Rotting: DataDamage;
  readonly Extinguish: DataDamage;
  readonly Bomb: DataDamage;
  readonly Smoke: DataDamage;
  readonly RangedStab: DataDamage;
  readonly Bullet: DataDamage;
  readonly Arrow: DataDamage;
  readonly ArrowHighVelocity: DataDamage;
  readonly Stun: DataDamage;
  readonly EMP: DataDamage;
}


declare interface DatabaseDamageArmorCategory {
  readonly Blunt: DataDamageArmorCategory;
  readonly Sharp: DataDamageArmorCategory;
  readonly Heat: DataDamageArmorCategory;
  readonly Electric: DataDamageArmorCategory;
}


declare interface DatabaseDifficulty {
  readonly Peaceful: DataDifficulty;
  readonly VeryEasy: DataDifficulty;
  readonly Easy: DataDifficulty;
  readonly Medium: DataDifficulty;
  readonly Hard: DataDifficulty;
  readonly VeryHard: DataDifficulty;
}


declare interface DatabaseFaction {
  readonly Spacer: DataFaction;
  readonly SpacerHostile: DataFaction;
  readonly Mechanoid: DataFaction;
  readonly Insect: DataFaction;
  readonly Outlander: DataFaction;
  readonly Tribe: DataFaction;
  readonly Pirate: DataFaction;
  readonly PlayerColony: DataFaction;
  readonly PlayerTribe: DataFaction;
}


declare interface DatabaseHair {
  readonly Afro: DataHair;
  readonly Bob: DataHair;
  readonly Burgundy: DataHair;
  readonly Flowy: DataHair;
  readonly Long: DataHair;
  readonly Mohawk: DataHair;
  readonly Mop: DataHair;
  readonly Pigtails: DataHair;
  readonly Shaved: DataHair;
  readonly Spikes: DataHair;
  readonly Tuft: DataHair;
  readonly Wavy: DataHair;
  readonly BraidedKnot: DataHair;
  readonly Topdog: DataHair;
  readonly Senorita: DataHair;
  readonly ScorpionTail: DataHair;
  readonly BriefPonytail: DataHair;
  readonly Troubadour: DataHair;
  readonly Messy: DataHair;
  readonly Princess: DataHair;
  readonly Firestarter: DataHair;
  readonly GreasySwoop: DataHair;
  readonly Curly: DataHair;
  readonly Scatman: DataHair;
}


declare interface DatabaseSkill {
  readonly Shooting: DataSkill;
  readonly Melee: DataSkill;
  readonly Social: DataSkill;
  readonly Animals: DataSkill;
  readonly Medicine: DataSkill;
  readonly Cooking: DataSkill;
  readonly Construction: DataSkill;
  readonly Growing: DataSkill;
  readonly Mining: DataSkill;
  readonly Artistic: DataSkill;
  readonly Crafting: DataSkill;
  readonly Intellectual: DataSkill;
}


declare interface DatabaseStuffCategory {
  readonly Metallic: DataStuffCategory;
  readonly Woody: DataStuffCategory;
  readonly Stony: DataStuffCategory;
  readonly Fabric: DataStuffCategory;
  readonly Leathery: DataStuffCategory;
}


declare interface DatabaseTerrain {
  readonly Concrete: DataTerrain;
  readonly PavedTile: DataTerrain;
  readonly WoodPlankFloor: DataTerrain;
  readonly MetalTile: DataTerrain;
  readonly SilverTile: DataTerrain;
  readonly GoldTile: DataTerrain;
  readonly SterileTile: DataTerrain;
  readonly CarpetRed: DataTerrain;
  readonly CarpetGreen: DataTerrain;
  readonly CarpetBlue: DataTerrain;
  readonly CarpetCream: DataTerrain;
  readonly CarpetDark: DataTerrain;
  readonly BurnedWoodPlankFloor: DataTerrain;
  readonly BurnedCarpet: DataTerrain;
  readonly TileSandstone: DataTerrain;
  readonly TileGranite: DataTerrain;
  readonly TileLimestone: DataTerrain;
  readonly TileSlate: DataTerrain;
  readonly TileMarble: DataTerrain;
  readonly FlagstoneSandstone: DataTerrain;
  readonly FlagstoneGranite: DataTerrain;
  readonly FlagstoneLimestone: DataTerrain;
  readonly FlagstoneSlate: DataTerrain;
  readonly FlagstoneMarble: DataTerrain;
  readonly Sand: DataTerrain;
  readonly Soil: DataTerrain;
  readonly MarshyTerrain: DataTerrain;
  readonly SoilRich: DataTerrain;
  readonly Mud: DataTerrain;
  readonly Marsh: DataTerrain;
  readonly Gravel: DataTerrain;
  readonly MossyTerrain: DataTerrain;
  readonly Ice: DataTerrain;
  readonly BrokenAsphalt: DataTerrain;
  readonly PackedDirt: DataTerrain;
  readonly Underwall: DataTerrain;
  readonly WaterDeep: DataTerrain;
  readonly WaterOceanDeep: DataTerrain;
  readonly WaterMovingDeep: DataTerrain;
  readonly WaterShallow: DataTerrain;
  readonly WaterOceanShallow: DataTerrain;
  readonly WaterMovingShallow: DataTerrain;
  readonly Sandstone_Rough: DataTerrain;
  readonly Sandstone_RoughHewn: DataTerrain;
  readonly Sandstone_Smooth: DataTerrain;
  readonly Granite_Rough: DataTerrain;
  readonly Granite_RoughHewn: DataTerrain;
  readonly Granite_Smooth: DataTerrain;
  readonly Limestone_Rough: DataTerrain;
  readonly Limestone_RoughHewn: DataTerrain;
  readonly Limestone_Smooth: DataTerrain;
  readonly Slate_Rough: DataTerrain;
  readonly Slate_RoughHewn: DataTerrain;
  readonly Slate_Smooth: DataTerrain;
  readonly Marble_Rough: DataTerrain;
  readonly Marble_RoughHewn: DataTerrain;
  readonly Marble_Smooth: DataTerrain;
}

