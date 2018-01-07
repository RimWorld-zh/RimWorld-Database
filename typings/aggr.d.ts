// Declaration for aggregation types.

declare interface AggrSkill extends EAggr {
  readonly intervalTicks: number;
  readonly minLevel: number;
  readonly maxLevel: number;
  readonly maxFullRateXpPerDay: number;
  readonly masterSkillThreshold: number;
  readonly saturatedLearningFactor: number;
  readonly learnFactorPassionNone: number;
  readonly learnFactorPassionMinor: number;
  readonly learnFactorPassionMajor: number;
  readonly joyGainFactorPassionNone: number;
  readonly joyGainFactorPassionMinor: number;
  readonly joyGainFactorPassionMajor: number;
  readonly xpRequirements: ReadonlyArray<number> | null;
  readonly xpLosses: ReadonlyArray<number> | null;
}

declare interface AggrWorkType extends EAggr {
  readonly workTypsByPriority: ReadonlyArray<string | null> | null;
}
