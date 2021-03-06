// Declaration for language types.

declare interface LangBiome extends ELang {
}

declare interface LangDamage extends ELang {
}

declare interface LangDifficulty extends ELang {
}

declare interface LangFaction extends ELang {
  readonly fixedName: string | null;
  readonly pawnsPlural: string | null;
  readonly leaderTitle: string | null;
}

declare interface LangHair extends ELang {
}

declare interface LangJob extends ELang {
  readonly reportString: string | null;
}

declare interface LangJoyKind extends ELang {
}

declare interface LangKeyBinding extends ELang {
}

declare interface LangKeyBindingCategory extends ELang {
}

declare interface LangMainButton extends ELang {
}

declare interface LangNeed extends ELang {
}

declare interface LangResearchProject extends ELang {
  readonly descriptionDiscovered: string | null;
}

declare interface LangSkill extends ELang {
  readonly skillLabel: string | null;
}

declare interface LangStuffCategory extends ELang {
}

declare interface LangTerrain extends ELang {
}

declare interface LangWorkGiver extends ELang {
}

declare interface LangWorkType extends ELang {
  readonly labelShort: string | null;
  readonly pawnLabel: string | null;
}

declare interface LangbaseBiome {
  readonly BorealForest: LangBiome;
  readonly Tundra: LangBiome;
  readonly ColdBog: LangBiome;
  readonly IceSheet: LangBiome;
  readonly SeaIce: LangBiome;
  readonly TemperateForest: LangBiome;
  readonly TemperateSwamp: LangBiome;
  readonly Ocean: LangBiome;
  readonly Lake: LangBiome;
  readonly TropicalRainforest: LangBiome;
  readonly TropicalSwamp: LangBiome;
  readonly AridShrubland: LangBiome;
  readonly Desert: LangBiome;
  readonly ExtremeDesert: LangBiome;
}


declare interface LangbaseDamage {
  readonly Flame: LangDamage;
  readonly Burn: LangDamage;
  readonly Frostbite: LangDamage;
  readonly TornadoScratch: LangDamage;
  readonly SurgicalCut: LangDamage;
  readonly ExecutionCut: LangDamage;
  readonly Cut: LangDamage;
  readonly Crush: LangDamage;
  readonly Blunt: LangDamage;
  readonly Poke: LangDamage;
  readonly Stab: LangDamage;
  readonly Scratch: LangDamage;
  readonly Bite: LangDamage;
  readonly ToxicBite: LangDamage;
  readonly Deterioration: LangDamage;
  readonly Mining: LangDamage;
  readonly Rotting: LangDamage;
  readonly Extinguish: LangDamage;
  readonly Bomb: LangDamage;
  readonly Smoke: LangDamage;
  readonly RangedStab: LangDamage;
  readonly Bullet: LangDamage;
  readonly Arrow: LangDamage;
  readonly ArrowHighVelocity: LangDamage;
  readonly Stun: LangDamage;
  readonly EMP: LangDamage;
}


declare interface LangbaseDifficulty {
  readonly Peaceful: LangDifficulty;
  readonly VeryEasy: LangDifficulty;
  readonly Easy: LangDifficulty;
  readonly Medium: LangDifficulty;
  readonly Hard: LangDifficulty;
  readonly VeryHard: LangDifficulty;
}


declare interface LangbaseFaction {
  readonly Spacer: LangFaction;
  readonly SpacerHostile: LangFaction;
  readonly Mechanoid: LangFaction;
  readonly Insect: LangFaction;
  readonly Outlander: LangFaction;
  readonly Tribe: LangFaction;
  readonly Pirate: LangFaction;
  readonly PlayerColony: LangFaction;
  readonly PlayerTribe: LangFaction;
}


