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
  defName: 'MarshyTerrain'
}

export default MarshyTerrain;
