// Declaration for aggregation types.

declare interface AggrWorkType extends EAggr {
  readonly workTypsByPriority: ReadonlyArray<string | null> | null;
}
