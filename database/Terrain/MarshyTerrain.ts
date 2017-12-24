const MarshyTerrain: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 15,
  pathCostIgnoreRepeat: true,
  fertility: 0.7,
  terrainAffordanceNeeded: TerrainAffordance.Light,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: null,
  designationHotKey: null,
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  texturePath: 'Terrain/Surfaces/MarshyTerrain',
  color: 'rgba(255, 255, 255, 1)',
  affordances: [
    TerrainAffordance.Light,
    TerrainAffordance.GrowSoil,
    TerrainAffordance.Diggable
  ],
  takeFootprints: true,
  takeSplashes: false,
  avoidWander: false,
  holdSnow: true,
  extinguishesFire: false,
  changeable: true,
  smoothedTerrain: null,
  driesTo: 'Soil',
  burnedDef: null,
  terrainFilthDef: 'FilthDirt',
  acceptTerrainSourceFilth: false,
  acceptFilth: true,
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
  walkSpeed: 0.4642857,
  removable: false,
  isCarpet: false,
  defName: 'MarshyTerrain'
}

export default MarshyTerrain;
