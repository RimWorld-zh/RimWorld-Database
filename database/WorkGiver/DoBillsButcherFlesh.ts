const DoBillsButcherFlesh: DataWorkGiver = {
  workType: 'Cooking',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'TableButcher'
  ],
  defName: 'DoBillsButcherFlesh'
}

export default DoBillsButcherFlesh;
