const WatchTelevision: DataJob = {
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
  joyDuration: 4000,
  joyMaxParticipants: 8,
  joyGainRate: 1.2,
  joySkill: null,
  joyXpPerTick: 0,
  joyKind: 'Passive',
  defName: 'WatchTelevision'
}

export default WatchTelevision;
