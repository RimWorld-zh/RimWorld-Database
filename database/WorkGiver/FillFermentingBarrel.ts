const FillFermentingBarrel: DataWorkGiver = {
  workType: 'Hauling',
  workTags: [
    WorkTags.None
  ],
  priorityInType: 19,
  requiredCapacities: [
    'Manipulation'
  ],
  tagToGive: JobTag.MiscWork,
  fixedBillGiverDefs: null,
  defName: 'FillFermentingBarrel'
}

export default FillFermentingBarrel;
