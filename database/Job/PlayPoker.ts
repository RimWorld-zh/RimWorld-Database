const PlayPoker: DataJob = {
  playerInterruptible: true,
  checkOverrideOnDamage: CheckJobOverrideOnDamageMode.Always,
  alwaysShowWeapon: false,
  neverShowWeapon: false,
  suspendable: true,
  casualInterruptible: true,
  collideWithPawns: false,
  isIdle: false,
  taleOnCompletion: 'PlayedGame',
  makeTargetPrisoner: false,
  joyDuration: 4000,
  joyMaxParticipants: 4,
  joyGainRate: 1.3,
  joySkill: 'Intellectual',
  joyXpPerTick: 0.004,
  joyKind: 'GamingCerebral',
  defName: 'PlayPoker'
}

export default PlayPoker;
