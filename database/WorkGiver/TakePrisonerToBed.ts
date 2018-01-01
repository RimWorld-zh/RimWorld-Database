const TakePrisonerToBed: DataWorkGiver = {
  workType: 'Warden',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 90,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'TakePrisonerToBed'
}

export default TakePrisonerToBed;
