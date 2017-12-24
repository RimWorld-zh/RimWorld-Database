const SterileTile: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 0,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Heavy,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 8,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: 'Floors',
  designationHotKey: 'Misc4',
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/GenericFloorTile',
  color: 'rgba(181, 181, 181, 1)',
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
      value: 0.6
    },
    {
      defName: 'Flammability',
      value: 0
    },
    {
      defName: 'WorkToBuild',
      value: 1650
    },
    {
      defName: 'MarketValue',
      value: 26.64
    }
  ],
  costList: [
    {
      defName: 'Steel',
      value: 3
    },
    {
      defName: 'Silver',
      value: 15
    }
  ],
  walkSpeed: 1,
  removable: true,
  isCarpet: false,
  defName: 'SterileTile'
}

export default SterileTile;