declare interface LangbaseHair {
  readonly Afro: LangHair;
  readonly Bob: LangHair;
  readonly Burgundy: LangHair;
  readonly Flowy: LangHair;
  readonly Long: LangHair;
  readonly Mohawk: LangHair;
  readonly Mop: LangHair;
  readonly Pigtails: LangHair;
  readonly Shaved: LangHair;
  readonly Spikes: LangHair;
  readonly Tuft: LangHair;
  readonly Wavy: LangHair;
  readonly BraidedKnot: LangHair;
  readonly Topdog: LangHair;
  readonly Senorita: LangHair;
  readonly ScorpionTail: LangHair;
  readonly BriefPonytail: LangHair;
  readonly Troubadour: LangHair;
  readonly Messy: LangHair;
  readonly Princess: LangHair;
  readonly Firestarter: LangHair;
  readonly GreasySwoop: LangHair;
  readonly Curly: LangHair;
  readonly Scatman: LangHair;
}


declare interface LangbaseJob {
  readonly Nuzzle: LangJob;
  readonly Mate: LangJob;
  readonly LayEgg: LangJob;
  readonly PredatorHunt: LangJob;
  readonly Maintain: LangJob;
  readonly PrepareCaravan_GatherItems: LangJob;
  readonly PrepareCaravan_GatherPawns: LangJob;
  readonly MarryAdjacentPawn: LangJob;
  readonly SpectateCeremony: LangJob;
  readonly StandAndBeSociallyActive: LangJob;
  readonly Skygaze: LangJob;
  readonly Meditate: LangJob;
  readonly Pray: LangJob;
  readonly GoForWalk: LangJob;
  readonly BuildSnowman: LangJob;
  readonly VisitGrave: LangJob;
  readonly ViewArt: LangJob;
  readonly SocialRelax: LangJob;
  readonly VisitSickPawn: LangJob;
  readonly PlayHorseshoes: LangJob;
  readonly PlayHoopstone: LangJob;
  readonly PlayChess: LangJob;
  readonly PlayBilliards: LangJob;
  readonly PlayPoker: LangJob;
  readonly WatchTelevision: LangJob;
  readonly UseTelescope: LangJob;
  readonly Goto: LangJob;
  readonly GotoSafeTemperature: LangJob;
  readonly GotoWander: LangJob;
  readonly Wait: LangJob;
  readonly WaitMaintainPosture: LangJob;
  readonly WaitDowned: LangJob;
  readonly WaitSafeTemperature: LangJob;
  readonly WaitWander: LangJob;
  readonly WaitCombat: LangJob;
  readonly AttackStatic: LangJob;
  readonly AttackMelee: LangJob;
  readonly SocialFight: LangJob;
  readonly UseVerbOnThing: LangJob;
  readonly Equip: LangJob;
  readonly TakeInventory: LangJob;
  readonly GiveToPackAnimal: LangJob;
  readonly Wear: LangJob;
  readonly RemoveApparel: LangJob;
  readonly DropEquipment: LangJob;
  readonly Strip: LangJob;
  readonly Open: LangJob;
  readonly RearmTrap: LangJob;
  readonly Refuel: LangJob;
  readonly FillFermentingBarrel: LangJob;
  readonly TakeBeerOutOfFermentingBarrel: LangJob;
  readonly UnloadInventory: LangJob;
  readonly UnloadYourInventory: LangJob;
  readonly ManTurret: LangJob;
  readonly EnterCryptosleepCasket: LangJob;
  readonly UseNeurotrainer: LangJob;
  readonly UseArtifact: LangJob;
  readonly UseItem: LangJob;
  readonly TriggerFirefoamPopper: LangJob;
  readonly ClearSnow: LangJob;
  readonly Vomit: LangJob;
  readonly Flick: LangJob;
  readonly TradeWithPawn: LangJob;
  readonly Flee: LangJob;
  readonly FleeAndCower: LangJob;
  readonly EnterTransporter: LangJob;
  readonly Resurrect: LangJob;
  readonly Insult: LangJob;
  readonly HaulCorpseToPublicPlace: LangJob;
  readonly InducePrisonerToEscape: LangJob;
  readonly Ignite: LangJob;
  readonly BeatFire: LangJob;
  readonly ExtinguishSelf: LangJob;
  readonly Ingest: LangJob;
  readonly LayDown: LangJob;
  readonly Lovin: LangJob;
  readonly HaulToCell: LangJob;
  readonly HaulToContainer: LangJob;
  readonly Steal: LangJob;
  readonly Kidnap: LangJob;
  readonly CarryDownedPawnToExit: LangJob;
  readonly Rescue: LangJob;
  readonly CarryToCryptosleepCasket: LangJob;
  readonly Capture: LangJob;
  readonly Arrest: LangJob;
  readonly ReleasePrisoner: LangJob;
  readonly EscortPrisonerToBed: LangJob;
  readonly TakeWoundedPrisonerToBed: LangJob;
  readonly TakeToBedToOperate: LangJob;
  readonly Slaughter: LangJob;
  readonly Milk: LangJob;
  readonly Shear: LangJob;
  readonly Tame: LangJob;
  readonly Train: LangJob;
  readonly PlaceNoCostFrame: LangJob;
  readonly FinishFrame: LangJob;
  readonly Deconstruct: LangJob;
  readonly Uninstall: LangJob;
  readonly Repair: LangJob;
  readonly FixBrokenDownBuilding: LangJob;
  readonly BuildRoof: LangJob;
  readonly RemoveRoof: LangJob;
  readonly FeedPatient: LangJob;
  readonly TendPatient: LangJob;
  readonly DeliverFood: LangJob;
  readonly DoBill: LangJob;
  readonly OperateDeepDrill: LangJob;
  readonly Clean: LangJob;
  readonly Research: LangJob;
  readonly Hunt: LangJob;
  readonly UseCommsConsole: LangJob;
  readonly Mine: LangJob;
  readonly SmoothFloor: LangJob;
  readonly RemoveFloor: LangJob;
  readonly Sow: LangJob;
  readonly Harvest: LangJob;
  readonly CutPlant: LangJob;
  readonly PrisonerFriendlyChat: LangJob;
  readonly PrisonerAttemptRecruit: LangJob;
  readonly PrisonerExecution: LangJob;
  readonly BuryCorpse: LangJob;
}


