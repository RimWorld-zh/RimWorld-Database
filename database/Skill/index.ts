import Shooting from './Shooting';
import Melee from './Melee';
import Social from './Social';
import Animals from './Animals';
import Medicine from './Medicine';
import Cooking from './Cooking';
import Construction from './Construction';
import Growing from './Growing';
import Mining from './Mining';
import Artistic from './Artistic';
import Crafting from './Crafting';
import Intellectual from './Intellectual';

const Skill: DatabaseSkill = {
  Shooting,
  Melee,
  Social,
  Animals,
  Medicine,
  Cooking,
  Construction,
  Growing,
  Mining,
  Artistic,
  Crafting,
  Intellectual,
};

export const aggregationSkill: AggrSkill = {
  intervalTicks: 200,
  minLevel: 0,
  maxLevel: 20,
  maxFullRateXpPerDay: 4000,
  masterSkillThreshold: 14,
  saturatedLearningFactor: 0.2,
  learnFactorPassionNone: 0.35,
  learnFactorPassionMinor: 1,
  learnFactorPassionMajor: 1.5,
  joyGainFactorPassionNone: 0,
  joyGainFactorPassionMinor: 1.99999994947575E-05,
  joyGainFactorPassionMajor: 3.9999998989515E-05,
  xpRequirements: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000, 30000],
  xpLosses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.1, -0.2, -0.4, -0.6, -1, -1.8, -2.8, -4, -6, -8, -12]
}

export default Skill;
