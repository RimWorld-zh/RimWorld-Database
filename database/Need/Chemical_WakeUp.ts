const Chemical_WakeUp: DataNeed = {
  minIntelligence: Intelligence.Animal,
  colonistAndPrisonersOnly: false,
  colonistsOnly: false,
  onlyIfCausedByHediff: true,
  neverOnPrisoner: false,
  showOnNeedList: true,
  baseLevel: 0.5,
  major: false,
  listPriority: 40,
  tutorHighlightTag: 'NeedAddiction',
  showForCaravanMembers: true,
  scaleBar: false,
  fallPerDay: 0.5,
  seekerRisePerHour: 0,
  seekerFallPerHour: 0,
  freezeWhileSleeping: false,
  defName: 'Chemical_WakeUp'
}

export default Chemical_WakeUp;
