const WaitCombat: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Always,
  alwaysShowWeapon: true,
  neverShowWeapon: false,
  suspendable: false,
  casualInterruptible: true,
  collideWithPawns: false,
  isIdle: true,
  taleOnCompletion: null,
  makeTargetPrisoner: false,
  joyDuration: 4000,
  joyMaxParticipants: 1,
  joyGainRate: 1,
  joySkill: null,
  joyXpPerTick: 0,
  joyKind: null,
  defName: 'WaitCombat'
}

export default WaitCombat;
