const TileSandstone: DataTerrain = {
  passability: Traversability.Standable,
  pathCost: 0,
  pathCostIgnoreRepeat: true,
  fertility: 0,
  terrainAffordanceNeeded: TerrainAffordance.Heavy,
  researchPrerequisites: null,
  constructionSkillPrerequisite: 0,
  resourcesFractionWhenDeconstructed: 0.75,
  designationCategory: 'Floors',
  designationHotKey: null,
  minTechLevelToBuild: TechLevel.Undefined,
  maxTechLevelToBuild: TechLevel.Undefined,
  stats: [
    {
      defName: 'Beauty',
      value: 1
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
      value: 1100
    },
    {
      defName: 'MarketValue',
      value: 11.56
    }
  ],
  defName: 'TileSandstone'
}

export default TileSandstone;
