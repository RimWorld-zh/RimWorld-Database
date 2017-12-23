const ExtremeDesert: DataBiome = {
  animalDensity: 0.05,
  plantDensity: 0.002,
  diseaseMtbDays: 90,
  factionBaseSelectionWeight: 0.42,
  impassable: false,
  hasVirtualPlants: false,
  pathCost_spring: 0,
  pathCost_summer: 0,
  pathCost_fall: 0,
  pathCost_winter: 0,
  texture: 'World/Biomes/ExtremeDesert',
  wildAnimals: [
    {
      defName: 'Iguana',
      value: 0.3
    },
    {
      defName: 'Dromedary',
      value: 0.075
    },
    {
      defName: 'Megascarab',
      value: 1
    },
    {
      defName: 'Rat',
      value: 0.15
    },
    {
      defName: 'FoxFennec',
      value: 0.04
    }
  ],
  wildPlants: [
    {
      defName: 'PlantAgave',
      value: 0.25
    },
    {
      defName: 'PlantSaguaroCactus',
      value: 1
    },
    {
      defName: 'PlantGrass',
      value: 6
    }
  ],
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
    },
    {
      defName: 'GutWorms',
      value: 40
    },
    {
      defName: 'MuscleParasites',
      value: 40
    }
  ],
  defName: 'ExtremeDesert'
}

export default ExtremeDesert;
