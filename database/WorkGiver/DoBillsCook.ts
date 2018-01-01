const DoBillsCook: DataWorkGiver = {
  workType: 'Cooking',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 100,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'ElectricStove',
    'FueledStove'
  ],
  defName: 'DoBillsCook'
}

export default DoBillsCook;
