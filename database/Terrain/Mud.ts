const Mud: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 12,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Light,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: null,
  designationHotKey: null,
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/Mud',
  color: 'rgba(255, 255, 255, 1)',
  affordances: [],
  takeFootprints: true,
  takeSplashes: false,
  avoidWander: true,
  holdSnow: true,
  extinguishesFire: false,
  changeable: true,
  smoothedTerrain: null,
  driesTo: 'Soil',
  burnedDef: null,
  terrainFilthDef: 'FilthDirt',
  acceptTerrainSourceFilth: false,
  acceptFilth: false,
  stats: [
    {
      defName: 'Beauty',
      value: -2
    },
    {
      defName: 'Cleanliness',
      value: -2
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
  walkSpeed: 0.52,
  removable: false,
  isCarpet: false,
  defName: 'Mud'
}

export default Mud;
