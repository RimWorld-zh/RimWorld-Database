const Crafting: DataWorkType = {
  naturalPriority: 400,
  relevantSkills: [
    'Crafting'
  ],
  workGiversByPriority: [
    'DoBillsMedicalMechanoidOperation',
    'DoBillsUseCraftingSpot',
    'DoBillsRefinery',
    'DoBillsProduceDrugs',
    'DoBillsStonecut',
    'DoBillsSmelter'
  ],
  workTags: [
    WorkTags.ManualSkilled,
    WorkTags.Crafting
  ],
  defName: 'Crafting'
}

export default Crafting;
