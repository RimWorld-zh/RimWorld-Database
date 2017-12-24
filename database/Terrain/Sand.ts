const Sand: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 4,
  pathCostIgnoreRepeat: true,
  fertility: 0.06,
  terrainAffordanceNeeded: TerrainAffordance.Light,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: null,
  designationHotKey: null,
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/Sand',
  color: 'rgba(255, 255, 255, 1)',
  affordances: [
    TerrainAffordance.Light,
    TerrainAffordance.Heavy,
    TerrainAffordance.Diggable
  ],
  takeFootprints: true,
  takeSplashes: false,
  avoidWander: false,
  holdSnow: true,
  extinguishesFire: false,
  changeable: true,
  smoothedTerrain: null,
  driesTo: null,
  burnedDef: null,
  terrainFilthDef: 'FilthSand',
  acceptTerrainSourceFilth: false,
  acceptFilth: true,
  stats: [
    {
      defName: 'Beauty',
      value: -1
    },
    {
      defName: 'Cleanliness',
      value: -1
    },
    {
      defName: 'Flammability',
      value: 0
    },
    {
      defName: 'WorkToBuild',
      value: 1
    },
    {
      defName: 'MarketValue',
      value: 0.0036
    }
  ],
  costList: null,
  walkSpeed: 0.7647059,
  removable: false,
  isCarpet: false,
  defName: 'Sand'
}

export default Sand;
