// Declaration for basic model types.
declare interface ReadonlyDict<T> {
  readonly [key: string]: T
}

declare interface FloatDefValue {
  readonly defName: string | null;
  readonly value: number;
}

declare interface FloatRange {
  readonly min: number;
  readonly max: number;
}

declare interface IntDefValue {
  readonly defName: string | null;
  readonly value: number;
}
