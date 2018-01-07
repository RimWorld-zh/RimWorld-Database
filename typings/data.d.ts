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

declare interface DataJob extends EData {
  readonly playerInterruptible: boolean;
  readonly checkOverrideOnDamage: CheckJobOverrideOnDamageMode;
  readonly alwaysShowWeapon: boolean;
  readonly neverShowWeapon: boolean;
  readonly suspendable: boolean;
  readonly casualInterruptible: boolean;
  readonly collideWithPawns: boolean;
  readonly isIdle: boolean;
  readonly taleOnCompletion: string | null;
  readonly makeTargetPrisoner: boolean;
  readonly joyDuration: number;
  readonly joyMaxParticipants: number;
  readonly joyGainRate: number;
  readonly joySkill: string | null;
  readonly joyXpPerTick: number;
  readonly joyKind: string | null;
}

declare interface DataJoyGiver extends EData {
  readonly baseChance: number;
  readonly thingDefs: ReadonlyArray<string | null> | null;
  readonly jobDef: string | null;
  readonly joyKind: string | null;
  readonly desireSit: boolean;
  readonly pctPawnsEverDo: number;
  readonly unroofedOnly: boolean;
  readonly requiredCapacities: ReadonlyArray<string | null> | null;
  readonly canDoWhileInBed: boolean;
}

declare interface DataJoyKind extends EData {
  readonly jobs: ReadonlyArray<string | null> | null;
  readonly joyGivers: ReadonlyArray<string | null> | null;
  readonly ingestibleThings: ReadonlyArray<string | null> | null;
}

declare interface DataMainButton extends EData {
  readonly buttonVisible: boolean;
  readonly order: number;
  readonly defaultHotKey: KeyCode;
  readonly validWithoutMap: boolean;
  readonly hotKey: string | null;
}

