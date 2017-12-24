const WoodPlankFloor: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 0,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Heavy,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: 'Floors',
  designationHotKey: 'Misc7',
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/WoodFloor',
  color: 'rgba(108, 78, 55, 1)',
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
  burnedDef: 'BurnedWoodPlankFloor',
  terrainFilthDef: null,
  acceptTerrainSourceFilth: true,
  acceptFilth: true,
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
      value: 0.22
    },
    {
      defName: 'WorkToBuild',
      value: 85
    },
    {
      defName: 'MarketValue',
      value: 3.906
    }
  ],
  costList: [
    {
      defName: 'WoodLog',
      value: 3
    }
  ],
  walkSpeed: 1,
  removable: true,
  isCarpet: false,
  defName: 'WoodPlankFloor'
}

export default WoodPlankFloor;