declare interface LangbaseJoyKind {
  readonly Work: LangJoyKind;
  readonly Meditative: LangJoyKind;
  readonly Lewd: LangJoyKind;
  readonly Social: LangJoyKind;
  readonly Chemical: LangJoyKind;
  readonly Gluttonous: LangJoyKind;
  readonly GamingDexterity: LangJoyKind;
  readonly GamingCerebral: LangJoyKind;
  readonly Passive: LangJoyKind;
  readonly Study: LangJoyKind;
}


declare interface LangbaseKeyBinding {
  readonly MapDollyUp: LangKeyBinding;
  readonly MapDollyDown: LangKeyBinding;
  readonly MapDollyLeft: LangKeyBinding;
  readonly MapDollyRight: LangKeyBinding;
  readonly MapZoomIn: LangKeyBinding;
  readonly MapZoomOut: LangKeyBinding;
  readonly TakeScreenshot: LangKeyBinding;
  readonly ToggleScreenshotMode: LangKeyBinding;
  readonly SelectNextInCell: LangKeyBinding;
  readonly TogglePause: LangKeyBinding;
  readonly TimeSpeedNormal: LangKeyBinding;
  readonly TimeSpeedFast: LangKeyBinding;
  readonly TimeSpeedSuperfast: LangKeyBinding;
  readonly TimeSpeedUltrafast: LangKeyBinding;
  readonly PreviousColonist: LangKeyBinding;
  readonly NextColonist: LangKeyBinding;
  readonly Misc1: LangKeyBinding;
  readonly Misc2: LangKeyBinding;
  readonly Misc3: LangKeyBinding;
  readonly Misc4: LangKeyBinding;
  readonly Misc5: LangKeyBinding;
  readonly Misc6: LangKeyBinding;
  readonly Misc7: LangKeyBinding;
  readonly Misc8: LangKeyBinding;
  readonly Misc9: LangKeyBinding;
  readonly Misc10: LangKeyBinding;
  readonly Misc11: LangKeyBinding;
  readonly Misc12: LangKeyBinding;
  readonly CommandTogglePower: LangKeyBinding;
  readonly CommandItemForbid: LangKeyBinding;
  readonly CommandColonistDraft: LangKeyBinding;
  readonly DesignatorCancel: LangKeyBinding;
  readonly DesignatorDeconstruct: LangKeyBinding;
  readonly DesignatorRotateLeft: LangKeyBinding;
  readonly DesignatorRotateRight: LangKeyBinding;
  readonly ModifierIncrement10x: LangKeyBinding;
  readonly ModifierIncrement100x: LangKeyBinding;
  readonly QueueOrder: LangKeyBinding;
  readonly TickOnce: LangKeyBinding;
  readonly ToggleGodMode: LangKeyBinding;
  readonly ToggleDebugLog: LangKeyBinding;
  readonly ToggleDebugActionsMenu: LangKeyBinding;
  readonly ToggleDebugLogMenu: LangKeyBinding;
  readonly ToggleDebugInspector: LangKeyBinding;
  readonly ToggleDebugSettingsMenu: LangKeyBinding;
  readonly MainTab_Architect: LangKeyBinding;
  readonly MainTab_Work: LangKeyBinding;
  readonly MainTab_Restrict: LangKeyBinding;
  readonly MainTab_Assign: LangKeyBinding;
  readonly MainTab_Animals: LangKeyBinding;
  readonly MainTab_Research: LangKeyBinding;
  readonly MainTab_World: LangKeyBinding;
  readonly MainTab_History: LangKeyBinding;
  readonly MainTab_Factions: LangKeyBinding;
}


