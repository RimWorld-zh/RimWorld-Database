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
  defName: 'WoodPlankFloor'
}

export default WoodPlankFloor;
