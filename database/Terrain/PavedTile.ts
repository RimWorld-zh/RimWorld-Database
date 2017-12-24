const PavedTile: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 0,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Heavy,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: 'Floors',
  designationHotKey: 'Misc5',
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/PavedTile',
  color: 'rgba(255, 255, 255, 1)',
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
  burnedDef: null,
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
      value: 0
    },
    {
      defName: 'WorkToBuild',
      value: 400
    },
    {
      defName: 'MarketValue',
      value: 5.24
    }
  ],
  costList: [
    {
      defName: 'Steel',
      value: 2
    }
  ],
  walkSpeed: 1,
  removable: true,
  isCarpet: false,
  defName: 'PavedTile'
}

export default PavedTile;