declare interface LangbaseKeyBindingCategory {
  readonly GameMapCamera: LangKeyBindingCategory;
  readonly Game: LangKeyBindingCategory;
  readonly SelectionMisc: LangKeyBindingCategory;
  readonly SelectionSpecial: LangKeyBindingCategory;
  readonly Architect: LangKeyBindingCategory;
  readonly MainTabs: LangKeyBindingCategory;
  readonly Modifiers: LangKeyBindingCategory;
  readonly Development: LangKeyBindingCategory;
  readonly Architect_Orders: LangKeyBindingCategory;
  readonly Architect_Zone: LangKeyBindingCategory;
  readonly Architect_Structure: LangKeyBindingCategory;
  readonly Architect_Production: LangKeyBindingCategory;
  readonly Architect_Furniture: LangKeyBindingCategory;
  readonly Architect_Power: LangKeyBindingCategory;
  readonly Architect_Security: LangKeyBindingCategory;
  readonly Architect_Misc: LangKeyBindingCategory;
  readonly Architect_Floors: LangKeyBindingCategory;
  readonly Architect_Joy: LangKeyBindingCategory;
  readonly Architect_Ship: LangKeyBindingCategory;
  readonly Architect_Temperature: LangKeyBindingCategory;
}


declare interface LangbaseMainButton {
  readonly Inspect: LangMainButton;
  readonly Architect: LangMainButton;
  readonly Work: LangMainButton;
  readonly Restrict: LangMainButton;
  readonly Assign: LangMainButton;
  readonly Animals: LangMainButton;
  readonly Research: LangMainButton;
  readonly World: LangMainButton;
  readonly History: LangMainButton;
  readonly Factions: LangMainButton;
  readonly Menu: LangMainButton;
}


declare interface LangbaseNeed {
  readonly Chemical_Alcohol: LangNeed;
  readonly Chemical_Ambrosia: LangNeed;
  readonly Chemical_GoJuice: LangNeed;
  readonly Chemical_Luciferium: LangNeed;
  readonly Chemical_Psychite: LangNeed;
  readonly Chemical_Smokeleaf: LangNeed;
  readonly Chemical_WakeUp: LangNeed;
  readonly Mood: LangNeed;
  readonly Food: LangNeed;
  readonly Rest: LangNeed;
  readonly Joy: LangNeed;
  readonly Beauty: LangNeed;
  readonly Comfort: LangNeed;
  readonly Space: LangNeed;
}


