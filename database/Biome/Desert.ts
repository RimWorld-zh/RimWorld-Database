const Desert: DataBiome = {
  animalDensity: 0.25,
  plantDensity: 0.05,
  diseaseMtbDays: 80,
  factionBaseSelectionWeight: 0.65,
  impassable: false,
  hasVirtualPlants: true,
  pathCost_spring: 0,
  pathCost_summer: 0,
  pathCost_fall: 0,
  pathCost_winter: 0,
  texture: 'World/Biomes/Desert',
  wildAnimals: [
    {
      defName: 'Gazelle',
      value: 0.01176471
    },
    {
      defName: 'Iguana',
      value: 0.7
    },
    {
      defName: 'Dromedary',
      value: 0.25
    },
    {
      defName: 'Cougar',
      value: 0.02
    },
    {
      defName: 'Emu',
      value: 0.02
    },
    {
      defName: 'Ostrich',
      value: 0.2
    },
    {
      defName: 'Megascarab',
      value: 1
    },
    {
      defName: 'Rat',
      value: 0.3
    },
    {
      defName: 'Boomalope',
      value: 0.04444445
    },
    {
      defName: 'FoxFennec',
      value: 0.02
    }
  ],
  wildPlants: [
    {
      defName: 'PlantAgave',
      value: 0.25
    },
    {
      defName: 'PlantPincushionCactus',
      value: 1
    },
    {
      defName: 'PlantSaguaroCactus',
      value: 1
    },
    {
      defName: 'PlantTreeDrago',
      value: 0.45
    },
    {
      defName: 'PlantGrass',
      value: 6
    },
    {
      defName: 'PlantBush',
      value: 0.25
    },
    {
      defName: 'PlantDandelion',
      value: 0.5
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
      value: 60
    },
    {
      defName: 'MuscleParasites',
      value: 60
    }
  ],
  defName: 'Desert'
}

export default Desert;
