const CarpetRed: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 0,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Heavy,
  researchPrerequisites: [
    'CarpetMaking'
  ],
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: 'Floors',
  designationHotKey: 'Misc8',
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/Carpet',
  color: 'rgba(118, 49, 57, 1)',
  affordances: [
    TerrainAffordance.Light,
    TerrainAffordance.Heavy,
    TerrainAffordance.SmoothHard
  ],
  takeFootprints: false,
  takeSplashes: false,
  avoidWander: false,
  holdSnow: true,
  extinguishesFire: false,
  changeable: true,
  smoothedTerrain: null,
  driesTo: null,
  burnedDef: 'BurnedCarpet',
  terrainFilthDef: null,
  acceptTerrainSourceFilth: true,
  acceptFilth: true,
  stats: [
    {
      defName: 'Beauty',
      value: 2
    },
    {
      defName: 'Cleanliness',
      value: 0
    },
    {
      defName: 'Flammability',
      value: 0.32
    },
    {
      defName: 'WorkToBuild',
      value: 135
    },
    {
      defName: 'MarketValue',
      value: 10.986
    }
  ],
  costList: [
    {
      defName: 'Cloth',
      value: 7
    }
  ],
  walkSpeed: 1,
  removable: true,
  isCarpet: true,
  defName: 'CarpetRed'
}

export default CarpetRed;
