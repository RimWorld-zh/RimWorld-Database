const PlayHoopstone: DataJob = {
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
  joyMaxParticipants: 3,
  joyGainRate: 1,
  joySkill: 'Shooting',
  joyXpPerTick: 0.003,
  joyKind: 'GamingDexterity',
  defName: 'PlayHoopstone'
}

export default PlayHoopstone;
