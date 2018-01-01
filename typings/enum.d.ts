// Declaration for enum types.

declare enum HairGender {
  Male,
  MaleUsually,
  Any,
  FemaleUsually,
  Female,
}

declare enum JobTag {
  Misc,
  MiscWork,
  Fieldwork,
  Idle,
  InMentalState,
  SatisfyingNeeds,
  DraftedOrder,
  UnspecifiedLordDuty,
  WaitingForOthersToFinishGatheringItems,
  TuckedIntoBed,
  RestingForMedicalReasons,
  ChangingApparel,
  Escaping,
  JoiningCaravan,
  TrainedAnimalBehavior,
  UnloadingOwnInventory,
}

declare enum TechLevel {
  Undefined,
  Animal,
  Neolithic,
  Medieval,
  Industrial,
  Spacer,
  Ultra,
  Transcendent,
}

declare enum TerrainAffordance {
  Undefined,
  Light,
  Heavy,
  GrowSoil,
  Diggable,
  SmoothHard,
  SmoothableStone,
}

declare enum Traversability {
  Standable,
  PassThroughOnly,
  Impassable,
}

declare enum WorkTags {
  None = 0x0,
  ManualDumb = 0x2,
  ManualSkilled = 0x4,
  Violent = 0x8,
  Caring = 0x10,
  Social = 0x20,
  Intellectual = 0x40,
  Animals = 0x80,
  Artistic = 0x100,
  Crafting = 0x200,
  Cooking = 0x400,
  Firefighting = 0x800,
  Cleaning = 0x1000,
  Hauling = 0x2000,
  PlantWork = 0x4000,
  Mining = 0x8000,
}
