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
  defName: 'SterileTile'
}

export default SterileTile;
