const ColdBog: DataBiome = {
  animalDensity: 0.8,
  plantDensity: 0.52,
  diseaseMtbDays: 80,
  factionBaseSelectionWeight: 0.17,
  impassable: false,
  hasVirtualPlants: true,
  pathCost_spring: 3000,
  pathCost_summer: 3000,
  pathCost_fall: 3000,
  pathCost_winter: 46000,
  texture: 'World/Biomes/ColdBog',
  wildAnimals: [
    {
      defName: 'Muffalo',
      value: 0.08333334
    },
    {
      defName: 'GrizzlyBear',
      value: 0.008
    },
    {
      defName: 'PolarBear',
      value: 0.008
    },
    {
      defName: 'Cougar',
      value: 0.008
    },
    {
      defName: 'Lynx',
      value: 0.015
    },
    {
      defName: 'Megasloth',
      value: 0.02
    },
    {
      defName: 'Hare',
      value: 0.5
    },
    {
      defName: 'Snowhare',
      value: 0.5
    },
    {
      defName: 'Husky',
      value: 0.008
    },
    {
      defName: 'Squirrel',
      value: 1
    },
    {
      defName: 'Rat',
      value: 0.4
    },
    {
      defName: 'Ibex',
      value: 0.05
    },
    {
      defName: 'Elk',
      value: 0.04166667
    },
    {
      defName: 'Caribou',
      value: 0.125
    },
    {
      defName: 'Warg',
      value: 0.002285714
    },
    {
      defName: 'WolfTimber',
      value: 0.008
    },
    {
      defName: 'WolfArctic',
      value: 0.06
    },
    {
      defName: 'FoxRed',
      value: 0.008
    },
    {
      defName: 'FoxArctic',
      value: 0.03
    }
  ],
  wildPlants: [
    {
      defName: 'PlantTallGrass',
      value: 0.24
    },
    {
      defName: 'PlantBush',
      value: 0.03
    },
    {
      defName: 'PlantWildHealroot',
      value: 0.005
    },
    {
      defName: 'PlantTreeWillow',
      value: 0.06
    },
    {
      defName: 'PlantTreeCypress',
      value: 0.06
    },
    {
      defName: 'PlantTreeMaple',
      value: 0.06
    },
    {
      defName: 'PlantChokevine',
      value: 0.3
    },
    {
      defName: 'PlantAstragalus',
      value: 0.01
    },
    {
      defName: 'PlantMoss',
      value: 0.05
    },
    {
      defName: 'PlantRaspberry',
      value: 0.01
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
      value: 40
    },
    {
      defName: 'SensoryMechanites',
      value: 40
    },
    {
      defName: 'GutWorms',
      value: 30
    },
    {
      defName: 'MuscleParasites',
      value: 30
    }
  ],
  defName: 'ColdBog'
}

export default ColdBog;
