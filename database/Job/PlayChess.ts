const PlayChess: DataJob = {
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
  joyMaxParticipants: 2,
  joyGainRate: 1,
  joySkill: 'Intellectual',
  joyXpPerTick: 0.002,
  joyKind: 'GamingCerebral',
  defName: 'PlayChess'
}

export default PlayChess;