declare interface LangbaseResearchProject {
  readonly RecurveBow: LangResearchProject;
  readonly Pemmican: LangResearchProject;
  readonly PassiveCooler: LangResearchProject;
  readonly Devilstrand: LangResearchProject;
  readonly PsychoidBrewing: LangResearchProject;
  readonly Brewing: LangResearchProject;
  readonly Bedrolls: LangResearchProject;
  readonly Beds: LangResearchProject;
  readonly CarpetMaking: LangResearchProject;
  readonly Smithing: LangResearchProject;
  readonly Stonecutting: LangResearchProject;
  readonly ComplexClothing: LangResearchProject;
  readonly DrugProduction: LangResearchProject;
  readonly Electricity: LangResearchProject;
  readonly PsychiteRefining: LangResearchProject;
  readonly WakeUpProduction: LangResearchProject;
  readonly GoJuiceProduction: LangResearchProject;
  readonly PenoxycylineProduction: LangResearchProject;
  readonly LongBlades: LangResearchProject;
  readonly Greatbows: LangResearchProject;
  readonly Batteries: LangResearchProject;
  readonly Refining: LangResearchProject;
  readonly NutrientPaste: LangResearchProject;
  readonly SolarPanels: LangResearchProject;
  readonly AirConditioning: LangResearchProject;
  readonly Autodoors: LangResearchProject;
  readonly Hydroponics: LangResearchProject;
  readonly ElectricSmelting: LangResearchProject;
  readonly PackagedSurvivalMeal: LangResearchProject;
  readonly ElectricCremation: LangResearchProject;
  readonly ColoredLights: LangResearchProject;
  readonly Machining: LangResearchProject;
  readonly IEDs: LangResearchProject;
  readonly IEDIncendiary: LangResearchProject;
  readonly Mortars: LangResearchProject;
  readonly Gunsmithing: LangResearchProject;
  readonly BlowbackOperation: LangResearchProject;
  readonly GasOperation: LangResearchProject;
  readonly PrecisionRifling: LangResearchProject;
  readonly SmokepopBelt: LangResearchProject;
  readonly MicroelectronicsBasics: LangResearchProject;
  readonly TubeTelevision: LangResearchProject;
  readonly GunTurrets: LangResearchProject;
  readonly Firefoam: LangResearchProject;
  readonly MoisturePump: LangResearchProject;
  readonly GeothermalPower: LangResearchProject;
  readonly HospitalBed: LangResearchProject;
  readonly TransportPod: LangResearchProject;
  readonly MedicineProduction: LangResearchProject;
  readonly MultiAnalyzer: LangResearchProject;
  readonly LongRangeMineralScanner: LangResearchProject;
  readonly GroundPenetratingScanner: LangResearchProject;
  readonly DeepDrilling: LangResearchProject;
  readonly VitalsMonitor: LangResearchProject;
  readonly ComponentAssembly: LangResearchProject;
  readonly MultibarrelWeapons: LangResearchProject;
  readonly Cryptosleep: LangResearchProject;
  readonly PoweredArmor: LangResearchProject;
  readonly ShieldBelt: LangResearchProject;
  readonly ChargedShot: LangResearchProject;
  readonly ShipBasics: LangResearchProject;
  readonly ShipCryptosleep: LangResearchProject;
  readonly ShipReactor: LangResearchProject;
  readonly ShipEngine: LangResearchProject;
  readonly ShipComputerCore: LangResearchProject;
  readonly ShipSensorCluster: LangResearchProject;
}


declare interface LangbaseSkill {
  readonly Shooting: LangSkill;
  readonly Melee: LangSkill;
  readonly Social: LangSkill;
  readonly Animals: LangSkill;
  readonly Medicine: LangSkill;
  readonly Cooking: LangSkill;
  readonly Construction: LangSkill;
  readonly Growing: LangSkill;
  readonly Mining: LangSkill;
  readonly Artistic: LangSkill;
  readonly Crafting: LangSkill;
  readonly Intellectual: LangSkill;
}


