const Steal: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Never,
  alwaysShowWeapon: false,
  neverShowWeapon: false,
  suspendable: true,
  casualInterruptible: false,
  collideWithPawns: false,
  isIdle: false,
  taleOnCompletion: null,
  makeTargetPrisoner: false,
  joyDuration: 4000,
  joyMaxParticipants: 1,
  joyGainRate: 1,
  joySkill: null,
  joyXpPerTick: 0,
  joyKind: null,
  defName: 'Steal'
}

export default Steal;
