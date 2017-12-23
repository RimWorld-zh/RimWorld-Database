const SeaIce: DataBiome = {
  animalDensity: 0.05,
  plantDensity: 0,
  diseaseMtbDays: 80,
  factionBaseSelectionWeight: 0.01,
  impassable: false,
  hasVirtualPlants: false,
  pathCost_spring: 11000,
  pathCost_summer: 11000,
  pathCost_fall: 11000,
  pathCost_winter: 11000,
  texture: 'World/Biomes/IceSheetOcean',
  wildAnimals: [
    {
      defName: 'Muffalo',
      value: 0.01333333
    },
    {
      defName: 'PolarBear',
      value: 0.08
    },
    {
      defName: 'Snowhare',
      value: 1
    },
    {
      defName: 'WolfArctic',
      value: 0.02
    },
    {
      defName: 'FoxArctic',
      value: 0.02
    }
  ],
  wildPlants: [],
  diseases: [
    {
      defName: 'Flu',
      value: 100
    },
    {
      defName: 'Plague',
      value: 80
    },
    {
      defName: 'FibrousMechanites',
      value: 30
    },
    {
      defName: 'SensoryMechanites',
      value: 30
    }
  ],
  defName: 'SeaIce'
}

export default SeaIce;
