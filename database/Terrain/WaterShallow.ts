const WaterShallow: DataTerrain = {
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
  texturePath: 'Terrain/Surfaces/WaterShallowRamp',
  color: 'rgba(255, 255, 255, 1)',
  affordances: [],
  takeFootprints: false,
  takeSplashes: true,
  avoidWander: true,
  holdSnow: false,
  extinguishesFire: true,
  changeable: false,
  smoothedTerrain: null,
  driesTo: 'Gravel',
  burnedDef: null,
  terrainFilthDef: null,
  acceptTerrainSourceFilth: false,
  acceptFilth: false,
  stats: [
    {
      defName: 'Beauty',
      value: 0
    },
    {
      defName: 'Cleanliness',
      value: 0
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
  defName: 'WaterShallow'
}

export default WaterShallow;
