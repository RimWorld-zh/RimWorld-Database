const DoBillsHaulCampfire: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 30,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: [
    'Campfire'
  ],
  defName: 'DoBillsHaulCampfire'
}

export default DoBillsHaulCampfire;
