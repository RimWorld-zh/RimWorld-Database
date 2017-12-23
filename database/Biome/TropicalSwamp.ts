const TropicalSwamp: DataBiome = {
  animalDensity: 4,
  plantDensity: 0.85,
  diseaseMtbDays: 30,
  factionBaseSelectionWeight: 0.4,
  impassable: false,
  hasVirtualPlants: true,
  pathCost_spring: 15000,
  pathCost_summer: 15000,
  pathCost_fall: 15000,
  pathCost_winter: 15000,
  texture: 'World/Biomes/TropicalSwamp',
  wildAnimals: [
    {
      defName: 'Panther',
      value: 0.09
    },
    {
      defName: 'Cassowary',
      value: 0.7
    },
    {
      defName: 'Emu',
      value: 0.2
    },
    {
      defName: 'Turkey',
      value: 0.2
    },
    {
      defName: 'Alpaca',
      value: 0.5
    },
    {
      defName: 'Elephant',
      value: 0.02
    },
    {
      defName: 'Capybara',
      value: 0.1166667
    },
    {
      defName: 'Chinchilla',
      value: 0.6
    },
    {
      defName: 'Rat',
      value: 1
    },
    {
      defName: 'WildBoar',
      value: 0.1333333
    },
    {
      defName: 'Tortoise',
      value: 0.6
    },
    {
      defName: 'Cobra',
      value: 0.17
    },
    {
      defName: 'Monkey',
      value: 0.2
    },
    {
      defName: 'Boomalope',
      value: 0.1555555
    }
  ],
  wildPlants: [
    {
      defName: 'PlantTallGrass',
      value: 4.8
    },
    {
      defName: 'PlantBush',
      value: 0.15
    },
    {
      defName: 'PlantTreeWillow',
      value: 1.72
    },
    {
      defName: 'PlantTreeCypress',
      value: 1.72
    },
    {
      defName: 'PlantTreeMaple',
      value: 1.72
    },
    {
      defName: 'PlantChokevine',
      value: 0.8
    },
    {
      defName: 'PlantShrubLow',
      value: 2
    },
    {
      defName: 'PlantAlocasia',
      value: 0.8
    },
    {
      defName: 'PlantClivia',
      value: 0.07
    },
    {
      defName: 'PlantRafflesia',
      value: 0.0008
    }
  ],
  diseases: [
    {
      defName: 'Flu',
      value: 100
    },
    {
      defName: 'Plague',
      value: 100
    },
    {
      defName: 'Malaria',
      value: 160
    },
    {
      defName: 'SleepingSickness',
      value: 140
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
      value: 80
    },
    {
      defName: 'MuscleParasites',
      value: 80
    }
  ],
  defName: 'TropicalSwamp'
}

export default TropicalSwamp;
