const HaulToContainer: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Always,
  alwaysShowWeapon: false,
  neverShowWeapon: false,
  suspendable: false,
  casualInterruptible: true,
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
  defName: 'HaulToContainer'
}

export default HaulToContainer;
