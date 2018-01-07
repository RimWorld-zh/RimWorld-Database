const CarryToCryptosleepCasket: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Always,
  alwaysShowWeapon: false,
  neverShowWeapon: false,
  suspendable: true,
  casualInterruptible: false,
  collideWithPawns: false,
  isIdle: false,
  taleOnCompletion: 'PutIntoCryptosleep',
  makeTargetPrisoner: false,
  joyDuration: 4000,
  joyMaxParticipants: 1,
  joyGainRate: 1,
  joySkill: null,
  joyXpPerTick: 0,
  joyKind: null,
  defName: 'CarryToCryptosleepCasket'
}

export default CarryToCryptosleepCasket;