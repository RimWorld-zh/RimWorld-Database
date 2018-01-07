const UseTelescope: DataJob = {
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
  joyMaxParticipants: 1,
  joyGainRate: 1.2,
  joySkill: 'Intellectual',
  joyXpPerTick: 0.004,
  joyKind: 'Study',
  defName: 'UseTelescope'
}

export default UseTelescope;
