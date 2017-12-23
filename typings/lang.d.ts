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

declare interface LangTerrain extends ELang {
}

declare interface LangbaseBiome {
  readonly AridShrubland: LangBiome;
  readonly BorealForest: LangBiome;
  readonly ColdBog: LangBiome;
  readonly Desert: LangBiome;
  readonly ExtremeDesert: LangBiome;
  readonly IceSheet: LangBiome;
  readonly Lake: LangBiome;
  readonly Ocean: LangBiome;
  readonly SeaIce: LangBiome;
  readonly TemperateForest: LangBiome;
  readonly TemperateSwamp: LangBiome;
  readonly TropicalRainforest: LangBiome;
  readonly TropicalSwamp: LangBiome;
  readonly Tundra: LangBiome;
}


declare interface LangbaseDamage {
  readonly Arrow: LangDamage;
  readonly ArrowHighVelocity: LangDamage;
  readonly Bite: LangDamage;
  readonly Blunt: LangDamage;
  readonly Bomb: LangDamage;
  readonly Bullet: LangDamage;
  readonly Burn: LangDamage;
  readonly Crush: LangDamage;
  readonly Cut: LangDamage;
  readonly Deterioration: LangDamage;
  readonly EMP: LangDamage;
  readonly ExecutionCut: LangDamage;
  readonly Extinguish: LangDamage;
  readonly Flame: LangDamage;
  readonly Frostbite: LangDamage;
  readonly Mining: LangDamage;
  readonly Poke: LangDamage;
  readonly RangedStab: LangDamage;
  readonly Rotting: LangDamage;
  readonly Scratch: LangDamage;
  readonly Smoke: LangDamage;
  readonly Stab: LangDamage;
  readonly Stun: LangDamage;
  readonly SurgicalCut: LangDamage;
  readonly TornadoScratch: LangDamage;
  readonly ToxicBite: LangDamage;
}


declare interface LangbaseDifficulty {
  readonly Easy: LangDifficulty;
  readonly Hard: LangDifficulty;
  readonly Medium: LangDifficulty;
  readonly Peaceful: LangDifficulty;
  readonly VeryEasy: LangDifficulty;
  readonly VeryHard: LangDifficulty;
}


declare interface LangbaseFaction {
  readonly Insect: LangFaction;
  readonly Mechanoid: LangFaction;
  readonly Outlander: LangFaction;
  readonly Pirate: LangFaction;
  readonly PlayerColony: LangFaction;
  readonly PlayerTribe: LangFaction;
  readonly Spacer: LangFaction;
  readonly SpacerHostile: LangFaction;
  readonly Tribe: LangFaction;
}


declare interface LangbaseHair {
  readonly Afro: LangHair;
  readonly Bob: LangHair;
  readonly BraidedKnot: LangHair;
  readonly BriefPonytail: LangHair;
  readonly Burgundy: LangHair;
  readonly Curly: LangHair;
  readonly Firestarter: LangHair;
  readonly Flowy: LangHair;
  readonly GreasySwoop: LangHair;
  readonly Long: LangHair;
  readonly Messy: LangHair;
  readonly Mohawk: LangHair;
  readonly Mop: LangHair;
  readonly Pigtails: LangHair;
  readonly Princess: LangHair;
  readonly Scatman: LangHair;
  readonly ScorpionTail: LangHair;
  readonly Senorita: LangHair;
  readonly Shaved: LangHair;
  readonly Spikes: LangHair;
  readonly Topdog: LangHair;
  readonly Troubadour: LangHair;
  readonly Tuft: LangHair;
  readonly Wavy: LangHair;
}


declare interface LangbaseTerrain {
  readonly BrokenAsphalt: LangTerrain;
  readonly BurnedCarpet: LangTerrain;
  readonly BurnedWoodPlankFloor: LangTerrain;
  readonly CarpetBlue: LangTerrain;
  readonly CarpetCream: LangTerrain;
  readonly CarpetDark: LangTerrain;
  readonly CarpetGreen: LangTerrain;
  readonly CarpetRed: LangTerrain;
  readonly Concrete: LangTerrain;
  readonly FlagstoneGranite: LangTerrain;
  readonly FlagstoneLimestone: LangTerrain;
  readonly FlagstoneMarble: LangTerrain;
  readonly FlagstoneSandstone: LangTerrain;
  readonly FlagstoneSlate: LangTerrain;
  readonly GoldTile: LangTerrain;
  readonly Granite_Rough: LangTerrain;
  readonly Granite_RoughHewn: LangTerrain;
  readonly Granite_Smooth: LangTerrain;
  readonly Gravel: LangTerrain;
  readonly Ice: LangTerrain;
  readonly Limestone_Rough: LangTerrain;
  readonly Limestone_RoughHewn: LangTerrain;
  readonly Limestone_Smooth: LangTerrain;
  readonly Marble_Rough: LangTerrain;
  readonly Marble_RoughHewn: LangTerrain;
  readonly Marble_Smooth: LangTerrain;
  readonly Marsh: LangTerrain;
  readonly MarshyTerrain: LangTerrain;
  readonly MetalTile: LangTerrain;
  readonly MossyTerrain: LangTerrain;
  readonly Mud: LangTerrain;
  readonly PackedDirt: LangTerrain;
  readonly PavedTile: LangTerrain;
  readonly Sand: LangTerrain;
  readonly Sandstone_Rough: LangTerrain;
  readonly Sandstone_RoughHewn: LangTerrain;
  readonly Sandstone_Smooth: LangTerrain;
  readonly SilverTile: LangTerrain;
  readonly Slate_Rough: LangTerrain;
  readonly Slate_RoughHewn: LangTerrain;
  readonly Slate_Smooth: LangTerrain;
  readonly Soil: LangTerrain;
  readonly SoilRich: LangTerrain;
  readonly SterileTile: LangTerrain;
  readonly TileGranite: LangTerrain;
  readonly TileLimestone: LangTerrain;
  readonly TileMarble: LangTerrain;
  readonly TileSandstone: LangTerrain;
  readonly TileSlate: LangTerrain;
  readonly Underwall: LangTerrain;
  readonly WaterDeep: LangTerrain;
  readonly WaterMovingDeep: LangTerrain;
  readonly WaterMovingShallow: LangTerrain;
  readonly WaterOceanDeep: LangTerrain;
  readonly WaterOceanShallow: LangTerrain;
  readonly WaterShallow: LangTerrain;
  readonly WoodPlankFloor: LangTerrain;
}

