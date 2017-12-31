// Declaration for base types.

declare interface EObj {
  readonly defName: string | null;
}

declare interface EData extends EObj {
}

declare interface ELang extends EObj {
  readonly label: string | null;
  readonly description: string | null;
}

declare interface EAggr {
}
