const DoBillsStonecut: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'TableStonecutter'
  ],
  defName: 'DoBillsStonecut'
}

export default DoBillsStonecut;
