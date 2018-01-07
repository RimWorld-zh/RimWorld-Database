const GoForWalk: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Always,
  alwaysShowWeapon: false,
  neverShowWeapon: false,
  suspendable: true,
  casualInterruptible: true,
  collideWithPawns: false,
  isIdle: false,
  taleOnCompletion: null,
  makeTargetPrisoner: false,
  joyDuration: 8000,
  joyMaxParticipants: 1,
  joyGainRate: 1,
  joySkill: null,
  joyXpPerTick: 0,
  joyKind: 'Meditative',
  defName: 'GoForWalk'
}

export default GoForWalk;
