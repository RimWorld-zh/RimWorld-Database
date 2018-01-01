const DoBillsUseCraftingSpot: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'CraftingSpot'
  ],
  defName: 'DoBillsUseCraftingSpot'
}

export default DoBillsUseCraftingSpot;
