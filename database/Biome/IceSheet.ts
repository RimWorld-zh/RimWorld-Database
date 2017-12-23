const IceSheet: DataBiome = {
  animalDensity: 0.1,
  plantDensity: 0,
  diseaseMtbDays: 90,
  factionBaseSelectionWeight: 0.15,
  impassable: false,
  hasVirtualPlants: false,
  pathCost_spring: 5500,
  pathCost_summer: 5500,
  pathCost_fall: 5500,
  pathCost_winter: 5500,
  texture: 'World/Biomes/IceSheet',
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
      defName: 'Lynx',
      value: 0.01
    },
    {
      defName: 'Megasloth',
      value: 0.003
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
  defName: 'IceSheet'
}

export default IceSheet;
