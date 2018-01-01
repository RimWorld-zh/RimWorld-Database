const TakeBeerOutOfFermentingBarrel: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 20,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'TakeBeerOutOfFermentingBarrel'
}

export default TakeBeerOutOfFermentingBarrel;