declare interface LangbaseStuffCategory {
  readonly Metallic: LangStuffCategory;
  readonly Woody: LangStuffCategory;
  readonly Stony: LangStuffCategory;
  readonly Fabric: LangStuffCategory;
  readonly Leathery: LangStuffCategory;
}


declare interface LangbaseTerrain {
  readonly Concrete: LangTerrain;
  readonly PavedTile: LangTerrain;
  readonly WoodPlankFloor: LangTerrain;
  readonly MetalTile: LangTerrain;
  readonly SilverTile: LangTerrain;
  readonly GoldTile: LangTerrain;
  readonly SterileTile: LangTerrain;
  readonly CarpetRed: LangTerrain;
  readonly CarpetGreen: LangTerrain;
  readonly CarpetBlue: LangTerrain;
  readonly CarpetCream: LangTerrain;
  readonly CarpetDark: LangTerrain;
  readonly BurnedWoodPlankFloor: LangTerrain;
  readonly BurnedCarpet: LangTerrain;
  readonly TileSandstone: LangTerrain;
  readonly TileGranite: LangTerrain;
  readonly TileLimestone: LangTerrain;
  readonly TileSlate: LangTerrain;
  readonly TileMarble: LangTerrain;
  readonly FlagstoneSandstone: LangTerrain;
  readonly FlagstoneGranite: LangTerrain;
  readonly FlagstoneLimestone: LangTerrain;
  readonly FlagstoneSlate: LangTerrain;
  readonly FlagstoneMarble: LangTerrain;
  readonly Sand: LangTerrain;
  readonly Soil: LangTerrain;
  readonly MarshyTerrain: LangTerrain;
  readonly SoilRich: LangTerrain;
  readonly Mud: LangTerrain;
  readonly Marsh: LangTerrain;
  readonly Gravel: LangTerrain;
  readonly MossyTerrain: LangTerrain;
  readonly Ice: LangTerrain;
  readonly BrokenAsphalt: LangTerrain;
  readonly PackedDirt: LangTerrain;
  readonly Underwall: LangTerrain;
  readonly WaterDeep: LangTerrain;
  readonly WaterOceanDeep: LangTerrain;
  readonly WaterMovingDeep: LangTerrain;
  readonly WaterShallow: LangTerrain;
  readonly WaterOceanShallow: LangTerrain;
  readonly WaterMovingShallow: LangTerrain;
  readonly Sandstone_Rough: LangTerrain;
  readonly Sandstone_RoughHewn: LangTerrain;
  readonly Sandstone_Smooth: LangTerrain;
  readonly Granite_Rough: LangTerrain;
  readonly Granite_RoughHewn: LangTerrain;
  readonly Granite_Smooth: LangTerrain;
  readonly Limestone_Rough: LangTerrain;
  readonly Limestone_RoughHewn: LangTerrain;
  readonly Limestone_Smooth: LangTerrain;
  readonly Slate_Rough: LangTerrain;
  readonly Slate_RoughHewn: LangTerrain;
  readonly Slate_Smooth: LangTerrain;
  readonly Marble_Rough: LangTerrain;
  readonly Marble_RoughHewn: LangTerrain;
  readonly Marble_Smooth: LangTerrain;
}


declare interface LangbaseWorkGiver {
}


declare interface LangbaseWorkType {
  readonly Firefighter: LangWorkType;
  readonly Patient: LangWorkType;
  readonly Doctor: LangWorkType;
  readonly PatientBedRest: LangWorkType;
  readonly Flicker: LangWorkType;
  readonly Warden: LangWorkType;
  readonly Handling: LangWorkType;
  readonly Cooking: LangWorkType;
  readonly Hunting: LangWorkType;
  readonly Construction: LangWorkType;
  readonly Growing: LangWorkType;
  readonly Mining: LangWorkType;
  readonly PlantCutting: LangWorkType;
  readonly Smithing: LangWorkType;
  readonly Tailoring: LangWorkType;
  readonly Art: LangWorkType;
  readonly Crafting: LangWorkType;
  readonly Hauling: LangWorkType;
  readonly Cleaning: LangWorkType;
  readonly Research: LangWorkType;
}

