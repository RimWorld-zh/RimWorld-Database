const DoBillsRefinery: DataWorkGiver = {
  workType: 'Crafting',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 97,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'Refinery'
  ],
  defName: 'DoBillsRefinery'
}

export default DoBillsRefinery;