declare interface DataNeed extends EData {
  readonly minIntelligence: Intelligence;
  readonly colonistAndPrisonersOnly: boolean;
  readonly colonistsOnly: boolean;
  readonly onlyIfCausedByHediff: boolean;
  readonly neverOnPrisoner: boolean;
  readonly showOnNeedList: boolean;
  readonly baseLevel: number;
  readonly major: boolean;
  readonly listPriority: number;
  readonly tutorHighlightTag: string | null;
  readonly showForCaravanMembers: boolean;
  readonly scaleBar: boolean;
  readonly fallPerDay: number;
  readonly seekerRisePerHour: number;
  readonly seekerFallPerHour: number;
  readonly freezeWhileSleeping: boolean;
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

declare interface DataWorkGiver extends EData {
  readonly workType: string | null;
  readonly workTags: ReadonlyArray<WorkTags> | null;
  readonly priorityInType: number;
  readonly requiredCapacities: ReadonlyArray<string | null> | null;
  readonly tagToGive: JobTag;
  readonly fixedBillGiverDefs: ReadonlyArray<string | null> | null;
}

declare interface DataWorkType extends EData {
  readonly naturalPriority: number;
  readonly relevantSkills: ReadonlyArray<string | null> | null;
  readonly workGiversByPriority: ReadonlyArray<string | null> | null;
  readonly workTags: ReadonlyArray<WorkTags> | null;
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


declare interface DatabaseJob {
  readonly Nuzzle: DataJob;
  readonly Mate: DataJob;
  readonly LayEgg: DataJob;
  readonly PredatorHunt: DataJob;
  readonly Maintain: DataJob;
  readonly PrepareCaravan_GatherItems: DataJob;
  readonly PrepareCaravan_GatherPawns: DataJob;
  readonly MarryAdjacentPawn: DataJob;
  readonly SpectateCeremony: DataJob;
  readonly StandAndBeSociallyActive: DataJob;
  readonly Skygaze: DataJob;
  readonly Meditate: DataJob;
  readonly Pray: DataJob;
  readonly GoForWalk: DataJob;
  readonly BuildSnowman: DataJob;
  readonly VisitGrave: DataJob;
  readonly ViewArt: DataJob;
  readonly SocialRelax: DataJob;
  readonly VisitSickPawn: DataJob;
  readonly PlayHorseshoes: DataJob;
  readonly PlayHoopstone: DataJob;
  readonly PlayChess: DataJob;
  readonly PlayBilliards: DataJob;
  readonly PlayPoker: DataJob;
  readonly WatchTelevision: DataJob;
  readonly UseTelescope: DataJob;
  readonly Goto: DataJob;
  readonly GotoSafeTemperature: DataJob;
  readonly GotoWander: DataJob;
  readonly Wait: DataJob;
  readonly WaitMaintainPosture: DataJob;
  readonly WaitDowned: DataJob;
  readonly WaitSafeTemperature: DataJob;
  readonly WaitWander: DataJob;
  readonly WaitCombat: DataJob;
  readonly AttackStatic: DataJob;
  readonly AttackMelee: DataJob;
  readonly SocialFight: DataJob;
  readonly UseVerbOnThing: DataJob;
  readonly Equip: DataJob;
  readonly TakeInventory: DataJob;
  readonly GiveToPackAnimal: DataJob;
  readonly Wear: DataJob;
  readonly RemoveApparel: DataJob;
  readonly DropEquipment: DataJob;
  readonly Strip: DataJob;
  readonly Open: DataJob;
  readonly RearmTrap: DataJob;
  readonly Refuel: DataJob;
  readonly FillFermentingBarrel: DataJob;
  readonly TakeBeerOutOfFermentingBarrel: DataJob;
  readonly UnloadInventory: DataJob;
  readonly UnloadYourInventory: DataJob;
  readonly ManTurret: DataJob;
  readonly EnterCryptosleepCasket: DataJob;
  readonly UseNeurotrainer: DataJob;
  readonly UseArtifact: DataJob;
  readonly UseItem: DataJob;
  readonly TriggerFirefoamPopper: DataJob;
  readonly ClearSnow: DataJob;
  readonly Vomit: DataJob;
  readonly Flick: DataJob;
  readonly TradeWithPawn: DataJob;
  readonly Flee: DataJob;
  readonly FleeAndCower: DataJob;
  readonly EnterTransporter: DataJob;
  readonly Resurrect: DataJob;
  readonly Insult: DataJob;
  readonly HaulCorpseToPublicPlace: DataJob;
  readonly InducePrisonerToEscape: DataJob;
  readonly Ignite: DataJob;
  readonly BeatFire: DataJob;
  readonly ExtinguishSelf: DataJob;
  readonly Ingest: DataJob;
  readonly LayDown: DataJob;
  readonly Lovin: DataJob;
  readonly HaulToCell: DataJob;
  readonly HaulToContainer: DataJob;
  readonly Steal: DataJob;
  readonly Kidnap: DataJob;
  readonly CarryDownedPawnToExit: DataJob;
  readonly Rescue: DataJob;
  readonly CarryToCryptosleepCasket: DataJob;
  readonly Capture: DataJob;
  readonly Arrest: DataJob;
  readonly ReleasePrisoner: DataJob;
  readonly EscortPrisonerToBed: DataJob;
  readonly TakeWoundedPrisonerToBed: DataJob;
  readonly TakeToBedToOperate: DataJob;
  readonly Slaughter: DataJob;
  readonly Milk: DataJob;
  readonly Shear: DataJob;
  readonly Tame: DataJob;
  readonly Train: DataJob;
  readonly PlaceNoCostFrame: DataJob;
  readonly FinishFrame: DataJob;
  readonly Deconstruct: DataJob;
  readonly Uninstall: DataJob;
  readonly Repair: DataJob;
  readonly FixBrokenDownBuilding: DataJob;
  readonly BuildRoof: DataJob;
  readonly RemoveRoof: DataJob;
  readonly FeedPatient: DataJob;
  readonly TendPatient: DataJob;
  readonly DeliverFood: DataJob;
  readonly DoBill: DataJob;
  readonly OperateDeepDrill: DataJob;
  readonly Clean: DataJob;
  readonly Research: DataJob;
  readonly Hunt: DataJob;
  readonly UseCommsConsole: DataJob;
  readonly Mine: DataJob;
  readonly SmoothFloor: DataJob;
  readonly RemoveFloor: DataJob;
  readonly Sow: DataJob;
  readonly Harvest: DataJob;
  readonly CutPlant: DataJob;
  readonly PrisonerFriendlyChat: DataJob;
  readonly PrisonerAttemptRecruit: DataJob;
  readonly PrisonerExecution: DataJob;
  readonly BuryCorpse: DataJob;
}


declare interface DatabaseJoyGiver {
  readonly Skygaze: DataJoyGiver;
  readonly Meditate: DataJoyGiver;
  readonly Pray: DataJoyGiver;
  readonly GoForWalk: DataJoyGiver;
  readonly BuildSnowman: DataJoyGiver;
  readonly VisitGrave: DataJoyGiver;
  readonly ViewArt: DataJoyGiver;
  readonly SocialRelax: DataJoyGiver;
  readonly VisitSickPawn: DataJoyGiver;
  readonly TakeDrug: DataJoyGiver;
  readonly EatChocolate: DataJoyGiver;
  readonly PlayHorseshoes: DataJoyGiver;
  readonly PlayHoopstone: DataJoyGiver;
  readonly PlayBilliards: DataJoyGiver;
  readonly PlayChess: DataJoyGiver;
  readonly PlayPoker: DataJoyGiver;
  readonly WatchTelevision: DataJoyGiver;
  readonly UseTelescope: DataJoyGiver;
}


declare interface DatabaseJoyKind {
  readonly Work: DataJoyKind;
  readonly Meditative: DataJoyKind;
  readonly Lewd: DataJoyKind;
  readonly Social: DataJoyKind;
  readonly Chemical: DataJoyKind;
  readonly Gluttonous: DataJoyKind;
  readonly GamingDexterity: DataJoyKind;
  readonly GamingCerebral: DataJoyKind;
  readonly Passive: DataJoyKind;
  readonly Study: DataJoyKind;
}


declare interface DatabaseMainButton {
  readonly Inspect: DataMainButton;
  readonly Architect: DataMainButton;
  readonly Work: DataMainButton;
  readonly Restrict: DataMainButton;
  readonly Assign: DataMainButton;
  readonly Animals: DataMainButton;
  readonly Research: DataMainButton;
  readonly World: DataMainButton;
  readonly History: DataMainButton;
  readonly Factions: DataMainButton;
  readonly Menu: DataMainButton;
}


declare interface DatabaseNeed {
  readonly Chemical_Alcohol: DataNeed;
  readonly Chemical_Ambrosia: DataNeed;
  readonly Chemical_GoJuice: DataNeed;
  readonly Chemical_Luciferium: DataNeed;
  readonly Chemical_Psychite: DataNeed;
  readonly Chemical_Smokeleaf: DataNeed;
  readonly Chemical_WakeUp: DataNeed;
  readonly Mood: DataNeed;
  readonly Food: DataNeed;
  readonly Rest: DataNeed;
  readonly Joy: DataNeed;
  readonly Beauty: DataNeed;
  readonly Comfort: DataNeed;
  readonly Space: DataNeed;
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


declare interface DatabaseWorkGiver {
  readonly FightFires: DataWorkGiver;
  readonly PatientGoToBedEmergencyTreatment: DataWorkGiver;
  readonly PatientGoToBedTreatment: DataWorkGiver;
  readonly DoctorTendEmergency: DataWorkGiver;
  readonly DoctorRescue: DataWorkGiver;
  readonly DoBillsMedicalHumanOperation: DataWorkGiver;
  readonly DoctorTendToHumanlikes: DataWorkGiver;
  readonly DoctorTendToSelf: DataWorkGiver;
  readonly DoctorFeedHumanlikes: DataWorkGiver;
  readonly DoBillsMedicalAnimalOperation: DataWorkGiver;
  readonly DoctorTendToAnimals: DataWorkGiver;
  readonly DoctorFeedAnimals: DataWorkGiver;
  readonly TakeToBedToOperate: DataWorkGiver;
  readonly VisitSickPawn: DataWorkGiver;
  readonly PatientGoToBedRecuperate: DataWorkGiver;
  readonly Flick: DataWorkGiver;
  readonly DoExecution: DataWorkGiver;
  readonly ReleasePrisoner: DataWorkGiver;
  readonly TakePrisonerToBed: DataWorkGiver;
  readonly FeedPrisoner: DataWorkGiver;
  readonly DeliverFoodToPrisoner: DataWorkGiver;
  readonly ChatWithPrisoner: DataWorkGiver;
  readonly Slaughter: DataWorkGiver;
  readonly Milk: DataWorkGiver;
  readonly Shear: DataWorkGiver;
  readonly Tame: DataWorkGiver;
  readonly Train: DataWorkGiver;
  readonly DoBillsCook: DataWorkGiver;
  readonly DoBillsCookCampfire: DataWorkGiver;
  readonly DoBillsButcherFlesh: DataWorkGiver;
  readonly CookFillHopper: DataWorkGiver;
  readonly DoBillsBrew: DataWorkGiver;
  readonly HunterHunt: DataWorkGiver;
  readonly FixBrokenDownBuilding: DataWorkGiver;
  readonly Repair: DataWorkGiver;
  readonly BuildRoofs: DataWorkGiver;
  readonly RemoveRoofs: DataWorkGiver;
  readonly ConstructFinishFrames: DataWorkGiver;
  readonly ConstructDeliverResourcesToFrames: DataWorkGiver;
  readonly ConstructDeliverResourcesToBlueprints: DataWorkGiver;
  readonly Deconstruct: DataWorkGiver;
  readonly Uninstall: DataWorkGiver;
  readonly ConstructRemoveFloors: DataWorkGiver;
  readonly ConstructSmoothFloors: DataWorkGiver;
  readonly GrowerHarvest: DataWorkGiver;
  readonly GrowerSow: DataWorkGiver;
  readonly Mine: DataWorkGiver;
  readonly Drill: DataWorkGiver;
  readonly PlantsCut: DataWorkGiver;
  readonly DoBillsMakeWeapons: DataWorkGiver;
  readonly DoBillsMachiningTable: DataWorkGiver;
  readonly DoBillsComponentAssemblyBench: DataWorkGiver;
  readonly DoBillsMakeApparel: DataWorkGiver;
  readonly DoBillsSculpt: DataWorkGiver;
  readonly DoBillsMedicalMechanoidOperation: DataWorkGiver;
  readonly DoBillsUseCraftingSpot: DataWorkGiver;
  readonly DoBillsRefinery: DataWorkGiver;
  readonly DoBillsProduceDrugs: DataWorkGiver;
  readonly DoBillsStonecut: DataWorkGiver;
  readonly DoBillsSmelter: DataWorkGiver;
  readonly UnloadCarriers: DataWorkGiver;
  readonly LoadTransporters: DataWorkGiver;
  readonly HelpGatheringItemsForCaravan: DataWorkGiver;
  readonly Strip: DataWorkGiver;
  readonly BuryCorpses: DataWorkGiver;
  readonly HaulCorpses: DataWorkGiver;
  readonly Open: DataWorkGiver;
  readonly Refuel: DataWorkGiver;
  readonly RearmTraps: DataWorkGiver;
  readonly DoBillsCremate: DataWorkGiver;
  readonly DoBillsHaulCampfire: DataWorkGiver;
  readonly TakeBeerOutOfFermentingBarrel: DataWorkGiver;
  readonly FillFermentingBarrel: DataWorkGiver;
  readonly HaulGeneral: DataWorkGiver;
  readonly CleanClearSnow: DataWorkGiver;
  readonly CleanFilth: DataWorkGiver;
  readonly Research: DataWorkGiver;
}


declare interface DatabaseWorkType {
  readonly Firefighter: DataWorkType;
  readonly Patient: DataWorkType;
  readonly Doctor: DataWorkType;
  readonly PatientBedRest: DataWorkType;
  readonly Flicker: DataWorkType;
  readonly Warden: DataWorkType;
  readonly Handling: DataWorkType;
  readonly Cooking: DataWorkType;
  readonly Hunting: DataWorkType;
  readonly Construction: DataWorkType;
  readonly Growing: DataWorkType;
  readonly Mining: DataWorkType;
  readonly PlantCutting: DataWorkType;
  readonly Smithing: DataWorkType;
  readonly Tailoring: DataWorkType;
  readonly Art: DataWorkType;
  readonly Crafting: DataWorkType;
  readonly Hauling: DataWorkType;
  readonly Cleaning: DataWorkType;
  readonly Research: DataWorkType;
}

