const Slate_Rough: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 1,
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
  texturePath: 'Terrain/Surfaces/RoughStone',
  color: 'rgba(70, 70, 70, 1)',
  affordances: [
    TerrainAffordance.Light,
    TerrainAffordance.Heavy,
    TerrainAffordance.SmoothableStone
  ],
  takeFootprints: false,
  takeSplashes: false,
  avoidWander: false,
  holdSnow: true,
  extinguishesFire: false,
  changeable: true,
  smoothedTerrain: 'Slate_Smooth',
  driesTo: null,
  burnedDef: null,
  terrainFilthDef: null,
  acceptTerrainSourceFilth: false,
  acceptFilth: true,
  stats: [
    {
      defName: 'Beauty',
      value: -1
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
  walkSpeed: 0.9285714,
  removable: false,
  isCarpet: false,
  defName: 'Slate_Rough'
}

export default Slate_Rough;
