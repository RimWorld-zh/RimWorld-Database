const DoBillsSmelter: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 80,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ElectricSmelter'
  ],
  defName: 'DoBillsSmelter'
}

export default DoBillsSmelter;
